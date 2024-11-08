
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://taskapp-test-b9af6-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemsInDB = ref(database, "items")
const ShoppingListEl = document.getElementById("shopping-list")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")



addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    push(itemsInDB, inputValue)

    
    renderItems(inputValue)
    
    
})

function renderItems(itemValue) {
    inputFieldEl.value = ""
    ShoppingListEl.innerHTML += `<li>${itemValue}</li>`
}