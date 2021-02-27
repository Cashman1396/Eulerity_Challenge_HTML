//creates Array for Users and loads in images from the back end
const imgGallery = new Array()


//creates elements for downloading the images in the gallery
const header = document.createElement("div")
header.classList.add("header")

const downloadImgs = document.createElement("button")
downloadImgs.innerHTML = "Download images"
downloadImgs.classList.add("select-all-button")

header.appendChild(downloadImgs)


//creation of images and retreiving from server
const getImage = (data) => {
    const rootDiv = document.createElement("div")
    rootDiv.classList.add("img-container")

    const img = document.createElement("img")
    img.classList.add("img-pets")
    img.crossOrigin = "Anonymous"
    img.src = data.url

    //text information for the pets from the server
    const textDiv = document.createElement("div")
    textDiv.classList.add("text-Div")

    const petsTitle = document.createElement("h2")
    petsTitle.innerHTML = data.title 
    petsTitle.classList.add("title-name")

    const petsDate = document.createElement("p")
    const date = data.created.split(" ")
    petsDate.innerHTML = `This pet joined on ${date[0]}, ${date[1]}, ${date[2]}, ${date[date[date.length - 1]]}`
    petsDate.classList.add("pet-date")

    //description of the pet
    const petsDescription = document.createElement("p")
    petsDescription.innerHTML = data.description
    petsDescription.classList.add("description")


    //download button for images and selecting multiple images
    const downloadBtn = document.createElement("button")
    downloadBtn.innerHTML = 'Select'
    downloadBtn.classList.add("download-btn")

    downloadBtn.addEventListener("click", () => {
        if (imgGallery.includes(data)) {
            const choice = imgGallery.findIndex(e => e === data)
            imgGallery.splice(choice, 1)
            img.classList.remove("selected-img")
        }
        else {
            imgGallery.push(data)
            img.classList.add("selected-img")            
        }


        if (imgGallery.length === 0) {
            document.querySelector("#header-page").removeChild(header)
        } 
        else 
        {
            document.querySelector("#header-page").appendChild(header) 
        }
    })

    textDiv.appendChild(petsTitle)
    textDiv.appendChild(petsDate)
    textDiv.appendChild(petsDescription)

    const buttonDiv = document.createElement("div")
    buttonDiv.classList.add("download-container")
    buttonDiv.appendChild(downloadBtn)
    textDiv.appendChild(buttonDiv)

    rootDiv.appendChild(img)
    rootDiv.appendChild(textDiv)
    document.querySelector('#container').appendChild(rootDiv)

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
    imgGallery.forEach(e => {
        callDownload(e)
    })
})

const getPets = async () => {
    try {
        URL = "http://eulerity-hackathon.appspot.com/pets"
        const response = await axios.get(URL)
        const arr = response.data
        arr.forEach((e) => {
            getImage(e)
        })
    } catch (error) {
        console.log(`${error}`)
    }
}

getPets()