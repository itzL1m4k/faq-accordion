const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.answer')

questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    answers[index].classList.toggle('hidden')

    const img = question.querySelector('img')
    if (answers[index].classList.contains('hidden')) {
      img.src = './images/icon-plus.svg'
    } else {
      img.src = './images/icon-minus.svg'
    }
  })
})
