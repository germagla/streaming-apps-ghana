if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-clear')[0].addEventListener('click', clearClicked)
}

function clearClicked() {
    alert('Cart Cleared')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
	var CartitemNumber = shopItem.getElementsByClassName('shop-item-number')[0].innerText
	/*var cartItemNumber = shopItem.getElementsByClassName('shop-item-number')[0].innerText
	Add Shop Item to Variable then later paste data into copytext section at bottom 
	or create array and store the shop-item-number */

    addItemToCart(title, price, CartitemNumber) 
    updateCartTotal()
	XArrayitemNumbersX(CartitemNumber)	
}

function XArrayitemNumbersX(CartitemNumber, arrayitemNumbers) {
	//add to array here in different positions
	var CartitemNumberSlot1 = CartitemNumber;
var arrayitemNumbers = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
		/*arrayitemNumbers[0] = CartitemNumberSlot1.toString();
		arrayitemNumbers[1] = CartitemNumberSlot2.toString();
		arrayitemNumbers[2] = CartitemNumberSlot3.toString();*/
		var length = 16;
		for(let i = 0 ; i < length; i=i+1) {
		arrayitemNumbers[i] = CartitemNumber.toString();
		i=i+1;
		ItemNumberFunctionPaste(arrayitemNumbers);
		break;

		
		
		}
		
}

function ItemNumberFunctionPaste(arrayitemNumbers){
		document.getElementById("demo1").innerHTML = arrayitemNumbers[0];
		document.getElementById("demo2").innerHTML = arrayitemNumbers[1];
		document.getElementById("demo3").innerHTML = arrayitemNumbers[2];
		document.getElementById("demo4").innerHTML = arrayitemNumbers[3];
		document.getElementById("demo5").innerHTML = arrayitemNumbers[4];
		document.getElementById("demo6").innerHTML = arrayitemNumbers[5];	
		document.getElementById("demo7").innerHTML = arrayitemNumbers[6];
		document.getElementById("demo8").innerHTML = arrayitemNumbers[7];
		document.getElementById("demo9").innerHTML = arrayitemNumbers[8];
		document.getElementById("demo10").innerHTML = arrayitemNumbers[9];
		document.getElementById("demo11").innerHTML = arrayitemNumbers[10];
		document.getElementById("demo12").innerHTML = arrayitemNumbers[11];
		document.getElementById("demo13").innerHTML = arrayitemNumbers[12];
		document.getElementById("demo14").innerHTML = arrayitemNumbers[13];
		document.getElementById("demo15").innerHTML = arrayitemNumbers[14];
		document.getElementById("demo16").innerHTML = arrayitemNumbers[15];
}

function addItemToCart(title, price, CartitemNumber) { 
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
	
	var itemNumber = CartitemNumber

    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
	
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
		<span class="shop-item-number cart-column">${itemNumber}</span>
            <button class="btn btn-danger" type="button">❌</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
	
}


function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + '  cedis'
}

function CopyFunction() {
  /* Get the text field */
  var copyText = document.getElementById("CartInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
