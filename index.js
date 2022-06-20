var hamburger_btn = document.querySelector('button.hamburger-btn')
var hamburger_menu = document.querySelector('.hamburger-menu')

hamburger_btn.addEventListener('click', function(e) {
  hamburger_menu.classList.toggle('show-menu')
  var open = hamburger_btn.getAttribute('aria-expanded')

  if (open == 'true') {
    hamburger_btn.setAttribute('aria-expanded', false)
  } else {
    hamburger_btn.setAttribute('aria-expanded', true)
  }
})

function closeMenu() {
  hamburger_menu.classList.remove('show-menu')
  hamburger_btn.setAttribute('aria-expanded', false)
  hamburger_btn.focus()
}


document.addEventListener('click', function(e) {
  if (!hamburger_menu.contains(e.target) && e.target != hamburger_btn) {
    closeMenu()
  }
})

document.addEventListener('keyup', function(e) {
  if (e.key == 'Escape') {
    closeMenu()
  }
})
