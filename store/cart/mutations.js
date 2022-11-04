/* eslint-disable */
export default {
  LoadCart(state) {
    let cart = localStorage.getItem('myCart')
    if (cart) {
      state.cart = JSON.parse(cart)
    }
  },
  AddToCart(state, product) {
    //Check if item is in cart
    let itemfound = state.cart.find((p) => p.product.id === product.id)
    if (!itemfound) {
      state.cart.push({ product, quantity: 1 })
    }
    if (itemfound) {
      itemfound.quantity += 1
    }

    //Update local storage
    localStorage.setItem('myCart', JSON.stringify(state.cart))

    this.$swal({
      toast: true,
      text: 'Cart Updated.',
      icon: 'success',
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: 'top-end',
    })
  },
  DecreaseItemCount(state, index) {
    let item = state.cart[index]
    if (!item) return
    if (item.quantity === 1) {
      state.cart.splice(index, 1)
    } else {
      item.quantity -= 1
    }

    localStorage.setItem('myCart', JSON.stringify(state.cart))

    this.$swal({
      toast: true,
      text: 'Cart updated',
      icon: 'success',
      timer: 1000,
      timerProgressBar: 'true',
      position: 'top-end',
      showConfirmButton: false,
    })
  },
  RemoveCartItem(state, index) {
    state.cart.splice(index, 1)

    localStorage.setItem('myCart', JSON.stringify(state.cart))

    this.$swal({
      toast: true,
      text: 'Item removed',
      icon: 'success',
      timer: 1000,
      timerProgressBar: 'true',
      position: 'top-end',
      showConfirmButton: false,
    })
  },
  IncreaseItemCount(state, index) {
    let item = state.cart[index]
    item.quantity += 1

    localStorage.setItem('myCart', JSON.stringify(state.cart))

    this.$swal({
      toast: true,
      text: 'Cart updated',
      icon: 'success',
      timer: 1000,
      timerProgressBar: 'true',
      position: 'top-end',
      showConfirmButton: false,
    })
  },
  ClearCart(state) {
    state.cart = []
    localStorage.removeItem('myCart')
  },
}
