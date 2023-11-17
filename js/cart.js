
const btn = document.querySelectorAll('.link_cart');

// Vòng lặp qua từng liên kết
btn.forEach(function(button,index){

    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h5").innerText
        var productPrice = product.querySelector("p").innerText
        addcart(productImg,productName,productPrice)
        
    }})
   
})

function addcart(productImg,productName,productPrice){
    var addtr = document.createElement("tr")
    var trcontent = '<tr><td class="card_product"><a href=""><img src="'+productImg+'" alt=""></a></td><td class="card_description"><h5><a class="link-dark" href="">'+productName+'</a></h5></td><td class="card_price"><p>'+productPrice+'</p></td><td class="card_delete"><a class="card_quantity_delete" href=""><i class="fa fa-times"></i></a></td></tr>'
    addtr.innerHTML = trcontent 
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr) 
} 




