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

// ?? for subscribe alert 
function OnSubscribeButtonClicked(){
   alert("Successful!!! Thanking you for subscribing our newsletter.");
}
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

const http = require("http")
const port = 3000

const server = http.createServer(function(req, res){

})

server.listen(port, function(error){

   if(error){
      console.log('something went wrong', error)
   }else{
      console.log('Server is listening on port'+ port)
   }
})