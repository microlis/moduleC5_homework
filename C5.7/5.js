const btn = document.querySelector('.j-btn');
const resultNode = document.querySelector('.j-result');

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    xhr.send();
};

function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
    localStorage.setItem('images', cards)
}

let images = localStorage.getItem('images');
resultNode.innerHTML = images;

btn.addEventListener('click', () => {
    const value1 = document.querySelector('.j-input-1').value;
    const value2 = document.querySelector('.j-input-2').value;
    if ((value1 < 1 || value1 > 10) && (value2 < 1 || value2 > 10)) {
        resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (value1 < 1 || value1 > 10) {
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else if (value2 < 1 || value2 > 10) {
        resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
    } else {
        useRequest('https://picsum.photos/v2/list?page=' + value1 + '&limit=' + value2, displayResult)
    }
});