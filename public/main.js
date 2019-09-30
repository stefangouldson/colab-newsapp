
const button = document.getElementById('but');
const input = document.getElementById('country');
const title = document.getElementsByClassName('main-story-title');
const content = document.getElementsByClassName('main-story-text');
const img = document.getElementsByClassName('main-story-img-cont');
const gen = document.getElementById('general');
const sprt = document.getElementById('sport');
const bus = document.getElementById('business');
const drpDown = document.getElementById("drpDownButton");

let newsType = "";


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


drpDown.addEventListener("click", ()=> {
  document.getElementById("myDropdown").classList.toggle("show");
})

gen.addEventListener("click", ()=> {
    newsType = "general"
    document.getElementById('drpDownButton').innerText = "General"
    console.log(newsType);
  })

sprt.addEventListener("click", ()=> {
    newsType = "sport"
    document.getElementById('drpDownButton').innerText = "Sport"
    console.log(newsType);
  })

bus.addEventListener("click", ()=> {
    newsType = "business"
    document.getElementById('drpDownButton').innerText = "Business"
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

