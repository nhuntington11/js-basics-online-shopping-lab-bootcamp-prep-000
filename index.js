var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName:item, itemPrice:Math.floor(Math.random()*100)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }

  var cartList = `In your cart, you have `

  for (var i = 0; cart[i] != undefined; i++) {
      cartList += `${cart[i].itemName} at $${cart[i].itemPrice}`
      if (cart[i+1] === undefined) {
        cartList += `.`
        return cartList
      } else if (cart[i + 1] != undefined) {
        if (cart[i + 2] === undefined) {
          cartList += `, and `
        } else {
          cartList += `, `
        }
      }
  }
}

function total() {
  var totalCost = 0
  
  for (var i = 0; cart[i] != undefined; i++) {
    totalCost += cart[i].itemPrice
  }
  return totalCost
}

function removeFromCart(item) {
  if (cart.length === 0) {
    return 'That item is not in your cart.'
  }
  
  for (var i = 0; cart[i] != undefined; i++) {
    var targetItem = cart[i].itemName
    if (targetItem === item) {
      delete cart[i]
      return cart
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
