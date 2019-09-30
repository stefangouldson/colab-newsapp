const button = document.getElementById('but');
const input = document.getElementById('location');
const title = document.getElementById('place');
const content = document.getElementById('summary');
const img = document.getElementById('image');

const gen = document.getElementById('general');
const sprt = document.getElementById('sport');
const bus = document.getElementById('business');

let newsType = "";


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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

gen.addEventListener("click", ()=> {
    newsType = "general"
    document.getElementById('drpDownButton').innerText = "General"
    console.log(newsType);
  })




// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById("country").innerText="type country"
