import { component } from 'picoapp'
import { removeAddon, updateAddon } from '@/lib/cart.js'

export default component((node, ctx) => {
  const button = node.querySelector('.js-remove-item')
  const decrease = node.querySelector('.js-remove-single')
  const increase = node.querySelector('.js-add-single')
  // const currentQty = node.querySelector('.js-single-quantity').innerHTML
  const inputQty = node.querySelector('.input-qty')
  const id = node.getAttribute('data-id')

  button.addEventListener('click', e => {
    e.preventDefault()
    removeAddon(id)
  })

  decrease.addEventListener('click', e => {
    e.preventDefault()
    updateAddon(id, parseInt(inputQty) - 1)
  })

  increase.addEventListener('click', e => {
    e.preventDefault()
    updateAddon(id, parseInt(inputQty) + 1)
  })

  //update cart oninput
  inputQty.addEventListener('input',  e => {
    updateAddon(id, parseInt(e.target.value) + 1);
    location.reload();
  });

})
