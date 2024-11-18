$(document).ready(function(){
// setTimeout(function() {
//  $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='citrus original']").click();

// }, 1500);




  // if ($('body').hasClass('love-your-breasts-deodorant-balm')) {

  //  $("section.popup.popup-product").css("display","block");
  // }

$("section.popup.popup-product .popup__content .close.popup-youtbe-video").click(function() {
  $('video#video_cstm_prd').trigger('pause');
  $("section.popup.popup-product").css("display","none");
 });
  
  $("section.popup.popup-product_second_product .popup__content .close.popup-youtbe-video").click(function() {
  $('video#video_cstm_prd').trigger('pause');
  $("section.popup.popup-product_second_product").css("display","none");

});

 $(document).on('click','a.product_open_popup',function(e){
 $("section.popup.popup-product").css("display","block");
$("section.popup.popup-product .popup__content .close.popup-youtbe-video").css("display","block");
 });

 $(document).on('click','a.product_open_popup_second_not_error',function(e){
 $("section.popup.popup-product_second_product").css("display","block");
$("section.popup.popup-product_second_product .popup__content .close.popup-youtbe-video").css("display","block");
 });

  $("a.product_open_popup_second.show_error").click(function(){
$("p.show_error_message").css("display","block");
  setTimeout(function() {
$("p.show_error_message").fadeOut( "slow" );

  }, 2500);
});


  
// const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkoutBtn = document.getElementById("checkout");


function toggleCheckoutBtn() {
  if (checkbox2.checked) {
    checkoutBtn.disabled = false; // Fix typo in variable name
  } else {
    checkoutBtn.disabled = true;
  }
}

if (checkoutBtn != null) {
  checkbox2.addEventListener("change", toggleCheckoutBtn);
}



  
jQuery("section.page-width .product .product__info-wrapper .product__info-container h4:contains('™')").html(function(_, html) {
  return html.replace(/(™)/g, '<sup class="yourclass">™</sup>');
});


  
document.addEventListener('contextmenu', event => event.preventDefault());

document.body.oncopy = function() {
   alert("Not Allowed.");
   return false;
}
  $(".slide_one_btn").click(function() {
      // $('html, body').animate({
      //   scrollTop: $(window).scrollTop() + 590
      // }, 500);
 $('html, body').animate({
              scrollTop: $("#custom_scroll_learn").offset().top - 200
        }, 500); 
    
    });
 jQuery(document).on('click',".ymq-options-box[data-label='SCENTS:'] .spotlight-group label", function(){
var rtr=$(this).children('div').attr('data-src');
// $("li.product__media-item.grid__item.slider__slide.product__media-item--full.is-active").css("display","none");

// $("button[aria-label='Load image 5 in gallery view']").trigger("click");

// $("li.product__media-item.grid__item.slider__slide.is-active ").css("opacity","0");


  console.log(rtr);
     $(".slider-mobile-gutter ul.product__media-list.contains-media.grid.grid--peek.list-unstyled.slider.slider--mobile li.product__media-item.grid__item.slider__slide.is-active modal-opener .product__media img").removeAttr("srcset");
     $(".slider-mobile-gutter ul.product__media-list.contains-media.grid.grid--peek.list-unstyled.slider.slider--mobile li.product__media-item.grid__item.slider__slide.is-active modal-opener .product__media img").attr("srcset", rtr);

   $(".slider-mobile-gutter ul.product__media-list.contains-media.grid.grid--peek.list-unstyled.slider.slider--mobile li.product__media-item.grid__item.slider__slide.is-active .deferred-media img").removeAttr("srcset");
$(".slider-mobile-gutter ul.product__media-list.contains-media.grid.grid--peek.list-unstyled.slider.slider--mobile li.product__media-item.grid__item.slider__slide.is-active .deferred-media img").attr("srcset", rtr); 
$("li.product__media-item.grid__item.slider__slide.is-active ").css("opacity","1");


});
//  jQuery(document).on('click',"button[aria-label='Play video 1 in gallery view']", function(){

// $("li.product__media-item.grid__item.slider__slide.product__media-item--full.is-active").css("display","block");

//  });






  
 jQuery(document).on('click',"label.ymq-options-button-label.ymq-attrib-item-ymq-variant-0-0", function(){
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='lavender/rose original']").click();
   $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='citrus original']").css("display","block");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='lavender/rose original']").css("display","block");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='anoint original']").css("display","block");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='unscented original']").css("display","block");

 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='citrus extra']").css("display","none");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='lavender/rose  extra']").css("display","none");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='anoint extra']").css("display","none");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='unscented extra']").css("display","none");
 
 });
   jQuery(document).on('click',"label.ymq-options-button-label.ymq-attrib-item-ymq-variant-0-1", function(){
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='lavender/rose  extra']").click();
   $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='citrus original']").css("display","none");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='lavender/rose original']").css("display","none");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='anoint original']").css("display","none");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='unscented original']").css("display","none");

 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='citrus extra']").css("display","block");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='lavender/rose  extra']").css("display","block");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='anoint extra']").css("display","block");
 $("section.page-width .product .product__info-wrapper .product__info-container .spotlight-group label.ymq-options-img-label[data-show='unscented extra']").css("display","block");
 



     
  });

 $(document).on('click','.button-cstm-click',function(e){

  $(".popup-discount").fadeIn(500);
$("body").addClass("popup_recommendation");

});
$(".close.popup-discount").click(function() {
  $(".popup-discount").fadeOut(500);
  $("body").removeClass("popup_recommendation");
});
$("a.trassparent-btn.learn_more_popup").click(function(){
 $(".popup-home-learn").fadeIn(500);
$("body").addClass("popup_recommendation");


});
$(".back-to-home-text").click(function() {
  $(".popup-home-learn").fadeOut(500);
  $("body").removeClass("popup_recommendation");
});



  
$(".close.popup-home-learn").click(function() {
  $(".popup-home-learn").fadeOut(500);
  $("body").removeClass("popup_recommendation");
});

