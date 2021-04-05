const inputBox = document.querySelector(".add-text");
const addedList = document.querySelector(".added-list");
const elDiv = document.createElement('div');
elDiv.className = 'added-list'

let items = [];

inputBox.addEventListener('submit', function (e){
        // items.push(e.target.value)
        console.log(e)
        e.preventDefault();
})

console.log(items)

// Declare an  empty array
// For every "Enter", append the value in the array
// Print the array inside the added-list



