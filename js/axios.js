
// Axios function
const getImages = () => {
  const randomNumber = Math.floor(Math.random() * (10) + 1)
  axios.get(`https://picsum.photos/v2/list?page=${randomNumber}&limit=100`)
  .then(response => {
    getRandomImage(response.data)
  })
}

getImages()
