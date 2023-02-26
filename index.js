import Dog from './Dog.js'
import {dogs} from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

document.getElementById("reject-button").addEventListener('click', no)
document.getElementById("accept-button").addEventListener('click', yes)

render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex+=1
    if (currentDogIndex < dogs.length) {
        currentDog = new Dog(dogs[currentDogIndex])
        render()
        } else {
            document.getElementById('card').innerHTML = `<div id='no-matches'>No unswiped dogs in your area!</div>`
            document.getElementById('reject-button').hidden = true
            document.getElementById('accept-button').hidden = true
        }
}

function yes() {
    currentDog.setMatchStatus(true)
    document.getElementById('like').hidden = false;
    setTimeout(() => getNewDog(), 2000)
}

function no() {
    currentDog.setMatchStatus()
    document.getElementById('nope').hidden = false;
    setTimeout(() => getNewDog(), 2000)
}
