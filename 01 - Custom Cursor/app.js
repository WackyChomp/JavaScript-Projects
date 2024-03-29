const cursor = document.querySelector('.cursor');

/*Everytime you move the cursor on page, the function runs */
window.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.pageX + 'px';        /*Adding the 'px' causes the cursor to follow the mouse */
    cursor.style.top = e.pageY + 'px';
    /*console.log(e.pageX, e.pageY)    Shows the coordinates*/
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
});

/*Cursor following the mouse when scrolling */
window.addEventListener('scroll', ()=>{
    const fromTop = cursor.getAttribute('data-fromTop');     /*takes value from setAttribute above*/
    cursor.style.top = scrollY + parseInt(fromTop) + 'px';
    /*console.log(scrollY);         see the value of scroll  */
});

/*Calls the click from style.css */
windows.addEventListener('click', ()=>{
    if(cursor.classList.contains('click')){
        cursor.classList.remove('click');
        void cursor.offsetWidth;     /*Triggers a DOM reflow */
        cursor.classList.add('click')
    }
    else{
        cursor.classList.add('click')
    }
});