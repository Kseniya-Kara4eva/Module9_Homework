const btn = document.querySelector(".btn");
const result = document.querySelector(".result");


   function getImage(data) {
  let image = '';
  for (item in data){
 image += `
 <div class="card">
  <img src="${data[item].download_url}" class="card-image" width=50%/></div>`;
  }
  result.innerHTML = image;
  localStorage.setItem("imageData", JSON.stringify(data));
}

btn.addEventListener('click', () => {
  const pageNumber = document.querySelector('.pageNumber').value;
  const limit = document.querySelector('.limit').value;
  if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) {
    result.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
  } else if (isNaN(pageNumber) || limit < 1 || limit > 10) {
  result.innerHTML = 'Лимит вне диапазона от 1 до 10';
  } else if ((isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) && (isNaN(limit) || limit < 1 || limit > 10 )) {
 result.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
 }else fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
 .then((response) => {
   return response.json();
   })
  .then((data) => {
   getImage(data);
 })
   .catch(() => { console.log('error') });
});
  
window.addEventListener('load', () => {
  const storedData = localStorage.getItem("imageData");
  if (storedData) {
    generateImage(JSON.parse(storedData));
  }
});