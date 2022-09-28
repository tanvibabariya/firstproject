import React from 'react';
import{useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import {useParams} from "react-router-dom"

function Shop_detail(props) {

  const product = useSelector((state) => state.product);
  const pdata = product.product;
  const {productId} = useParams()
  const thisProduct = pdata.find(prod => prod.id === productId)

 
  return (
    <div>

      <div className="product__details__breadcrumb">
        <NavLink to={'/'}>Home </NavLink>
        <NavLink to={'/shop'}>Shop </NavLink>
        <span>Product Details</span>
      </div>

        <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <div className="tab-content">
              <div className="tab-pane active" id="tabs-1" role="tabpanel">
                <div className="product__details__pic__item">
                  <img src={thisProduct.product_img} alt />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5">
            <div className="product__details__text">
              <h3>{thisProduct.name}</h3>

              <h4>{thisProduct.price} </h4>
              <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable
                cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
                with placket.</p>

              <div className="product__details__cart__option">
                <div className="quantity">
                  <div className="pro-qty">
                    <input type="text" defaultValue={thisProduct.quantity} />
                  </div>
                </div>
               
                <NavLink to={`/shoping_cart/${thisProduct.id}`} className="primary-btn">add to cart</NavLink>
              </div>
              {/* <div className="product__details__btns__option">
                <a href="#"><i className="fa fa-heart" /> add to wishlist</a>
                <a href="#"><i className="fa fa-exchange" /> Add To Compare</a>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    

    </div>
  );
}

export default Shop_detail;