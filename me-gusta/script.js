//aumentar el recuento de me gusta de los botones
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(
    ".like-card-1, .like-card-2, .like-card-3"
  );
  cards.forEach((card) => {
    const likeBtn = card.querySelector(".like-btn");
    likeBtn.addEventListener("click", () => {
      const likes = card.querySelector(".likes");
      let contadorLikes = parseInt(likes.innerText.split(" ")[1]);
      likes.innerText = `Likes: ${++contadorLikes}`;
    });
  });
});
