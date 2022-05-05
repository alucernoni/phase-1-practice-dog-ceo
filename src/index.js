
document.addEventListener('DOMContentLoaded', () => {
console.log('%c HI', 'color: firebrick')
//challenge 1
fetch('https://dog.ceo/api/breeds/image/random/4').then(resp => resp.json()).then(dogObj => {
    console.log(dogObj.message)
    // renderImages(dogObj.message)
    dogObj.message.forEach(
        renderDog
    )
})

const renderDog = (dog) => {
    const dogContainer = document.querySelector('#dog-image-container')
    console.log(dogContainer)
    const image = document.createElement('img')
    image.src = dog
    dogContainer.append(image)
}


// helper forEach function, takes 1 parameter called anything
// const renderImages = (dogArray) => { 
//     dogArray.forEach( (dogImage) => {
//         const image = document.createElement('img')
//         image.src = dogImage
//         dogContainer.append(image)
//             //dogContainer if globally declared, otherwise also declare in function
//     } )
// }


//challenge 2 & 3

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedContainer = document.querySelector('#dog-breeds')

fetch(breedUrl).then(resp => resp.json()).then( dogObj => {
    console.log(dogObj.message)
    renderBreeds(dogObj.message)
})

//helper function to iterate through object + li event listener
const renderBreeds = (breedObj) => {
    for (let key in breedObj) {
        const breedElement = document.createElement('li')
        breedElement.textContent = key
        breedContainer.append(breedElement)

        breedElement.addEventListener('click', () => {
            breedElement.style.color = 'pink'
        })
    }
}

//challenge 4

// function to add event listener (?) with filter (? not sure it's an array) to dropdown menu

const doggyDropdown = document.querySelector('#breed-dropdown')
console.log(doggyDropdown)

console.log(doggyDropdown[1].value)

// sounds like I need to use onchange for a dropdown that uses select. I can figure out how to isolate the value of the dropdown, but how to filter? not an array

doggyDropdown.onchange = () => {
    let letter = doggyDropdown[i].value


}


















})