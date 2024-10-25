document.addEventListener("DOMContentLoaded", function () {
  const openBtn1 = document.getElementById("openBtn1");
  const openBtn2 = document.getElementById("openBtn2");
  const openBtn3 = document.getElementById("openBtn3");
  const openBtn4 = document.getElementById("openBtn4");
  const openBtn5 = document.getElementById("openBtn5");
  const openBtn6 = document.getElementById("openBtn6");
  const openBtn7 = document.getElementById("openBtn7");
  const openBtn8 = document.getElementById("openBtn8");
  const openBtn9 = document.getElementById("openBtn9");
  const closeBtn1 = document.getElementById("closeBtn1");
  const modal = document.getElementById("modalRequest");

  function openCheck(modal) {
    if (modal.hasAttribute("open")) {
      console.log("Modal open");
    } else {
      console.log("Modal closed");
    }
  }

  function openModal() {
    modal.showModal();
    openCheck(modal);
  }

  function closeModal() {
    if (modal.hasAttribute("open")) {
      modal.close();
      openCheck(modal);
    }
  }

  openBtn1.addEventListener("click", openModal);
  openBtn2.addEventListener("click", openModal);
  openBtn3.addEventListener("click", openModal);
  openBtn4.addEventListener("click", openModal);
  openBtn5.addEventListener("click", openModal);
  openBtn6.addEventListener("click", openModal);
  openBtn7.addEventListener("click", openModal);
  openBtn8.addEventListener("click", openModal);
  openBtn9.addEventListener("click", openModal);
  closeBtn1.addEventListener("click", closeModal);

  // Закрытие модального окна при нажатии клавиши Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.hasAttribute("open")) {
      closeModal();
    }
  });
});
