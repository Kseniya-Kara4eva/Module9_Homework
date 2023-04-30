// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result');
//Находим кнопку, которую надо нажать для выполнения запроса
const btnNode = document.querySelector('.btn');

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', () => {
  const value1 = document.querySelector('.inp1').value;
  const value2 = document.querySelector('.inp2').value;
  if (isNaN(value1) || isNaN(value2) || value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300) {
      resultNode.innerHTML = "Одно из чисел вне диапазона от 100 до 300";
  } else 
    fetch(`https://picsum.photos/${value1}/${value2}`)
  .then((response) => {
      download_url = response.url
      let image = ''
      const cards = `
      <div class="card">
        <img
          src="${download_url}"
          calss = "card-image"
         />`;
      image = image + cards
      resultNode.innerHTML = image;
    });
  });



