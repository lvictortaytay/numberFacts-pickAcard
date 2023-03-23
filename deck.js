let shuffledUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
let res = axios.get(shuffledUrl)
let imageHolder = document.getElementById("cardDiv")








let shuffleBtn = document.getElementById("shuffleDeck")
shuffleBtn.addEventListener("click" , (e) =>{
    e.preventDefault()
    console.log("card button ")
    res
        .then((resolved,rejected) => {
            console.log("shuffled" , resolved.data.deck_id)
            localStorage.setItem("shuffledId",resolved.data.deck_id)
        })
    location.reload()
  
})




let drawUrl = `https://deckofcardsapi.com/api/deck/${localStorage.getItem("shuffledId")}/draw/?count=1`
let cardBtn = document.getElementById("pickCard")
cardBtn.addEventListener("click" , (e) =>{
    e.preventDefault()
    let id = Math.floor(Math.random() * 10)
    let res = axios.get(drawUrl)
    console.log(drawUrl)
    res
        .then((resolved,rejected) =>{
            let img = document.createElement("img")
            img.src = `${resolved.data.cards[0].image}`
            img.id = `c${id}`
            imageHolder.append(img)
            console.log(imageHolder)
            console.log(resolved.data.cards[0].image)
        })
        .catch((err)=>{
            console.log(err)
        })
    console.log("works")
})
