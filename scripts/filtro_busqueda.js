const input = document.getElementById('searchBar')
window.addEventListener('DOMContentLoaded', ()=>{
    console.log('loaded')
})

input.addEventListener('keyup', event => {
 let inputUser = input.value
 console.log(inputUser)
 const newSearch = categoryList.filter(categoryList => categoryList.includes(inputUser.toLowerCase()))
 
})

//[CATEGORY ARRAY LIST (C.A.L)]

let categorys = events.map(array => array.category).sort() // Atrapamos todas las categorias del data.js y lo ordenamos alfabeticamente.

let categoryList = Array.from(new Set (categorys))
console.log(categoryList)

/// [END C.A.L]