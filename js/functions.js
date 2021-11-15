let imageZone = document.querySelector("#images")
const image = document.querySelector("#img")
let onLoad = true
let counter1 = 0
let counter2 = 0
let imageUrl = ""
let imageAuthor = ""
let oldImageUrl = ""
let oldImageAuthor = ""

// Using the data that the Axios.JS file grabbed from Picsum, this function creates usable varibales and displays the images on the page.
function getRandomImage(data){
  let randomImage = Math.floor(Math.random() * (data.length))
  let displayImage = data[randomImage]
  imageUrl = displayImage.download_url
  imageAuthor = displayImage.author
  // Here the main image is set and updated.
  image.style.backgroundImage = `url("${imageUrl}")`
  // This section uses JQuery to create my list of objects and their contents.
  if (onLoad == false){
    let email = document.querySelector("#email").value
    $("#images").append($("<div><div class='list-item-img'></div><div class='list-item-info'><p>" + email + "</p><p><i class='fas fa-camera'></i> : " + oldImageAuthor + "</p></div></div>"))
    $(".list-item-img").last().css("background-image", 'url(' + oldImageUrl + ')')
  }
  // Here the variables are updated to be ready for the next cycle of this function.
  oldImageUrl = imageUrl
  oldImageAuthor = imageAuthor
  onLoad = false
}

// This function keeps track of how many rows their should be in the list section.
const zoneGrow = function(){
  imageZone = document.querySelector("#images")
  counter1 = counter1 + 1
  counter2 = counter2 + 0.5
  zoneSize()
  imageZone.style.marginTop = "20px"
  imageZone.style.paddingTop = "10px"
}

// This section calculates how tall the list area is, and if their should be 1 or 2 columns.
const zoneSize = function(){
  let windowWidth = window.innerWidth
  if (windowWidth < 1025){
    let zoneHeight = counter1 * 210
    imageZone.style.height = `${zoneHeight}px`
  } else {
    let counter2Round = Math.round(counter2)
    let zoneHeight = counter2Round * 210
    imageZone.style.height = `${zoneHeight}px`
  }
}
