const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases:[]
};

item1 = {
    name: 'thing',
    price: 10.00

};

item2 = {
    name: 'thing2',
    price: 120.00

};



addToCart = function(user, item){
    return user.cart.push(item);
}

addSalesTax = function(user){
    user.cart.forEach(item => item.price = item.price + item.price*.03);
}

moveToCart = function(user){
    user.cart.forEach(item=>user.purchases.push(item));
}

emptyCart = function(user){
    user.cart.forEach((item, i) => user.cart.splice(i,1));
}


logOut = function(){
    console.log(user);
}

main = function(){
addToCart(user, item1);
addToCart(user, item2);
logOut();
addSalesTax(user);
moveToCart(user);
logOut();
emptyCart(user);
logOut();

}