$(".close.popup-youtbe-video").click(function() {
  $(".popup-youtbe-video").fadeOut(500);
  $("body").removeClass("popup_recommendation");
});
  
$("a").each(function(){

$(this).click(function(){
  var href = $(this).attr("href");
  if (href.indexOf("youtube.com") !== -1 || href.indexOf("youtu.be") !== -1) {

event.preventDefault();
var new_cstm=$(this).attr('href');
var parts = new_cstm.split("/");
var last_part = parts[parts.length-1];
 $(".popup-youtbe-video").fadeIn(500);
$("body").addClass("popup_recommendation");
var video_content='<iframe width="420" height="345" src="https://www.youtube.com/embed/' + last_part + '"></iframe>';
$(".popup.popup-youtbe-video .popup__content .youtube-content").html(video_content);

}
});
});




 $(".thumbnail-list").slick({
            centerMode: false,
            centerPadding: '60px',
            slidesToShow: 5,
            vertical: true,
            verticalSwiping: true,
            arrows: false,
            swipeToSlide: true,
            focusOnSelect: true,
   arrows:true,
    prevArrow: '<a href=""><i class="fa-solid fa-chevron-up"></i></a>',
  nextArrow: '<a href=""><i class="fa-solid fa-chevron-down"></i></a>'
        });


  
 $(".tab-text-sect.content_cstm .tabcontent.mystyle .blog-text-cust.content").slice(0, 2).show();
 $(".second-text_description_section .tabcontent.mystyle .pag-text-cust-sec .page").slice(0, 2).show();
  $('.cstm_truncate_all_bl').each(function(index, value) {
		 $(this).html($(this).html().substring(0, 200)  + "..."); // number of characters
	});
// $('.all_blog_cstm .blog-cstm-section').each(function(index, value) {
// 		 $(this).html($(this).html().substring(0, 300)  + "..."); // number of characters
// 	});


 $(document).on('click','.tabcontent.mystyle #loadMore',function(e){
     // alert();
    e.preventDefault();
    $(".second-text_description_section .tabcontent.mystyle .pag-text-cust-sec .page:hidden").slice(0, 2).slideDown();
    if($(".second-text_description_section .tabcontent.mystyle .pag-text-cust-sec .page:hidden").length == 0) {
      $(".tabcontent.mystyle a#loadMore").text("No Content").addClass("noContent");
    }
  });

$(document).on('click','.tabcontent.mystyle a#loadMore',function(e){
     // alert();
    e.preventDefault();
    $(".tabcontent.mystyle .blog-text-cust.content:hidden").slice(0, 2).slideDown();
    if($(".tabcontent.mystyle .blog-text-cust.content:hidden").length == 0) {
      $(".tabcontent.mystyle a#loadMore").text("No Content").addClass("noContent");
    }
  });


$('.pag-text-cust-sec .page_cstm_content').each(function(index, value) {
         $(this).html($(this).html().substring(0, 190) + "..." ) ; // number of characters
    }); 

  
$('.blog-middle-cust').slick({
  dots: false,
  infinite: true,
  prevArrow: '<a href=""><i class="fa-solid fa-chevron-left"></i></a>',
  nextArrow: '<a href=""><i class="fa-solid fa-chevron-right"></i></a>',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

   $("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#deodrent-cust-id").offset().top
    }, 1000);
});




//  $('.featured_cust_image').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   fade: true,
//   asNavFor: '.featured_thumb_nail_image-cust'
// });
// $('.featured_thumb_nail_image-cust').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   asNavFor: '.featured_cust_image',
//   dots: false,
//   arrows: true,
//   centerMode: false,
//   focusOnSelect: true
// });






$('.banner_slider_cstm').slick({
  infinite: true,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade:true
  
});
$(".resorces-tab-heading-sect .tab .tablinks").each(function(){
$(this).click(function(){
$(this).addClass('active');
$(this).siblings().removeClass('active');

});

});
  $( ".cstmone" ).wrapAll( "<div class='Wrap_cstm_one' />");
  $( ".cstmtwo" ).wrapAll( "<div class='Wrap_cstm_two' />");
  
  $("button#Second_tab").click(function(){
$(".tab2_content").addClass('active_tab');
    $(".tab2_content").siblings().removeClass('active_tab');
});
  
   $("button#first_tab").click(function(){
$(".tab1_content").addClass('active_tab');
    $(".tab1_content").siblings().removeClass('active_tab');
});
  
  $("button#third_tab").click(function(){
$(".tab3_content").addClass('active_tab');
    $(".tab3_content").siblings().removeClass('active_tab');
    
});


  //   Create a function
  $(".arrow_down_section").click(function(event) {
    //       Select the body of the page and scroll down by 650 pixels worth
    $("html, body").animate({ scrollTop: "+=600px" }, 600);
  });
$(".back-top-section").click(function(){

window.scrollTo(0, 0);

}) ;

const button = document.getElementById('plus_cstm');
button.addEventListener('click', () => {
  steponup()
})

function steponup() {
  let input = document.getElementById('theNumber')
  

    input.stepUp()
  
}





  $(".banner-slider").slick({
   slidesToShow: 1,
   infinite:false,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
      dots: false
    // arrows: false, Boolean
  });
  
	    


  
});