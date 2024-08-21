//!SECTION Ice Cream and Toppings Array

const iceCream = [
  { name: 'Chocolate Ice Cream', price: 4.00, quantity: 0, type: 'scoop' },
  { name: 'Vanilla Ice Cream', price: 3.00, quantity: 0, type: 'scoop' },
  { name: 'Strawberry Ice Cream', price: 4.00, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 2.00, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 3.00, quantity: 0, type: 'topping' },
  { name: 'Gummy Worms', price: 2.00, quantity: 0, type: 'topping' },
  { name: 'Waffle Cone', price: 3.00, quantity: 0, type: 'cone' },
  { name: 'Waffle Bowl', price: 4.00, quantity: 0, type: 'cone' },
  { name: 'Dipped Cone', price: 5.00, quantity: 0, type: 'cone' }
]

function itemOrder(itemName) {
  //Debug Code to verify product buttons return the correct product name
  //console.log('ordering: ', itemName);

  let customerOrder = null
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    if (item.name == itemName) {

      //Debug Code to verify comparison between item.name and itemName functions
      //console.log('found: ', itemName);

      customerOrder = item
    }
  }

  customerOrder.quantity += 1

  drawCustomerOrder()
}

function drawCustomerOrder() {
  let customerOrderElm = document.getElementById('customerOrder')

  //Debug Code to verify id=customerOrder is passed to customerOrderElm
  //console.log('printed: ', customerOrderElm);

  let customerOrder = ''

  for (let i = 0; i < array.length; i++) {
    iceCream = array[i];

    let item = iceCream[i]

    //Debug Code to verify id=customerOrder is passed to customerOrderElm
    console.log(`${item.quantity}x ${item.name} $${(item.quantity * item.price)})
  

  }
}



