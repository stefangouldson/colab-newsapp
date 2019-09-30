
const button = document.getElementsByClassName('dropbtn');
const input = document.getElementById('location');
const title = document.getElementsByClassName('main-story-title');
const content = document.getElementsByClassName('main-story-text');
const img = document.getElementsByClassName('main-story-img-cont');

button.addEventListener('click', async () => {
    title.textContent= " ";
    img.textContent = " ";
    content.innerHTML = " ";


    let response = await fetch(`http://localhost:3006/news?${input.value}=${newsType}`);
    let data = await response.json();
    console.log(data.content)
    content.innerHTML = data.content;
    title.innerHTML = data.title;
    img.innerHTML = data.urlTOImage;
})

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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
