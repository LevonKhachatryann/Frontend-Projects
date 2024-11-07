


const products = [
    { product: "shalvar", guyn: "sev", chaps: 40, arjeq: 12000 },
    { product: "shapik", guyn: "spitak", chaps: 37, arjeq: 10000 },
    { product: "shapik", guyn: "kapuyt", chaps: 32, arjeq: 8000 },
    { product: "koshik", guyn: "sev", chaps: 40, arjeq: 22000 },
    { product: "kurtka", guyn: "karmir", chaps: 38, arjeq: 35000 },
    { product: "shalvar", guyn: "sev", chaps: 45, arjeq: 7000 },
    { product: "hoodie", guyn: "kanach", chaps: 36, arjeq: 90000 },
    { product: "shortik", guyn: "dexin", chaps: 24, arjeq: 43000 },
  ];
  
  const basket = [];
  
  const d = document.getElementById("d");
  const see = document.getElementById("see");
  const basketDiv = document.getElementById("basketDiv");
  
  products.forEach((element, index) => {
    d.innerHTML += `
    <br>
      <div>
          <div>apranq: ${element.product}</div>
          <div>guyn: ${element.guyn}</div>
          <div>chaps: ${element.chaps}</div>
          <div>arjeq:${element.arjeq}</div>
          <button onclick='addToBasket(${index})'>avelacnel zambyux</button>
      </div>
    <br>
      `;
  });
  
  function getBasketAll() {
    basketDiv.style.display = "block";
    basketDiv.innerHTML = "";
  
    if (basket.length > 0) {
      basket.forEach((element, index) => {
        basketDiv.innerHTML += `
        <br>
          <div>
              <div>apranq: ${element.product}</div>
              <div>guyn: ${element.guyn}</div>
              <div>chaps: ${element.chaps}</div>
              <div>arjeq:${element.arjeq}</div>
              <button onclick='removeItem(${index})'>X</button>
          </div>
        <br>
          `;
      });
    } else {
      basketDiv.innerHTML = "no prodcts yet";
    }
  }
  
  function addToBasket(index) {
    basket.push(products[index]);
    getBasketAll();
  }
  
  see.addEventListener("click", getBasketAll);
  
  function removeItem(index) {
    basket.splice(index, 1);
    getBasketAll();
  }