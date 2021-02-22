const btn = document.querySelector('.j-btn');
const resultNode = document.querySelector('.j-result');

btn.addEventListener('click', () => {
    const value1 = document.querySelector('.j-input-1').value;
    const value2 = document.querySelector('.j-input-2').value;
    if (value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300) {
        resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
    } else {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        fetch('https://picsum.photos/' + value1 + '/' + value2, options)
            .then(response => response.json())
            .then(json => console.log(json))
    }
});
