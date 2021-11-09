function parallax(element,distance,speed){
    const item = document.querySelector(element);

    item.style.transform = `translateY(${distance*speed}px)`;}
    
    window.addEventListener('scroll',function(){
        parallax('header',window.scrollY,1);
    })

    //random logic-------------------------------
    let random = 1;
    function active(tux)
    {
        if(tux===1)
        random =tux;

        else if(tux===2)
        random =tux;

        if(tux===3)
        random =tux;

        if(tux===4)
        random =tux;
    }
    console.log(random);
    const navButton = document.querySelector('.below');
    const navOpen = document.querySelector('.nav-open');
   
     console.log(navButton);

  const  t1 = new TimelineLite({paused:true});

  t1.to('.cover',1,{
      width :'60%',
      ease:Power2.easeOut,
      zIndex:'1000'
  })
  .to('nav',1,{
      height:'100%',
      ease:Power2.easeOut
  },'-=0.5')
  .to('.nav-button',1,{
      opacity: '0'
  })
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

  ///////////////////////////////////////////////////////////////////

  ( function($) {
  
    $(document).ready(function() {
      
      var s           = $('.slider'),
          sWrapper    = s.find('.slider-wrapper'),
          sItem       = s.find('.slide'),
          btn         = s.find('.slider-link'),
          sWidth      = sItem.width(),
          sCount      = sItem.length,
          slide_date  = s.find('.slide-date'),
          slide_title = s.find('.slide-title'),
          slide_text  = s.find('.slide-text'),
          slide_more  = s.find('.slide-more'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth;
      
      sWrapper.css('width', sTotalWidth);
      sWrapper.css('width', sTotalWidth);
      
      var clickCount  = 0;
      
      btn.on('click', function(e) {
        e.preventDefault();
  
        if( $(this).hasClass('next') ) {
          
          ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
          
          ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
  
  
        //CONTENT ANIMATIONS
  
        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
  
        TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
  
      });
            
    });
  })(jQuery);
  
  $('.overlay').addClass('overlay-blue');

