const cursor = document.getElementById('cursor');

const positionElement = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    
    if(cursor)
        cursor.style.transform = `translate3d(${mouseX - (cursor.clientWidth / 2)}px, ${mouseY - (cursor.clientHeight / 2)}px, 0)`;     
        
    if(window.innerWidth < 991) {
        document.getElementsByTagName("html")[0].style.cursor = "default";
        cursor.style.display = "none";
    } else {
        document.getElementsByTagName("html")[0].style.cursor = "none";
        cursor.style.display = "block";
    }
}

window.addEventListener('mousemove', positionElement)

