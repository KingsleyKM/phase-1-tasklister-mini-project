document.addEventListener("DOMContentLoaded", () => {
  // your code here
 let form = document.querySelector("form")
 form.addEventListener("submit",(e) => {
    e.preventDefault()
    handleTasks(document.querySelector("input").value)
    form.reset()
  })
});
function handleTasks (task){
  console.log(task)
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.addEventListener("click",handleDelete)
  btn.textContent = "x"
  p.textContent = `${task} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector("#tasks").appendChild(p)
  // document.querySelector("list").appendChild(p)
}
function handleDelete(e){
  e.target.parentNode.remove()
}
