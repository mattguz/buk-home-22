const tabButtons = [...document.querySelectorAll(".tab-solutions__buttons button")]
const tabDataSolution = [...document.querySelectorAll("[data-solution]")]
const tabDataContent = [...document.querySelectorAll("[data-solution-content]")]

tabButtons.forEach(button => {
  button.addEventListener('click', function () {
    tabButtons.forEach(btn => btn.classList.remove('selected'))
    tabDataContent.forEach(content => content.classList.remove('content-active'))
    let getContentId = this.dataset.solution
    let target = document.getElementById(getContentId)
    button.classList.add('selected')
    target.classList.add('content-active')
  })
})

tabButtons[1].click()