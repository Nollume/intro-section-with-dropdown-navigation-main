'use strict';

const menuOpen = document.querySelector('.menu-icon'),
      menuClose = document.querySelector('.close-menu'),
      main = document.querySelector('main'),
      navigation = document.querySelector('.navigation');

let menuContainer = document.querySelector(".menu-container"),
    blurContainer = document.querySelector('.blur');
  

    menuOpen.addEventListener('click',()=>{

        menuContainer.style.paddingRight =" 1.3rem";
        main.style.paddingRight = '0.5rem';
                
        menuContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        menuContainer.style.animation = 'open-menu .3s forwards ease-in-out'
        menuContainer.style.transformOrigin = 'bottom right';

        blurContainer.style.transformOrigin = 'top left';
        blurContainer.style.display = 'block';
        blurContainer.style.animation = 'blur-animate .3s forwards ease-in-out';   

        navigation.style.opacity = '0';

        setTimeout(() => {
            navigation.style.opacity = '1';
        }, 250);

    })

    menuClose.addEventListener('click',()=>{

        document.body.style.overflow = 'visible';   
        menuContainer.style.paddingRight =" 0";  
        main.style.paddingRight = '0rem';

        navigation.style.opacity = '0';

        

        blurContainer.style.animation = 'blur-animate-close .3s forwards ease-in-out';
        menuContainer.style.animation = 'close-menu .3s forwards ease-in-out'

        setTimeout(() => {
            navigation.style.opacity = '1';
        }, 350);

        
    })

    let openLi = false;
    let downArrow = document.getElementsByClassName('down')[0],
        upArrow = document.getElementsByClassName('up')[0],
        featuresLi = document.querySelector('.features'),
        companyLi = document.querySelector('.company'),
        firstUl = document.querySelector('.first-ul'),
        secondUl = document.querySelector('.second-ul');
    
    featuresLi.addEventListener('click',()=>{
        
        openLi = !openLi;

        firstUl.style.display = openLi ? 'block' : 'none';
        
        downArrow.style.display = openLi ? 'none' : 'inline-block';
        upArrow.style.display = openLi ? 'inline-block' : 'none';
       

    })

    let closedLi = false;
    let downArrowSecond = document.getElementsByClassName('down')[1],
        upArrowSecond = document.getElementsByClassName('up')[1];

    companyLi.addEventListener('click',()=>{
        
        closedLi = !closedLi;

        secondUl.style.display = closedLi ? 'block' : 'none';
        downArrowSecond.style.display = closedLi ? 'none' : 'inline-block';
        upArrowSecond.style.display = closedLi ? 'inline-block' : 'none';

    })

    let svgs = document.querySelectorAll('.features svg path');

    svgs.forEach(svg =>{
        
        featuresLi.addEventListener('mouseover', e =>{
            svg.style.stroke = 'hsl(0, 0%, 8%)';
        })
        
    })

    svgs.forEach(svg =>{
        
        featuresLi.addEventListener('mouseout', e =>{
            svg.style.stroke = '#686868';
        })
        
    })

    let svgsCompany = document.querySelectorAll('.company svg path');


    svgsCompany.forEach(svg =>{
        
        companyLi.addEventListener('mouseover', e =>{
            svg.style.stroke = 'hsl(0, 0%, 8%)';
        })
        
    })

    svgsCompany.forEach(svg =>{
        
        companyLi.addEventListener('mouseout', e =>{
            svg.style.stroke = '#686868';
        })
        
    })