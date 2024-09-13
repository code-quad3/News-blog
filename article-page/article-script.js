let uRl =sessionStorage.getItem("apiUrl");
const button =document.querySelector("button");
uRl=uRl+"&show-fields=all";




//ui of article
fetch(uRl)
.then((response) => response.json())
.then((json) => showArt(json))
.catch((error) => console.error(`Error fetching data: ${error.message}`));
function showArt(json){
console.log(json.response.content.fields.body);
const img =document.querySelector("img");
const hDln= document.querySelector('h1');
const sectionz = document.querySelector('section');
hDln.textContent=json.response.content.fields.headline;
img.src=json.response.content.fields.thumbnail;
const Tempdiv= document.createElement('div');
Tempdiv.innerHTML=json.response.content.fields.body;
sectionz.appendChild(Tempdiv);
button.style.visibility="visible";
}


//back to home
button.addEventListener("click",(e)=>{
    e.preventDefault();
    sessionStorage.clear();
    window.location.href="../home-page/index.html";
})