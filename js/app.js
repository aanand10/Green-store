// ?? for slider 

$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});

// !! for cart system 
function add_to_cart(pid,pname,price){
   let cart=localStorage.getItem("cart");
   if(cart==null){
      //?? no cart item
      let products=[];
      let product={productId:pid,productName:pname,productQuantity:1,productPrice:price}
      products.push(product);
      localStorage.setItem("cart",JSON.stringify(products));
   } else{
      //?? cart is already present
   }
}