import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

function Shoping_cart(props) {
  const product = useSelector((state) => state.product);
  const pdata = product.product;
  const { productId } = useParams()
  const thisProduct = pdata.find(prod => prod.id === productId)
  return (


    <div>

      <div className="product__details__breadcrumb">
        <NavLink to={'/'}>Home </NavLink>
        <NavLink to={'/shop'}>Shop </NavLink>
        <span>Shopping Cart</span>
      </div>



      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product__cart__item">
                        <div className="product__cart__item__img">
                          <img src={thisProduct.product_img} alt />
                        </div>
                        <div className="product__cart__item__text">
                          <h5>{thisProduct.name}</h5>
                          <h6>₹{thisProduct.price}</h6>
                        </div>
                      </td>
                      <td className="quantity__item">
                        <div className="quantity">
                          <div className="pro-qty-2">
                            <input type="text" defaultValue={thisProduct.quantity} />
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$ 30.00</td>
                      <td className="cart__close"><i className="fa fa-close" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                  
                    <NavLink to={'/shop'} >Continue Shopping</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    <a href="#"><i className="fa fa-spinner" /> Update cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                  <li>Subtotal <span>$ 169.50</span></li>
                  <li>Total <span>$ 169.50</span></li>
                </ul>
                <a href="#" className="primary-btn">Proceed to checkout</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


  );
}

export default Shoping_cart;