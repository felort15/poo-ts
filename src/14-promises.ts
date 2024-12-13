import axios from 'axios';

(async () => {
  function delay () {
   const promise = new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
   });
   return promise;
  }

  //function getProducts() {
    //const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    //return promise;
  //}

  async function getProducts() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.log("-".repeat(10));
  const result = await delay();
  console.log(result);
  console.log("-".repeat(10));
  const products = await getProducts();
  console.log(products);
})();
