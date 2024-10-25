// Смена текста кнопки при отправке формы заявки на обратный звонок
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.getElementsByClassName("call-form");

  for (const i = 0; i < forms.length; i++) {
    forms[i].onsubmit = function (event) {
      event.preventDefault();
      const submitBtn = this.getElementsByClassName("submit-btn")[0];
      submitBtn.textContent = "Заявка отправлена";
    };
  }
});

// Смена текста кнопки при отправке формы заказа на Services-Page
document.addEventListener("DOMContentLoaded", function () {
  const orderForms = document.getElementsByClassName("order-form");

  for (let i = 0; i < orderForms.length; i++) {
    orderForms[i].onsubmit = function (event) {
      event.preventDefault(); // Предотвращаем стандартную отправку формы

      const orderSubmitBtn = this.getElementsByClassName("order-submit-btn")[0];

      // Проверка чекбоксов
      const checkboxes = this.querySelectorAll(".modal__checkbox-input");
      let isChecked = false;

      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          isChecked = true;
        }
      });

      if (!isChecked) {
        alert("Пожалуйста, выберите хотя бы один чекбокс.");
        return; // Прекращаем выполнение, если ни один чекбокс не выбран
      }

      orderSubmitBtn.textContent = "Заказ отправлен";

      // Сброс всех введённых данных
      this.reset();
    };
  }
});
