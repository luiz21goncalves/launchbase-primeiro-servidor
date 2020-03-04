const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {

  card.addEventListener("click", function() {
    cardId = card.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector(".modal").classList.add("minimized");
    document.querySelector("iframe").src = `https://rocketseat.com.br/${cardId}`;
  });
};

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
  document.querySelector("iframe").src = "";
});

document.querySelector(".maximize-modal").addEventListener("click", function() {
  modalOverlay.querySelector(".modal").classList.remove("minimized");
});

document.querySelector(".minimize-modal").addEventListener("click", function() {
  modalOverlay.querySelector(".modal").classList.add("minimized");
});
