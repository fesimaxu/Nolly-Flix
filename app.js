const likeBtns = document.querySelectorAll(".like_btn");
console.log(likeBtns)

let likeIcon = document.querySelectorAll("#icon");
console.log(likeIcon)
  count = document.querySelectorAll("#count");
  console.log(count)

  let clicked = false;
  var num=0;

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

