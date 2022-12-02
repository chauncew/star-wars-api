const starCards = document.querySelector(".star-cards ")
const testing = document.querySelector(".testing")
const close = document.querySelector('.close')
const closeTab = document.querySelector(".closeTab")
const body = document.querySelector('body')
const wiki =document.querySelector('.star-cards a')




const getData = async () => {
    try{
    const fetchData = await fetch("https://akabab.github.io/starwars-api/api/all.json")
    const data = await fetchData.json()
    console.log(data)
    data.map((info) => {
        starCards.innerHTML+= `
        <div class="cards">
            <img src=${info.image}></img>
            <div class="bottom-info">
                <h2 class="name">Name: ${info.name}</h2>
                <h2>Species: ${info.species}</h2>
                <h2>Home World: ${info.homeworld}</h2>
                <div class="anchor-button">
                    <a href=${info.wiki} class="anchor-button">More about ${info.name}</a>
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


// starCards.forEach((cardInfo) => {
//     cardInfo.addEventListener('click', (e) => {
//         e.preventDefault()
//         console.log(e.target)
//     })
// })


// const showCards = starCards.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e.target)
//     testing.innerHTML += `
//         <img src=${e.target.src}></img>
//         <h5>${e.target.textContent}</h5>
//         <p class="closeTab">X</p>
//     `
//     close.addEventListener('click', () => {
//         closeTab.style.display = 'none'
//     })
// })


    // close.addEventListener('click', () => {
    //     testing.style.display = 'none'
    // })
// starCards.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e.target)
//     testing.innerHTML += `<img scr=${e.target}></img>`
//     e.target.classList.add('testingCards')
//     e.target.classList.add('display')
// })