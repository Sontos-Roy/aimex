
function AllSliders(){
  
    $('.product_slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 5,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.partner_slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      autoplay: true, 
      slidesToShow: 7,
      slidesToScroll: 7,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  }
  
  
  function toggle(){
    $('.sidebar-toggler').click(function(){
      $('.sidebar_nav').addClass('active');
      $('.overlay_sidebar').show();
    })
    $('.sidebar_dismiss, .overlay_sidebar').click(function(){
      $('.sidebar_nav').removeClass('active');
      $('.overlay_sidebar').hide();
    })
    $('.search-toggler-pc a').click(function(e){
      $('.search-box-pc').slideToggle();
    })
    $('.search_toggler').click(function(e){
      $('.search_toggler_box').slideToggle();
    })
    $('.mobile-nav-right a.search-mobile').click(function(e){
      $(this).toggleClass('active');
      $(this).find('i.fa').toggleClass('fa-magnifying-glass fa-xmark-circle');
      $('.search-box-mobile').slideToggle();
    })
    $('.donate-fixed-mobile-toggler').click(function(){
      $('.donate-fixed').show(500);
    })
    $('.donate-fixed-dismiss').click(function(){
      $('.donate-fixed').hide(500);
    })
    
    $('#tabs-nav li:first-child').addClass('active');
    $('#tabs-content .tab-content').hide();
    $('#tabs-content .tab-content:first').show();
    
    // Click function
    $('#tabs-nav li').mouseenter(function(){
      $('#tabs-nav li').removeClass('active');
     // $(this).addClass('active');
      $('#tabs-content .tab-content').hide();
      
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).fadeIn();
      return false;
    });
  
  }
  

  $(document).ready(function(){
    toggle();
    AllSliders();
    $('.story-datepicker').jqueryDatePicker();
    $('.counter2').counterUp({
        delay: 10,
        time: 1000
    });
  });
  