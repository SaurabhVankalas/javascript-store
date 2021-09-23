if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var add_buttons = document.getElementsByClassName("shop-item-button");
    //console.log(add_buttons)
    for (var i=0;i<add_buttons.length;i++) {
        var add_button = add_buttons[i]
        //console.log(add_button)
        add_buttons[i].addEventListener('click',add_item)
    }
}
function change_bg() {
    document.body.style.background = "yellow";
}

var count = 0;

function add_item(event) {
    
    var output = document.getElementById("output")
    var button = event.target
    button.disabled = true;
    
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var img_src = shopItem.getElementsByClassName('shop-item-image')[0].src
    var flag = 0

    var cart_contents = document.getElementsByClassName('title-price');
    if (cart_contents.length <= 1) {
        count+=1;
        output.innerHTML = count;
        var oImg = document.createElement("img");
        oImg.setAttribute('src', img_src);
        oImg.setAttribute('alt', 'na');
        oImg.setAttribute('height', '50px');
        oImg.setAttribute('width', '50px');
        document.getElementsByClassName('dropdown-content')[0].appendChild(oImg);
        var para = document.createElement("a");
        var node = document.createTextNode(title+": ["+price+"]");
        para.appendChild(node)
        para.className="title_price"
        document.getElementsByClassName('dropdown-content')[0].appendChild(para);

        var delete_button = document.createElement("BUTTON")
        delete_button.className="rm_btn"
        delete_button.innerHTML="D"
        document.getElementsByClassName('dropdown-content')[0].appendChild(delete_button);
    }
    else {
        for (var i=1;i<cart_contents.length;i++) {
            var _text = cart_contents[i].textContent
            var text = _text.split(":")[0]
            if (text == title) {
                alert("This Shirt Has been already added to the cart.")
                flag = 1;
                break;
            }
        }
        if(flag == 0) {
            count+=1;
            output.innerHTML = count;
            
            var oImg = document.createElement("img");
            oImg.setAttribute('src', 'images/shirt1.jpg');
            oImg.setAttribute('alt', 'na');
            oImg.setAttribute('height', '50px');
            oImg.setAttribute('width', '50px');
            document.getElementsByClassName('dropdown-content')[0].appendChild(oImg);
            
            var para = document.createElement("a");
            var node = document.createTextNode(title + ": ["+price+"]");
            para.appendChild(node)
            document.getElementsByClassName('dropdown-content')[0].appendChild(para);
            var delete_button = document.createElement("BUTTON")
            delete_button.className="rm_btn"
            delete_button.innerHTML="D"
            document.getElementsByClassName('dropdown-content')[0].appendChild(delete_button);
        }
    }
    delete_button.addEventListener('click',remove_item)
    //ready();
}
    
function remove_item(event) {
    //alert("hi")
    var rm_button = event.target;
    //console.log(rm_button)
    //console.log(rm.button.parentElement)
    rm_button.addEventListener('click',remove_item)
    //alert(rm_button)
    var title_name = rm_button.previousSibling.innerHTML;
    rm_button.previousSibling.previousSibling.remove()
    rm_button.previousSibling.remove()
    rm_button.remove()
    
    var all_items = document.getElementsByClassName('shop-item-title')
    for (var i=0;i<all_items.length;i++) {
        item = all_items[i];
        if(item.innerHTML==title_name.split(":")[0]) {
            var add_parent = item.parentElement;
            break;
        }
    }
    //add_button.disabled = false;
    var add_button = add_parent.getElementsByClassName('shop-item-button')[0]
    add_button.disabled = false;
    count-=1;
    output.innerHTML = count;
    /*
    var cartItem = rm_button.parentElement;
    //alert(shopItem.parentElement)
    console.log(cartItem)
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var cart_contents = document.getElementsByClassName('dropdown-content')[0].childNodes;
    //console.log(cart_contents)
    for(var i=1;i<cart_contents.length;i++) {
        var _text = cart_contents[i].textContent
        var text = _text.split(":")[0]
        if(text == title) {
            //alert("hi")
            count-=1;
            output.innerHTML = count;
            document.getElementsByClassName('dropdown-content')[0].removeChild(cart_contents[i]);
            break;
        }
    }
    ready();
    //var add_button = getElementsByClassName('shop-item-button')[0]
    //button.disabled = false;
    var rm = (shopItem.getElementsByClassName('rm_btn'));

    //console.log(rm)
    rm[0].parentElement.removeChild(rm[0])
    //console.log(rm)
    //console.log(rm.previousSibling)
    var add_b = shopItem.getElementsByClassName('shop-item-button')[0]
    //console.log(add_b)
    add_b.disabled = false;
    ready();
    */
}


