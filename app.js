// javascript funcctionality of the button

// getting the values of the button by class
const likeBtns = document.querySelectorAll(".like_btn");

// getting the values of the button by id
//like icons

let likeIcon = document.querySelectorAll("#icon");

// individual counts
let count = document.querySelectorAll("#count");

  let clicked = false;
  var num=0;

// add eventlister to first buttion to increase count 
likeBtns.forEach(like_btn => {

  like_btn.addEventListener("click", (event) => {
  
      if (!clicked) {
        clicked = true;
        likeIcon.forEach(icon => {
          icon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        })
        count.forEach(count => {
          count.textContent++;
        })
  
        num = num+1
        console.log("total"+num)
  
      } else {
        clicked = false;
        likeIcon.forEach(icon => {
          icon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
      })
      count.forEach(count => {
        count.textContent--;
      })
      }
    });
  
  })
  