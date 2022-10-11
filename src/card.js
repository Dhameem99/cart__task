function Card({ Product, addToCart, cartItems }) {
    return <div className="col-lg-4 border mt-2 p-2">
        <div className="row">
          <div className="col-lg-12">
            <img className="img-fluid" src={Product.img} />
          </div>
          <div className="col-lg-12">
            <h3>{Product.name}</h3>
            <h6>Price Rs.{Product.price}</h6>
            <button  disabled={cartItems.some(obj => obj.id === Product.id)}
  
              onClick={() => {
                addToCart(Product)
                
              }}
              className="btn btn-sm btn-primary"
            >
  {
  cartItems.some(obj => obj.id === Product.id) ? "added to cart" : "add to cart"
  }
            </button>
          </div>
        </div>
      </div>
    
  }
  export default Card;