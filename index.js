
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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

    
    // renderItems(inputValue)
    
    
})


onValue(itemsInDB, function(snapshot) {
    const data = snapshot.val();
    if (snapshot.exists()) {
        let items = Object.entries(data);
        clearListEl()

        for (let i = 0; i < items.length; i++) {
            let currentItem = items[i];
            let currentItemID = currentItem[0];
            let currentItemValue = currentItem[1];


            renderItems(currentItem);
        }
    } else {
        ShoppingListEl.innerHTML = "No items in the list"
    }
});

function clearListEl() {
    ShoppingListEl.innerHTML = "";
}

function renderItems(item) {
    inputFieldEl.value = ""
    // ShoppingListEl.innerHTML += `<li>${itemValue}</li>`
    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    ShoppingListEl.appendChild(newEl)

    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `items/${itemID}`)
        remove(exactLocationOfItemInDB)
    })
}