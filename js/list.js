const imageZone = document.querySelector("#images")
let image = document.querySelector("#img")

submitElement.addEventListener("click", function(){
  if (correctEmail == true){
    imageZone.style.height = "400px"
    imageZone.style.marginTop = "20px"
  }
})

const form = document.querySelector("#form")

form.addEventListener("submit", function(event){
  event.preventDefault()

  let width = document.querySelector("#width").value
  let height = document.querySelecotr("#height").value

  let url = `https://picsum.photos/${width}//${height}`

  let image = document.querySelecotr("#img")

  image.src url
})





// const randomPage = Math.floor(Math.random() * (10) + 1);
//
// const getImages = () => {
//   const randomPage = Math.floor(Math.random() * (10) + 1);
//   axios.get(`https://picsum.photos/v2/list?page=${randomPage}&limit=100`)
//   .then(response => {
//     pickRandomImage(response.data);
//     // console.log(response.data)
//   });
// };
//
//
//
// document.onload = function(){
//   function pickRandomImage(data){
//     let randomImage = Math.floor(Math.random() * (data.length));
//     let displayImage = data[randomImage];
//     let imageUrl = displayImage.download_url;
//     let imageId = displayImage.id;
//     let imageAuthor = displayImage.author;
//     console.log(displayImage)
//     image.style.backgroundImage = "src='https://picsum.photos/id/'" + imageId
//   }
// }
