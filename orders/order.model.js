const oredrs = [
  {
    date: "2005-05-05",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old Red Shoe",
          price: 45.15,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders(){
    return oredrs;
}

module.exports={
    getAllOrders,
}