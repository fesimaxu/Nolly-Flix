const likeBtn = document.querySelectorAll("#like_btn")

likeBtn.forEach(likeBtn =>{
    likeBtn.addEventListener("click", () => {
        if (!clicked) {
          clicked = true;
          likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
          count.textContent++;
        } else {
          clicked = false;
          likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
          count.textContent--;
        }
      });
})

