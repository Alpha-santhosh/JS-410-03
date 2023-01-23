const img = document.getElementById("cont")

async function search(params) {
    const key = document.getElementById("key")
    img.innerHTML = ""

    if(key.value.length == 0){
        img.innerHTML =`No Input`
        img.classList.add("no_input")
    }else{
        img.classList.remove("no_input")
        const respone = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${key.value}`)
        const data = await respone.json()
        // console.log(data.meals == "");
        data.meals.map((e)=>{
        // console.log(e.strMealThumb)
        img.innerHTML += `
        <img src="${e.strMealThumb}" alt="">
        `
    })
    }
    // console.log(data.meals[0].strMealThumb);
}