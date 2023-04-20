let cart = [];
let modalQt = 1 ;
let modalKey = 0

pizzaJson.map((item,index) => {
   let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true); 

   pizzaItem.setAttribute('data-key',index);
   pizzaItem.querySelector('.pizza-item--img img').src= item.img;
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

   pizzaItem.querySelector('a').addEventListener('click', (e)=>{
    e.preventDefault();/*Cancela o evento se for cancelável, sem parar a propagação do mesmo.*/
    let key = e.target.closest('.pizza-item').getAttribute('data-key') /*pegar a classe pizza-item mais proxima de a*/
    modalQt = 1;
    modalKey = key;

    document.querySelector('.pizzaBig img').src = pizzaJson[key].img;
    document.querySelector('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    document.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
    document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
    document.querySelector('.pizzaInfo--size.selected').classList.remove('selected')

    document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex)=>{
        if(sizeIndex == 2) {
            size.classList.add('selected');
        }
        size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
    });
    
    document.querySelector('.pizzaInfo--qt').innerHTML = modalQt;

    document.querySelector('.pizzaWindowArea').style.opacity = 0;
    document.querySelector('.pizzaWindowArea').style.display='flex';
    setTimeout(() =>{
        document.querySelector('.pizzaWindowArea').style.opacity = 1;
    },200);
   });
    


   document.querySelector('.pizza-area').append(pizzaItem);
})

//Eventos do Modal

function closeModal(){
    document.querySelector('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() =>{
        document.querySelector('.pizzaWindowArea').style.display= 'none';
    }, 500);
}
document.querySelectorAll('.pizzaInfo--cancelButton,.pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click',closeModal);
});
document.querySelector('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if(modalQt > 1){
    modalQt-- ;
    document.querySelector('.pizzaInfo--qt').innerHTML = modalQt;
    }
})
document.querySelector('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalQt++ ;
    document.querySelector('.pizzaInfo--qt').innerHTML = modalQt;
})

document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex)=>{
   size.addEventListener('click', (e) =>{
    document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
   })
});

document.querySelector('.pizzaInfo--addButton').addEventListener('click', () =>{
    let size = parseInt( document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key'));

    let identifier = pizzaJson[modalKey].id+'@'+size;

    let key = cart.findIndex((item) =>item.identifier == identifier);

    if (key > -1){
        cart[key].qt += modalQt;
    }else{
        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,
            size,
            qt:modalQt
        });
    }
    updateCart();
    closeModal();
});

document.querySelector('.menu-openner').addEventListener('click', () => {
    if(cart.length > 0) {
        document.querySelector('aside').style.left = '0'
    }
});
document.querySelector('.menu-closer').addEventListener('click', () => {
    document.querySelector('aside').style.left = '100vw';
})

function updateCart() {
    document.querySelector('.menu-openner span').innerHTML = cart.length;

    if(cart.length > 0 ) {
        document.querySelector('aside').classList.add('show');
        document.querySelector('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for(let i in cart) {
            let pizzaItem = pizzaJson.find((item)=>item.id == cart[i].id);
            subtotal += pizzaItem.price * cart[i].qt; 


            let cartItem = document.querySelector('.models .cart--item').cloneNode(true);

            let pizzaSizeName;
            switch(cart[i].size){
                case 0:
                    pizzaSizeName = 'P';
                    break;
                case 1:
                    pizzaSizeName = 'M';
                    break;
                case 2:
                    pizzaSizeName = 'G';
                    break;
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
                if(cart[i].qt > 1 ){
                    cart[i].qt--;
                } else {
                    cart.splice(i, 1);
                }                
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
                cart[i].qt++;
                updateCart();
            });

            document.querySelector('.cart').append(cartItem);
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        document.querySelector('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        document.querySelector('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        document.querySelector('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;



    }else{
        document.querySelector('aside').classList.remove('show');
        document.querySelector('aside').style.left = '100vw';
    }
}
    