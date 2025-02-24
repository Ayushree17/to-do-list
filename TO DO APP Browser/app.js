let btn = document.querySelector("button")
let inp = document.querySelector("input")
let ul = document.querySelector("ul")

//event listner to add the element in the list
btn.addEventListener("click" ,function(){
    let item = document.createElement("li")
    item.innerText = inp.value;

    let delBtn = document.createElement("button")
    
    delBtn.innerText = "Delete"
    delBtn.classList.add("delete");

    item.appendChild(delBtn)
    ul.appendChild(item)
    inp.value=""
})

// Add event listener for the Enter key
inp.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if the pressed key is Enter
        btn.click(); // Trigger the button click
    }
});

//event listner to remove/delete the element
ul.addEventListener("click" ,function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
});