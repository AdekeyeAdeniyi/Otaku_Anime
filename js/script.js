'use strict';

window.addEventListener('load', ()=>{

    const nav = document.querySelector('#nav');
    const history_search = document.querySelector('#history_search');
    const open = document.querySelector('#open');
    const close = document.querySelector('#close');

    
    open.addEventListener('click', (e)=>{
        open.classList.remove('active');
        close.classList.add('active');
        nav.classList.add('show');
    });

    close.addEventListener('click', (e)=>{
        close.classList.remove('active');
        open.classList.add('active');
        nav.classList.remove('show');
    });

    if(document.querySelector('#search')){

        const searchTag = document.querySelector('#search');
    
    
        searchTag.addEventListener('click', (e) => {
            e.preventDefault();
    
            history_search.classList.toggle('show');
        });
    }

});
