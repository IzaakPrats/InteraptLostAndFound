
function pushItemToFirebase() {
    //Config the Model
    var newResource = {
        description: document.getElementById("description").value, //Put the item description here
        qty: document.getElementById("qty").value, //Put the qty of items here 
        maxQty: document.getElementById("qty").value,
        name: document.getElementById("name").value, //Name of the item here
        ownerLocation: document.getElementById("location").value, //Location of owner here
        ownerName: document.getElementById("ownerName").value, //Name of owner here
        borrower: "STILL AVAILABLE", //Name of borrower empty
        checkOut: new Date().toString(),
        checkIn: new Date().toString(),
    };

    resourceRef.push(newResource);
};

function resetForm() {
    document.getElementById("description").value = ""; //Put the item description here
    document.getElementById("qty").value = ""; //Put the qty of items here 
    document.getElementById("qty").value = "";
    document.getElementById("name").value = ""; //Name of the item here
    document.getElementById("location").value = ""; //Location of owner here
    document.getElementById("ownerName").value = ""; //Name of owner here

    document.getElementById("saveConfirmation").innerHTML = "Item added!";
};

document.getElementById("save").addEventListener('click',function () {
    pushItemToFirebase();
    resetForm();
}); 