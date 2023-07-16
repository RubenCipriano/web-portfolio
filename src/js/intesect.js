
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenObjects = document.querySelectorAll(".scroll-hidden");
hiddenObjects.forEach(obj => observer.observe(obj));