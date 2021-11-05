function parallax(element,distance,speed){
    const item = document.querySelector(element);

    item.style.transform = `translateY(${distance*speed}px)`;}
    
    window.addEventListener('scroll',function(){
        parallax('header',window.scrollY,1);
    })

      
  //clicking card

  const navButton = document.querySelector('.nav-button');
  const navOpen = document.querySelector('.nav-open');


  const  t1 = new TimelineLite({paused:true});

  t1.to('.cover',1,{
      width :'60%',
      ease:Power2.easeOut
  })
  .to('nav',1,{
      height:'100%',
      ease:Power2.easeOut
  },'-=0.5')
  .fromTo('.nav-open',0.5,{
      opacity:0,
      x:50,
      ease:Power2.easeOut
  },{
      opacity: 1,
      x:0,
      onComplete:function(){
          navOpen.style.pointerEvents = 'auto';
          console.log('done');
      }
  })

  navButton.addEventListener('click',()=>{
      if(t1.isActive())
      {      
             e.preventDefault();
             e.stopImmediatePropagation();
             return false;
      }
    toggleTween(t1);
  });

  function toggleTween(tween)
  {
      tween.reversed() ? tween.play() : tween.reverse();
  }
  window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    
    if(value>=4){
        document.getElementById("navbar").style.backgroundColor="rgb(44, 44, 44)"
    }else{
        document.getElementById("navbar").style.backgroundColor="transparent"
    
    }
    
    
    
    })