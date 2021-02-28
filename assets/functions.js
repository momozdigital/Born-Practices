$(document).ready(function(){
	
	 $('#main-photo ul').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  adaptiveHeight: true,
	  asNavFor: '#mini-photos ul'
	});
	$('#mini-photos ul').slick({
	  slidesToShow: 10,
	  slidesToScroll: 1,
	  asNavFor: '#main-photo ul',
	  dots: false,
	  arrows: false,
	  centerMode: false,
	  focusOnSelect: true,
      infinite: false
	});
	
  
	$('body').on('click', '.buddha-menu-item a', function(){
              	               
      console.log("this: "+$(this).attr('aria-label'));
      
      if($(this).attr('aria-label')=="BLACK FRIDAY"){
       	location.replace("https://bornshop.cl/collections/sale?pf_ps_descuento=30%3A40&pf_ps_descuento=20%3A30&pf_ps_descuento=10%3A20&pf_ps_descuento=%3A10");
        
      }
      	
    });
  
  	$('body').on('click', '.mm-list-name span', function(){
              	               
      console.log("click!!: ");      
      
      	
    });
  
  
  	$('body').on('tap', '.mm-list-name span', function(){
              	               
      console.log("tap!! ");
      
      	
    });    

  
  
  
    $('body').on('click', '.boost-pfs-filter-button', function(){
              	               
      
        if($(this).attr('href')!=undefined){
          
            console.log("CLICK EN COLECCION:");
          
          	//HIZO CLICK EN UNA COLECCIÓN
			console.log("VALOR CAMPO: "+$("#URLCurrent").val());
          	var urlCurrent = $("#URLCurrent").val();
          
            if(urlCurrent!="" && urlCurrent!=undefined){
				
              var urlSplit = urlCurrent.split("?"); 
              console.log("urlSplit[1]: "+urlSplit[1]);
              console.log($(this).attr('href')+"?"+urlSplit[1]);

              if(urlSplit[1]!=undefined){      
                //location.replace($(this).attr('href')+"?"+urlSplit[1])
              }

            }
          	else{
            
              //if(window.location.href.includes("?")){
                
              	//var urlCurrent =window.location.href;
                var urlCurrent ="?pf_ps_descuento=40%3A&pf_ps_descuento=30%3A40&pf_ps_descuento=20%3A30&pf_ps_descuento=10%3A20&pf_ps_descuento=%3A10"
                
                if(urlCurrent!="" && urlCurrent!=undefined){
				
              		var urlSplit = urlCurrent.split("?"); 
                  	console.log("urlSplit[1]: "+urlSplit[1]);
                  	console.log($(this).attr('href')+"?"+urlSplit[1]);

                    if(urlSplit[1]!=undefined){      
                      //location.replace($(this).attr('href')+"?"+urlSplit[1])
                    }

                }
                
                
              //}
            
            }
          
            
      
        }
      	else{
          	
        	//HIZO CLICK EN UN FILTRO NO COLECCIÓN. GUARDO LA URL EN EL INPUT.
          	var urlCurrent = window.location.href;  
            console.log("CLICK EN FILTRO CUALQUIERA: "+urlCurrent);
      		$("#URLCurrent").val(urlCurrent);
          	//alert("VALOR CAMPO: "+$("#URLCurrent").val());
      	}
      	
    });
  
  
	// Header
	
	/* $('header .icons li .search').click(function(){
		$('header .big-search').toggleClass('show');
        $('header .black-search').toggleClass('show');
	}); */
  
    $('header .big-search .cerrar-big-search').click(function(){
		$('header .big-search').toggleClass('show');
        $('header .black-search').toggleClass('show');
	});
	
	$('header .icons li .cart').click(function(){
		$('#minicart').addClass('show');	
	});
	$('#minicart .cerrar').click(function(){
		$('#minicart').removeClass('show');	
	});
	
	$('header .show-menu').click(function(){
      console.log("Funcion de mostrar menu funcionando");
		$('#mobmenu').addClass('show');
	});
  
	$('#mobmenu .icon').click(function(){
		$('#mobmenu').removeClass('show');
	});
  
	$('header nav .cerrar').click(function(){
		$('nav').removeClass('show');	
	});
  
    // Menu
  
    /* $('header nav ul li:nth-child(2)').mouseenter(function(){
      $('#submenu').addClass('show');
      $('#submenu .place .sub-menu:nth-child(1)').addClass('show');
      $('#submenu .place .sub-menu:nth-child(2)').removeClass('show');
    });

    $('header nav ul li:nth-child(3)').mouseenter(function(){
      $('#submenu').addClass('show');
      $('#submenu .place .sub-menu:nth-child(1)').removeClass('show');
      $('#submenu .place .sub-menu:nth-child(2)').addClass('show');
    });
  
    $('header nav ul li:nth-child(2)').mouseleave(function(){
      $('#submenu').removeClass('show');
    });

    $('header nav ul li:nth-child(3)').mouseleave(function(){
      $('#submenu').removeClass('show');
    }); */
  
  	$('header nav section > div:nth-child(2)').mouseenter(function(){
      $('#submenu').addClass('show');
      $('#submenu .place .sub-menu:nth-child(1)').addClass('show');
      $('#submenu .place .sub-menu:nth-child(2)').removeClass('show');
    });

    /* $('header nav section > div:nth-child(3)').mouseenter(function(){
      $('#submenu').addClass('show');
      $('#submenu .place .sub-menu:nth-child(1)').removeClass('show');
      $('#submenu .place .sub-menu:nth-child(2)').addClass('show');
    }); */
  
    $('header nav section > div:nth-child(2)').mouseleave(function(){
      $('#submenu').removeClass('show');
    });

    /* $('header nav section > div:nth-child(3)').mouseleave(function(){
      $('#submenu').removeClass('show');
    }); */

    $('#submenu').mouseleave(function(){
      $('#submenu').removeClass('show');
      $('#submenu .place .sub-menu:nth-child(1)').removeClass('show');
      $('#submenu .place .sub-menu:nth-child(2)').removeClass('show');
    });
  
    $('#submenu').mouseenter(function(){
	  $('#submenu').addClass('show');
    });

    $('header .icons li .search').click(function(){
      $('#search').toggleClass('show');
    });
  
  
  	// Submenu
  
    $('#submenu ul > li').hover(function(){
		$(this).children('.sub-sub-menu').addClass('show');
        $(this).siblings().children('.sub-sub-menu').removeClass('show');
    });
  
    //$('#submenu ul > li:first-child .sub-sub-menu').addClass('show');
  
  
    // Menu Mobile

    var winW = $(window).width();

    if ( winW < 830) {

      $('#mobmenu > ul > li.site-nav--has-dropdown > a').removeAttr('href');

      $('#mobmenu > ul li a').click(function(){
          $(this).siblings('.sub-menu').toggleClass('show');
          $(this).parent('li').siblings().children('.sub-menu').removeClass('show');
      });
      
      $('#mobmenu > section > div.site-nav--has-dropdown > a').removeAttr('href');

      $('#mobmenu > section div a').click(function(){
          $(this).siblings('.sub-menu').toggleClass('show');
          $(this).parent('div').siblings().children('.sub-menu').removeClass('show');
      });
    }

  	// Collection
  
  
