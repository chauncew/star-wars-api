const starCards = document.querySelector(".star-cards ")
const testing = document.querySelector(".testing")
const close = document.querySelector('.close')
const closeTab = document.querySelector(".closeTab")
const body = document.querySelector('body')
const wiki = document.querySelector('.star-cards a')




const getData = async () => {
    try{
        const fetchData = await fetch("https://akabab.github.io/starwars-api/api/all.json")
        const data = await fetchData.json()
        // console.log(data)
        data.map((info) => {
        starCards.innerHTML+= `
        <div class="cards">
            <img src=${info.image}></img>
            <div class="bottom-info">
                <h2 class="name">Name: ${info.name}</h2>
                <h2>Species: ${info.species}</h2>
                <h2>Home World: ${info.homeworld}</h2>
                <div class="anchor-button">
                    <a href=${info.wiki} target="_blank" class="anchor-button">More About ${info.name}</a>
                </div>
            </div>
        </div>
        `
    })
    } catch(error) {
        console.log(`Error fetching data. ${error}`)
    }
}
getData()

//Quotes Section Animations
gsap.registerPlugin()

const quotes1 = gsap.timeline()
quotes1
.from('.frame1', {autoAlpha: 0, x: -800, duration: 0.5})
const quotes2 = gsap.timeline()
.from('.frame2', {autoAlpha: 0, x: 800, duration: 0.5})
const quotes3 = gsap.timeline()
.from('.frame3', {autoAlpha: 0, x: -800, duration: 0.5})
const quotes4 = gsap.timeline()
.from('.frame4', {autoAlpha: 0, x: 800, duration: 0.5})
const quotes5 = gsap.timeline()
.from('.frame5', {autoAlpha: 0, x: -800, duration: 0.5})
const quotes6 = gsap.timeline()
.from('.frame6', {autoAlpha: 0, x: 800, duration: 0.5})
const quotes7 = gsap.timeline()
.from('.vader-last-word', {autoAlpha: 0, x: -800, duration: 0.5})

ScrollTrigger.create({
    animation: quotes1,
    trigger: '.quotes-heading',
    start: 'top 35%',
    end: '100%',
})
ScrollTrigger.create({
    animation: quotes2,
    trigger: '.frame2',
    start: 'top 85%',
    end: '100%',
})
ScrollTrigger.create({
    animation: quotes3,
    trigger: '.frame3',
    start: 'top 85%',
    end: '100%',
})
ScrollTrigger.create({
    animation: quotes4,
    trigger: '.frame4',
    start: 'top 85%',
    end: '100%',
})
ScrollTrigger.create({
    animation: quotes5,
    trigger: '.frame5',
    start: 'top 85%',
    end: '100%',
})
ScrollTrigger.create({
    animation: quotes6,
    trigger: '.frame6',
    start: 'top 85%',
    end: '100%',
})
ScrollTrigger.create({
    animation: quotes7,
    trigger: '.vader-last-word',
    start: 'top 85%',
    end: '100%',
})
