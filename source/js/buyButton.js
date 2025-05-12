(function() {
      const buyButtons = document.querySelectorAll('.card__basketButton');
      const cartContainer = document.querySelectorAll('.card__hiddenBlock');
      const cartItemsList = document.querySelectorAll('.card');

      // Обработчик для каждой кнопки "Купить"
      buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Получаем информацию о товаре из карточки
            const card = button.closest('.card');
            const productName = card.querySelector('h3').textContent;
            // Добавляем товар в список (или выполняем другие действия с корзиной)
            const listItem = document.createElement('li');
            listItem.textContent = productName;
            cartItemsList.appendChild(listItem);

            // Показываем блок с товаром
            cartContainer.style.display = 'block';
        });
      });

      // Закрытие окна корзины при клике вне его
        window.addEventListener('click', function(event) {
            if (event.target === cartContainer) {
                cartContainer.style.display = 'none';
            }
        });
})();
