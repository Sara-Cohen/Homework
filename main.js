

let className;

const App =()=>{
return (
    <nav className="product-filter">
    app
    <Header/>
    <br/> 
    <TheProducts/>  </nav>);};


const Header=()=> {
return (
       <div className="collection-sort">
       <br/>  haeder 

       </div> );};

const TheProducts = () => {
return (
    <section className="Products">
      <br/>
      the product
      <br/>
      <br/>
      <Product/>   
      <Product /> 
      <Product/> 
     <br/>
     <Product/> 
     <Product/> 
     <Product/> 
     <br/>
    </section>
);};

const Product=()=>{
 return(<div className="product">item </div>);};



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
/*ReactDOM.render(<Header />, document.getElementById("app"))
ReactDOM.render(<TheProducts />, document.getElementById("app"))*/
/*ReactDOM.render(<Product />, document.getElementById("app"))*/