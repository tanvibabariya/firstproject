import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProduct } from '../../redux/action/product.action'


function Shoping_cart(props) {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const cartData = cart.cart

  const product = useSelector((state) => state.product);
  const pdata = product.product;

  
  let CartData = [];
   pdata.map((p) => {
   cartData.map((c) => {
    if(p.id === c.id)
    CartData.push(p)
    })
  })

  useEffect(() => {
    dispatch(getProduct())
  }, [])


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
                    {CartData.map((c) => {
                      return (
                        <tr>
                          <td className="product__cart__item">
                            <div className="product__cart__item__img">
                              <img src={c.product_img} alt />
                            </div>
                            <div className="product__cart__item__text">
                              <h5>{c.name}</h5>
                              <h6>₹{c.price}</h6>
                            </div>
                          </td>
                          <td className="quantity__item">
                            <div className="quantity">
                              <div className="pro-qty-2">
                                <input type="text" defaultValue={c.quantity} />
                              </div>
                            </div>
                          </td>
                          <td className="cart__price">₹{c.price}</td>
                          <td className="cart__close"><i className="fa fa-close" /></td>
                        </tr>
                      )
                    })

                    }

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