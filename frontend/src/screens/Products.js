import React from "react";
import "./Products.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar, fas } from '@fortawesome/free-solid-svg-icons'
// import { useStateValue } from "../../Context/StateProvider";

function Products({ id, name, image, price, description, rating }) {
  //   const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    // dispatch item into the data layer..
    // dispatch({
    //   type: "ADD_TO_CART",
    //   item: {
    //     id: id,
    //     name: name,
    //     image: image,
    //     price: price,
    //     description: description,
    //     rating: rating,
    //   },
    // });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{name}</p>
        <img src={image} className="product-img" />
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* <div className="rating">
                        <span style={{color: "orange"}}>
                            {Array(rating).fill().map((_,i) => (
                                // <FontAwesomeIcon icon={faStar} />
                            ))}
                        </span>
                    </div> */}
      </div>
      <button className="add-btn" onClick={addToCart}>
        <small>Add to Cart</small>
      </button>
    </div>
  );
}

export default Products;
