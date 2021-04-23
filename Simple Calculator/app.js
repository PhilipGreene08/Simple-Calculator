(function () {
  let screen = document.querySelector('.screen')
  const btnClear = document.querySelector('.btn-clear')
  const btnEqual = document.querySelector('.btn-equal')
  const btn = document.querySelectorAll('.btn')

  btn.forEach(btn => {
    btn.addEventListener('click', e => {
      
      let numbers = e.target.dataset.num

      screen.value += numbers
    })
  })

  btnEqual.addEventListener('click', e => {
    let total = eval(screen.value)
    screen.value = total
  })

  btnClear.addEventListener('click', e => {
    screen.value = ''

  })

})()