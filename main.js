const myClass="app";
const App =()=>{
<div className={myClass} style={body}  > Welcome to app</div>};


const Header=()=> {
<div >
   <h1>the header </h1>
<App/> </div>
};

const TheProducts = () => {
(<div>
 <h1>The products</h1>
 <br/>
<Header/> </div>);
};

const Product=()=>{
<div > className={"product-card"}
  return(
  <TheProducts/>
  {className})
</div>};


<body>
 <nav class="product-filter">
      <h1>Jackets</h1>

      <div class="sort">
        <div class="collection-sort">
          <label>Filter by:</label>
          <select>
            <option value="/">All Jackets</option>
            <option value="/">2016</option>
            <option value="/">jacket</option>
            <option value="/">Jackets</option>
            <option value="/">layers</option>
            <option value="/">Obeyer</option>
            <option value="/">Roxy</option>
            <option value="/">women's</option>
          </select>
        </div>

        <div class="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav> 


  <section class="products">
    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>
  </section>
</body>

ReactDOM.render(<Product />, document.getElementById("app"))
  



const App =()=>(
<h1>  Welcome to app 
  <Header />
  <TheProducts />
</h1>
);


const Header=()=> (
   <h1>The header </h1>
);

const TheProducts = () => (
 <h1>The products
     <Product/>
 </h1>
 );


const Product=()=>{
<h1 > className={"products"}
  return({className})</h1>};


<body>
 <nav class="product-filter">
      <h1>Jackets</h1>

      <div class="sort">
        <div class="collection-sort">
          <label>Filter by:</label>
          <select>
            <option value="/">All Jackets</option>
            <option value="/">2016</option>
            <option value="/">jacket</option>
            <option value="/">Jackets</option>
            <option value="/">layers</option>
            <option value="/">Obeyer</option>
            <option value="/">Roxy</option>
            <option value="/">women's</option>
          </select>
        </div>

        <div class="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav> 


  <section class="products">
    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>

    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>
  </section>
</body>
ReactDOM.render(<App />, document.getElementById("app"))
ReactDOM.render(<Header />, document.getElementById("app"))
ReactDOM.render(<TheProducts />, document.getElementById("app"))
ReactDOM.render(<Product />, document.getElementById("app"))





