let imageZone = document.querySelector("#images")
const image = document.querySelector("#img")
let onLoad = true
let firstTime = true
let counter1 = 0
let counter2 = 0
let imageUrl = ""
let imageAuthor = ""
let oldImageUrl = ""
let oldImageAuthor = ""

const emails = []

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
    let emailName0 = email.replace(".", "")
    let emailName = emailName0.replace("@", "")
    if (emails.includes(email) == false){
      zoneGrow()
      emails.push(email)
      $("#images").prepend($("<div class='extra-layer'><div class='email-section-container " + emailName + "'><h2>" + email + "</h2><div class='list-item-img'><div class='list-item-info'><p><i class='fas fa-camera'></i> : " + oldImageAuthor + "</p></div></div></div></div>"))
      $("." + emailName + " .list-item-img").first().css("background-image", 'url(' + oldImageUrl + ')')
    } else {
      $("#images ." + emailName).prepend($("<div class='list-item-img following-imgs'><div class='list-item-info'><p><i class='fas fa-camera'></i> : " + oldImageAuthor + "</p></div></div>"))
      $("." + emailName + " .list-item-img").first().css("background-image", 'url(' + oldImageUrl + ')')
    }
    // $("#images").append($("<div><div class='list-item-img'></div><div class='list-item-info'><p>" + email + "</p><p><i class='fas fa-camera'></i> : " + oldImageAuthor + "</p></div></div>"))
    // $(".list-item-img").last().css("background-image", 'url(' + oldImageUrl + ')')
  }
  // Here the variables are updated to be ready for the next cycle of this function.
  oldImageUrl = imageUrl
  oldImageAuthor = imageAuthor
  onLoad = false
}

// This function keeps track of how many rows their should be in the list section.
const zoneGrow = function(){
  imageZone = document.querySelector("#images")
  if (firstTime == true){
    imageZone.style.height = "300px"
    imageZone.style.marginTop = "10px"
    imageZone.style.marginBottom = "10px"
    firstTime = false
  } else {
    counter1 = counter1 + 1
    let zoneHeight1 = counter1 * 310
    let zoneHeight2 = zoneHeight1 + 300
    imageZone.style.height = zoneHeight2 + "px"
  }
}
