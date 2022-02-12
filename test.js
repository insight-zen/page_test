function handle_dcl(){
  console.log(" * Begin handle dcl")
  let b = document.querySelector("body")
  b.insertAdjacentHTML("afterbegin", "<p class='blue ba_1'>Hellp again</p>")

}

document.addEventListener('DOMContentLoaded', () => { handle_dcl(); });
