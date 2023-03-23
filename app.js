let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")
let factSection = document.getElementById("numFact")
let factSection2 = document.getElementById("numFact2")


btn.addEventListener("click" , (e) =>{
    e.preventDefault()
    let numVal = document.getElementById("num").value
    console.log("works")
    let res = axios.get(`http://numbersapi.com/${numVal}?json`)
    res
    .then((resolve,reject) =>{
        factSection.innerText = resolve.data.text
        console.log(resolve.data.text)
    })
    .catch((err) =>{
        console.log(err.code)
    })
    
})

btn2.addEventListener("click" , (e)=>{
    e.preventDefault()
    console.log("button 2")
    let numVal = Array.from((document.getElementById("nums").value))
    for(let i = 0 ; i < numVal.length ; i ++){
        let res = axios.get(`http://numbersapi.com/${numVal[i]}?json`)
    res
    .then((resolve,reject) =>{
        let html = `${resolve.data.text}`
        factSection2.append(html)
        console.log(resolve.data.text)
    })
    .catch((err) =>{
        console.log(err.code)
    })
    }
})








