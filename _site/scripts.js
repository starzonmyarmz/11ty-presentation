const sections = document.querySelectorAll('section')
document.querySelector('main').hidden = false
sections.forEach((section, count) => {
  section.id = `★${count}★`
  section.querySelector('.next') ? section.querySelector('.next').href = `#★${count + 1}★` : ''
})
