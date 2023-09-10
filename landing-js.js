const abrir = document.querySelector("#abrir-modal");
const fechar = document.querySelector("#fechar");
const fade = document.querySelector("#fade");
const modal = document.querySelector("#card-modal");

fechar.addEventListener("click", () => {
  toggleModal();
});

function toggleModal() {
  fade.classList.toggle("hide");
  modal.classList.toggle("hide");
}

[abrir, fechar, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