//------------Momoz Botones Carrito - Agotado ------------------
    /*
    $('.ver-agotado').mouseenter(function(){
      $(this).stop().parent().siblings('a.BIS_trigger').fadeIn(100);
    });

    $('.ver-agotado').mouseleave(function(){
      $(this).stop().parent().siblings('a.BIS_trigger').fadeOut(100);
    });

    $('a.BIS_trigger').mouseenter(function(){
      $(this).stop().fadeIn(100);
    });

    $('a.BIS_trigger').mouseleave(function(){
      $(this).stop().fadeOut(100);
    }); 

    */  

    $('.add-product-cart').mouseenter(function(){
      $(this).stop().parent().siblings('a.clickCapturerAdd').fadeIn(100); 
    }); 

    $('a.clickCapturerAdd').mouseenter(function(){
      $(this).stop().fadeIn(100);
    });   
    $('a.clickCapturerAdd').mouseleave(function(){
      $('a.clickCapturerAdd').stop().fadeOut(100);
    });   
    $('a.hideClickCapturer').mouseenter(function(){
      $(this).stop().fadeIn(100);    
    });  
    $('a.hideClickCapturer').mouseleave(function(){
      $('a.clickCapturerAdd').fadeOut(100);
    });
    //-------------  
	
  	$('body').on('mouseenter', '.avisame', function(){
       $(this).stop().parent().siblings('a.BIS_trigger').fadeIn(100);     
    });
  	$('body').on('mouseenter', '.ver-agotado', function(){
       $(this).stop().parent().siblings('a.BIS_trigger').fadeIn(100);     
    });
  
    $('.avisame').mouseenter(function(){
      $(this).stop().parent().siblings('a.BIS_trigger').fadeIn(100);
    });  
  	$('.ver-agotado').mouseenter(function(){
      $(this).stop().parent().siblings('a.BIS_trigger').fadeIn(100);
    });
    $('a.BIS_trigger').mouseenter(function(){
      $(this).stop().fadeIn(100);
    });

    $('a.BIS_trigger').mouseleave(function(){
      $('a.BIS_trigger').stop().fadeOut(100);
    });   
    $('#captureClick').mouseenter(function(){
      $(this).stop().fadeIn(100);    
    });

    $('#captureClick').mouseleave(function(){
      $('a.BIS_trigger').fadeOut(100);
    });
//--- End Momoz---------------

  	// Product

    $('.product .faq .deon > h3').each(function(){
      $(this).addClass('accor');
      $(this).nextUntil('h3').wrapAll('<div class="hide-info"></div>')
    })

    $('.product .faq .deon h3').click(function(){
      $(this).siblings('h3').removeClass('active');
      $(this).toggleClass('active');
      $(this).next('.hide-info').toggleClass('show');
      $(this).siblings('h3').next('.hide-info').removeClass('show');
    });
  
    $('.product .right .botones .icons .despacho').click(function(){
      $('.product .right .botones .icons .text').toggleClass('show');
    });
  
    // Product Item
  
    //$('.featured-collection ul .item.sold-out').remove();
  
    // Carrito

    $('.carrito .cart-total .ver-regalos').click(function(){
      $('.carrito .cart-total .item-regalos .all').toggleClass('show');
      $(this).toggleClass('active');
    });
    $('.carrito .cart-total .item-regalos .all').addClass('show');
	
});