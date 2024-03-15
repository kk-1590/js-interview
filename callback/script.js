const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentIfo) {
    console.log(paymentIfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// const GITHUB_API = "https://api.github.com/users/kk-1590";

// const user = fetch(GITHUB_API);
// console.log(user);

// user
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

//Producer end
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "1234";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment successful");
  });
}
