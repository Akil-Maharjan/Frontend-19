 const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: 3,
    likes: false
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: 4,
    likes: false
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: 5,
    likes: true
  }
]


function likeProduct(id) {
  const product = products.find((product) => product._id === id);
  product.likes = !product.likes;
}

likeProduct('hedfcg');
console.log(products);