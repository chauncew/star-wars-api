const starCards = document.querySelector(".star-cards")

const getData = async () => {
    try{
    const fetchData = await fetch("https://akabab.github.io/starwars-api/api/all.json")
    const data = await fetchData.json()
    console.log(data)
    data.map((info) => {
        starCards.innerHTML+= `
        <div class="cards">
        <a href="#" class="star-images">
            <img src=${info.image}></img>
            <h2 class="name">${info.name}</h2>
        </a>
        </div>
        `
    })
    } catch(error) {
        console.log(`Error fetching data. ${error}`)
    }
}

{/* <img src=${info.image}></img> */}

getData()


