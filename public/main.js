const button = document.getElementById('but');
const input = document.getElementById('location');
const title = document.getElementById('place');
const content = document.getElementById('summary');
const img = document.getElementById('image');

button.addEventListener('click', async () => {
    title.textContent= " ";
    img.textContent = " ";
    content.innerHTML = " ";


    let response = await fetch(`http://localhost:3006/weather?location=${input.value}`);
    let data1 = await response.json();
    img.innerHTML = data1[0].urlToImage;
    content.textContent = data1[0].content;
    title.textContent = data1[0].title
})
