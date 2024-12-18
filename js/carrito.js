let cantidad = 0

function comprar(nombre, precio, parentNode) {
    cantidad += 1;    
    // alert(`usted ha comprado: ${nombre} con precio ${precio}`)
    let cart = document.getElementById("cantidad-carrito")
    cart.innerText = cantidad
    // let divButton = document.getElementsByClassName("button-section")[0]
    let successMessage = document.createElement("div")
    // console.log("parent node id: ",parentNode.id)
    if (parentNode.id != "description-section") {

        successMessage.classList.add("success-buy")
    } else {

        successMessage.classList.add("single-success-buy")
    }
    successMessage.innerHTML = "Agregado al <b>carrito</b>"
    parentNode.appendChild(successMessage)
    // console.log("parent node of buy-button: ",parentNode.parentNode)
    setTimeout(() => {
        successMessage.innerText = "";
        parentNode.removeChild(successMessage)
    }, 1000);


}