//creates Array for Users and loads in images from the back end
const imgGallery = new Array()


//creates elements for downloading the images in the gallery
const download = doucment.createElement("div")
download.classList.add("download")

const downloadImg = document.createElement("button")
downloadImg.innerHTML = "Download these images"
downloadImg.classList.add("select-all-button")

download.appendChild(downloadImg)


//creation of images and retreiving from server
const getImage = (data) => {
    const rootDiv = document.createElement("div")
    rootDiv.classList.add("img-container")

    const img = doucment.createElement("img")
}
