function calculateDiscount(price, discountPercent) {
  // Bug: No check if discountPercent is negative or > 100
  // Bug: price can be null or undefined
  const finalPrice = price - (price * (discountPercent / 100));
  return finalPrice.toFixed(2);
}

function getUserProfile(user) {
  // Bug: user can be null or undefined; accessing user.email crashes!
  return user.email.toLowerCase();
}
// testing my AI bot
