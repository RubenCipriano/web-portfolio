const cursor = document.getElementById('cursor');

const positionElement = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    
    cursor.style.transform = `translate3d(${mouseX - (cursor.clientWidth / 2)}px, ${mouseY - (cursor.clientHeight / 2)}px, 0)`;            
}

window.addEventListener('mousemove', positionElement)