import { openMenu, closeMenu, menyPhone } from './declar.js'


openMenu.addEventListener('click', open)
closeMenu.addEventListener('click', close)



function open() {
    menyPhone.classList.remove('hidden')
}
function close() {
    menyPhone.classList.add('hidden')
}