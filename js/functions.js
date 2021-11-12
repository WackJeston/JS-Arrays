let imageZone = document.querySelector("#images")
const image = document.querySelector("#img")
let onLoad = true
let counter = 0
let imageUrl = ""
let imageAuthor = ""
let oldImageUrl = ""
let oldImageAuthor = ""

function getRandomImage(data){
  let randomImage = Math.floor(Math.random() * (data.length))
  let displayImage = data[randomImage]
  imageUrl = displayImage.download_url
  imageAuthor = displayImage.author
  image.style.backgroundImage = `url("${imageUrl}")`
  if (onLoad == false){
    $("#images").append($("<div><img src='" + oldImageUrl + "'></div>"))
    console.log(imageUrl)
  }
  oldImageUrl = imageUrl
  oldImageAuthor = imageAuthor
  onLoad = false
}

// ("<div><img src='" + oldImageUrl + "'></div>")

let createListItem = function(){

}

const zoneGrow = function(){
  let imageZone = document.querySelector("#images")
  counter = counter + 1
  let zoneHeight = counter * 110
  imageZone.style.height = `${zoneHeight}px`
  imageZone.style.marginTop = "20px"
  imageZone.style.paddingTop = "10px"
}



// let createItemSections = function(){
//   let currentDiv = document.querySelector(`${imageZone}:nth-last-child(1)`)
//   console.log(currentDiv)
//   for (let i = 0; i < 3; i++){
//     let newDiv = document.createElement("div")
//     currentDiv.appendChild(newDiv)
//   }
// }


// (`#images div:nth-last-child(${counter})`)
// ("#images div:nth-last-child(1)")
