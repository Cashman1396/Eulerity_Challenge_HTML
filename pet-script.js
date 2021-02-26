//creates Array for Users and loads in images from the back end
const imgGallery = new Array()


//creates elements for downloading the images in the gallery
const header = document.createElement("div")
header.classList.add("download")

const downloadImgs = document.createElement("button")
downloadImgs.innerHTML = "Download images"
downloadImgs.classList.add("select-all-button")

header.appendChild(downloadImgs)


//creation of images and retreiving from server
const getImage = (data) => {
    const rootDiv = document.createElement("div")
    rootDiv.classList.add("img-container")

    const img = doucument.createElement("img")
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
    petDate.innerHTML = `This pet joined on ${date[0]}, ${date[1]}, ${date[2]}, ${date[date[date.length - 1]]}`
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
            img.classList.add("selected-img")            
        }


        if (imgGallery.length === 0) {
            document.querySelector("download").removeChild(download)
        } 
        else 
        {
            document.querySelector("download").appendChild(download) 
        }
    })

    text.appendChild(petTitle)
    text.appendChild(petDate)
    text.appendChild(description)

}


//calls for download uses axios
function callDownload(str) {
    axios({
        url: str.url,
        method: "GET",
        responseType: "blob"
        })
        .then((response) => {
            const url = window.webkitURL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `${str.title.replace(/ /g, "_")}.jpeg`)
            document.body.appendChild(link)
            link.click()
        })
}

//eventListener for when you download all images
downloadImgs.addEventListener("click", () => {
    imgGallery,forEach(e => {
        callDownload(e)
    })
})

const getPets = async () => {
    try {
        URL = "http://eulerity-hackathon.appspot.com/pets"
        const response = await axios.get(URL)
        const arr = response.data
        arr.forEach((e) => {
            createImage(e)
        })
    } catch (error) {
        console.log(`${error}`)
    }
}

getPets