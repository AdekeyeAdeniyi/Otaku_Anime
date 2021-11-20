'use strict';

window.addEventListener('load', ()=>{

    const nav = document.querySelector('#nav');
    const open = document.querySelector('#open');
    const close = document.querySelector('#close');
    const fileUpload = document.querySelector('#input-file');
    const container = document.querySelector('.footer');
    const lop = document.querySelector('#owl-carousel');

    
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

    if(container){

        container.addEventListener('click', (e) => {
            e.preventDefault();
            
            const id =  e.target.dataset.id;
    
            if(id == 'close' || id == 'search'){
                container.querySelector('#history').classList.toggle('show');
            }
    
    
        });
    }

    if(fileUpload){
        fileUpload.onchange = () => {
            window.location.href = "upload.html";
        }
    }

});

