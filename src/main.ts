import "./style.css";
export const materials = ["dirt", "hardwood", "wood", "water", "fire", "iron", "copper", "sand", "grass", "leaf", "carrot", "rock"]
console.log(1)
export const makes = {
  "camp fire":{},
  "lighter":{},
  "brick":{},
  "kiln":{},
  "spear":{},
  "wire":{},
  "spear head":{},
  "knife":{},
  "pipe":{},
  "water purifier":{},
}

// const game = ()=>{}
var pages = [
  "main",
  "shelter",
  "water",
  "fire",
  "traps",
  "foraging",
  "hunting",
  "learning",
  "inventory",
  "crafting",
  "map",
  "traps",
  "foraging",
  "hunting",
  
]
var currentPage = "main"

for(let i=0;i<pages.length;i++){
  document.querySelector("#"+pages[i]+"-button")?.addEventListener("click",()=>{
    if(currentPage == pages[i]) return;
    document.querySelector("#"+currentPage+"-page")?.classList.add("display-off");
    console.log(currentPage)
    currentPage = pages[i];
    document.querySelector("#"+currentPage+"-page")?.classList.remove("display-off");
  })
}