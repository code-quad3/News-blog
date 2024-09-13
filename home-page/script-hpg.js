

let baseUrL='https://content.guardianapis.com/search?q=home';
const key='0b6ce5e7-e144-4b66-baac-ce8a429bf91d';

let url=`&api-key=${key}&show-elements=image&show-fields=all&order-by=newest`;

function run(){

fetch(baseUrL+url)
.then((response) => response.json())
.then((json) => cards(json))
.catch((error) => console.error(`Error fetching data: ${error.message}`));


//ffunction to create cards
  function cards(json){
    console.log(json);
    let i=0;
    const art= json.response;
                         
    const cd =document.getElementById("cd");

      while (cd.firstChild) {
        cd.removeChild(cd.firstChild);
      }





    while(i<10){
    const div1= document.createElement("div");
    const a1= document.createElement("a");
    const img= document.createElement("img");
    const div2= document.createElement("div");
    const a2= document.createElement("a");
    const h5= document.createElement("h5");
    const p1= document.createElement("p");
    const a3= document.createElement("a");
    const svg= document.createElementNS("http://www.w3.org/2000/svg","svg");
 svg.setAttribute("aria-hidden","true");
    svg.setAttribute("fill","none");
    svg.setAttribute("viewBox","0 0 14 10");
    svg.setAttribute("class","rtl:rotate-180 w-3.5 h-3.5 ms-2");
    const path= document.createElementNS("http://www.w3.org/2000/svg","path");
    path.setAttribute("stroke","currentColor");
    path.setAttribute("stroke-linecap","round");
    path.setAttribute("stroke-linejoin","round");
    path.setAttribute("stroke-width","2");
    path.setAttribute("d","M1 5h12m0 0L9 1m4 4L9 9");
    svg.appendChild(path);
div1.className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 par";
div1.setAttribute("data-api-url",art.results[i].apiUrl);
a1.href="#";
img.className="rounded-t-lg" ;
img.src=art.results[i].fields.thumbnail;
div2.className="p-5";
h5.className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white";
h5.textContent=art.results[i].webTitle;
p1.className="mb-3 font-normal text-gray-700 dark:text-gray-400";
p1.textContent=art.results[i].fields.trailText;
a3.className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn";
a3.textContent="Read more";

//Redirecting intto new page for article
function ass(){
 const tempUrl= div1.getAttribute('data-api-url')+`?api-key=${key}`;
 sessionStorage.setItem("apiUrl",tempUrl);
 window.location.href="../article-page/article.html";
}
a3.addEventListener('click',ass);
a3.appendChild(svg);
a2.appendChild(h5);
div2.appendChild(a2);
div2.appendChild(p1);
a1.appendChild(img);
div1.appendChild(a1);
div1.appendChild(div2);
div1.appendChild(a3);
cd.appendChild(div1);
i++; 
    }
    const pag= document.querySelector(".pag");
pag.style.visibility="visible";
}


}


//navbar
const Btn =document.getElementById('btn');
const drpMn= document.getElementById('navbar-hamburger');
Btn.addEventListener("click",()=>{
  if(drpMn.style.display=='none'){
    drpMn.style.display="block";
  }
  else{
    drpMn.style.display='none';
  }
});

// Dynamic link coloring
const links =document.querySelectorAll(".link");
let oldclr="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
let nwClr="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600";
function handleLink(event){
  links.forEach(link=> link.className=oldclr);
  event.target.className=nwClr;
 searchTerm=  event.target.textContent;
  baseUrL=(baseUrL.slice(0,baseUrL.indexOf('=')+1)+searchTerm).toLowerCase();
  pgNum=0;
  run();

}

links.forEach(link => link.addEventListener('click',handleLink));
run();


const nex= document.querySelector('.nex');
const prev= document.querySelector('.prev');
let pgNum=0;
nex.addEventListener('click',()=>{ 

  pgNum++;
baseUrL=`${baseUrL}&page=${pgNum}`;
run();

});


prev.addEventListener('click',()=>{
  if(pgNum>0){
  pgNum--;
  baseUrL=`${baseUrL}&page=${pgNum}`;
  run();

}
});
