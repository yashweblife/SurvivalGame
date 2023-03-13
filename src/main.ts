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
var currentPage = "main-page"
document.querySelector("#shelter-button")?.addEventListener("click",()=>{
  document.querySelector("#shelter-page")?.classList.toggle("display-off");
})
document.querySelector("#return-button")?.addEventListener("click",()=>{
  document.querySelector("#main-page")?.classList.toggle("display-off");
})
