const createForm = document.querySelector(".create_location");
const changeForm = document.querySelector(".change");
const createButton  = document.querySelector(".all-location__search-container button");
const changeButton = document.querySelector(".all-location__item-change");

function Change (event) {
    if (event.target.classList.contains("cancel")) {
        event.target.closest("form").style.top = "-150%";
        document.querySelector("body").style.setProperty("--opacity", 0);
        setTimeout(() => {
          document.querySelector("body").style.setProperty("--display", "none");
        }, 1000)
  }

  if (event.target.classList.contains("selector")) {
      if(!event.target.classList.contains("active")) {
          event.target.style.setProperty("--new-rotate", "-90deg")
          event.target.classList.toggle("active");
      event.target.querySelector(".select_list").style.display = "block";
      let height = event.target.querySelector(".select_list").scrollHeight; 
      event.target.querySelector(".select_list").style.height = height + "px";
      } else {
          event.target.style.setProperty("--new-rotate", "0")
          event.target.classList.toggle("active");
          event.target.querySelector(".select_list").style.height = 0;
          setTimeout(() => {
              event.target.querySelector(".select_list").style.display = "none";
          }, 500)
      }
      
  }
}

createButton.addEventListener("click", () => {
    createForm.style.top = "50%";
    document.querySelector('body').style.setProperty("--display", "block");
    setTimeout(() => {
        document.querySelector("body").style.setProperty("--opacity", 0.5);
    }, 10)
})

createForm.addEventListener("click", (event) => {
   Change(event);
})

changeButton.addEventListener("click", () => {
    changeForm.style.top = "50%";
    document.querySelector('body').style.setProperty("--display", "block");
    setTimeout(() => {
        document.querySelector("body").style.setProperty("--opacity", 0.5);
    }, 10)

    changeForm.querySelector(".create_location-title span").textContent = changeButton.parentElement.querySelector(".all-location__item-name").textContent;
})

changeForm.addEventListener("click", (event) => {
    Change(event);
})