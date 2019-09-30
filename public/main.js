
const button = document.getElementById('but');
const input = document.getElementById('country');


const title = document.getElementById('main-story-title');
const content = document.getElementById('main-story-text');
const img = document.getElementById('myPic');

const title2 = document.getElementById('sub-story2-title');
const content2 = document.getElementById('sub-story2-text');
const img2 = document.getElementById('myPic2');

const title3 = document.getElementById('sub-story3-title');
const content3 = document.getElementById('sub-story3-text');
const img3 = document.getElementById('myPic3');

const title4 = document.getElementById('sub-story4-title');
const content4 = document.getElementById('sub-story4-text');
const img4 = document.getElementById('myPic4');

const gen = document.getElementById('general');
const sprt = document.getElementById('sport');
const bus = document.getElementById('business');
const ent = document.getElementById('entertainment')
const hea = document.getElementById('health')
const sci = document.getElementById('science')
const tec = document.getElementById('technology')
const drpDown = document.getElementById("drpDownButton");

let newsType = "";


button.addEventListener('click', async () => {
    let response = await fetch(`http://localhost:3005/news?location=${input.value}&cat=${newsType}`);
    let data = await response.json();

    content.innerText = data.content;
    title.innerText = data.title;
    img.src = data.image;

    content2.innerText = data.content2;
    title2.innerText = data.title2;
    img2.src = data.image2;

    content3.innerText = data.content3;
    title3.innerText = data.title3;
    img3.src = data.image3;

    content4.innerText = data.content4;
    title4.innerText = data.title4;
    img4.src = data.image4;
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

  ent.addEventListener("click", ()=> {
    newsType = "entertainment"
    document.getElementById('drpDownButton').innerText = "Entertainment"
    console.log(newsType);
  })

  hea.addEventListener("click", ()=> {
    newsType = "health"
    document.getElementById('drpDownButton').innerText = "Health"
    console.log(newsType);
  })

  sci.addEventListener("click", ()=> {
    newsType = "science"
    document.getElementById('drpDownButton').innerText = "Science"
    console.log(newsType);
  })

  tec.addEventListener("click", ()=> {
    newsType = "technology"
    document.getElementById('drpDownButton').innerText = "Technology"
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

