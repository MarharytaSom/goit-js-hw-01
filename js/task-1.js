function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`
};
makeTransaction(2, 10);
console.log(makeTransaction(5, 3000));

