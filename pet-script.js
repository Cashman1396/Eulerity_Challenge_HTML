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
    img.classList.add("img-pets")
    img.crossOrigin = "Anonymous"
    img.src = data.url

    //text information for the pets from the server
    const text = document.createElement("div")
    text.classList.add("text")

    const petTitle = document.createElement("h2")
    petTitle.innerHTML = data.title 
    petTitle.classList.add("title-name")

    const petDate = doucment.createElement("p")
    const date = data.created.split(" ")
    petDate.innerHTML = `This pet joined on ${date[0]}, ${date[1]}, ${date[2]}, ${date[date[date.length - 1]]}}`
    petDate.classList.add("pet-date")

    //description of the pet
    const description  = document.createElement("p")
    description.innerHTML = data.description("description")
    description.classList.add("description")


    //download button for images and selecting multiple images
    const downloadBtn = document.createElement("button")
    downloadBtn.innerHTML = 'Select'
    downloadBtn.classList.add("download-btn")

    downloadBtn.addEventListener("click", () => {
        if (imgGallery.includes(data)) {
            const choice = imgGallery.findIndex(e => e === data)
            imgGallery,splice(choice, 1)
            imgGallery.classList.remove("selected-img")
        }
        else {
            imgGallery.push(data)
            img.classList.add('"selected-img')            
        }


        if (imgGallery.length === 0) {
            document.querySelector("download-page").removeChild(download)
        } 
        else 
        {
            document.querySelector("download-page").appendChild(download) 
        }
    })

    text.appendChild(petTitle)
    text.appendChild(petDate)
    text.appendChild(description)





}
