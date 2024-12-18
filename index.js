const pexelsApi = "dspUVTadGygJLr3MGDIxb9sE4NQ9VETYZFJCL9Gdm6l7ausFWdWlAJBt";
const Search = document.querySelector(".find");



const fetchImages = async (query) => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${1}&per_page=${40}&orientation=landscape`, {
        headers: {
            Authorization: pexelsApi
        }   
    });
    const data = await response.json();
    // console.log(data)
    return data.photos;
}

Search.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let query = e.target.children[1].value
    const images = await fetchImages(query);
    let container = document.querySelector(".container")
    container.innerHTML=" "
    images?.forEach(image => {
        let img = document.createElement("img");
        img.src = image.src.original;
        container.append(img)
        console.log(image.src.original)
    });

    
    e.target.children[1].value=""

    // console.log(images[0].src.original);
})



async function ok(){
        let query = "new"
        const images =await fetchImages(query);
        let container = document.querySelector(".container")
        container.innerHTML=" "
        images?.forEach(image => {
            let img = document.createElement("img");
            img.src = image.src.original;
            img.setAttribute("loading","lazy")
            container.append(img)
            console.log(image.src.original)
        });    // console.log(images[0].src.original);
    }
ok()





// function ok(element) {
//     console.group(element.parentElement.children[1].value)
// }







// const fetchImages = async (query) => {
//     const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${1}&per_page=${40}&orientation=landscape`, {
//         headers: {
//             Authorization: pexelsApi
//         }   
//     });
//     const data = await response.json();
//     console.log(data)
//     return data.photos;
// }