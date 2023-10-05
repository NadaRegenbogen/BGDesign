const btnPage1 = document.querySelector("#first")
const btnPage2 = document.querySelector("#second")
const btnPage3 = document.querySelector("#third")
const btnPage4 = document.querySelector("#fourth")
const btnPage5 = document.querySelector("#fifth")

const btnP1 = document.querySelector("#erste")
const btnP2 = document.querySelector("#zweite")
const btnP3 = document.querySelector("#dritte")
const btnP4 = document.querySelector("#vierte")
const btnP5 = document.querySelector("#funfte")

const divPage1 = document.querySelector("#page1") 
const divPage2 = document.querySelector("#page2") 
const divPage3 = document.querySelector("#page3") 
const divPage4 = document.querySelector("#page4")
const divPage5 = document.querySelector("#page5")

 
btnPage1.addEventListener("click", () => {
    divPage1.scrollIntoView({"behavior": "smooth"})
})
btnPage2.addEventListener("click", () => {
    divPage2.scrollIntoView({"behavior": "smooth", "block":"center"})
})
btnPage3.addEventListener("click", () => {
    divPage3.scrollIntoView({"behavior": "smooth"})
})
btnPage4.addEventListener("click", () => {
    divPage4.scrollIntoView({"behavior": "smooth"})
})
btnPage5.addEventListener("click", () => {
    divPage5.scrollIntoView({"behavior": "smooth"})
})


btnP1.addEventListener("click", () => {
    divPage1.scrollIntoView({"behavior": "smooth"})
})
btnP2.addEventListener("click", () => {
    divPage2.scrollIntoView({"behavior": "smooth"})
})
btnP3.addEventListener("click", () => {
    divPage3.scrollIntoView({"behavior": "smooth"})
})
btnP4.addEventListener("click", () => {
    divPage4.scrollIntoView({"behavior": "smooth"})
})
btnP5.addEventListener("click", () => {
    divPage5.scrollIntoView({"behavior": "smooth"})
})

window.addEventListener("load", () => {

    let images = document.querySelectorAll("[data-image]")
    let imagesArray = []
    images.forEach(image => imagesArray.push(image))
    window.addEventListener("scroll", (e) => {
        for(let i = 0; i < imagesArray.length; i++) {
            const img_y2_3 = imagesArray[i].offsetTop * (2/3.0);
                                
            if(window.scrollY >= img_y2_3) {
                imagesArray[i].src = imagesArray[i].getAttribute("data-image")
                imagesArray.splice(i,1)
            }
        }
    })
})