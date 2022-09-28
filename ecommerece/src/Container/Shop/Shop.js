import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/action/product.action';
import { Link, NavLink } from 'react-router-dom';
import Shop_detail from '../Shop_detail/Shop_detail';
import { getCategory } from '../../redux/action/category.action';

function Shop(props) {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const pdata = product.product;
  const category = useSelector((state) => state.category);
  const data = category.category;

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCategory());
  }, [])
  return (
    <div>

      <div>

        <div className=" product__details__breadcrumb  ">
          <h4>Shop</h4>
          <div className="breadcrumb__links">
            <NavLink to={'/'}>Home </NavLink>
            <span>Shop</span>
          </div>
        </div>



        <section className="shop spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="shop__sidebar">
                  <div className="shop__sidebar__search">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button type="submit"><span className="icon_search" /></button>
                    </form>
                  </div>
                  <div className="shop__sidebar__accordion">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-heading">
                          <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                        </div>
                        <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                          <div className="card-body">

                            {data.map((d) => {
                              return (
                                <ul>
                                  <li className='category__li'>{d.name}</li>
                                </ul>
                              )
                            })
                            }
                          </div>
                        </div>
                      </div>




                      <div className="card">
                        <div className="card-heading">
                          <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                        </div>
                        <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                          <div className="card-body">
                            <div className="shop__sidebar__tags">
                              <a href="#">Product</a>
                              <a href="#">Bags</a>
                              <a href="#">Shoes</a>
                              <a href="#">Fashio</a>
                              <a href="#">Clothing</a>
                              <a href="#">Hats</a>
                              <a href="#">Accessories</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="shop__product__option">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="shop__product__option__left">
                        <p>Showing 1–12 of 126 results</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="shop__product__option__right">
                        <p>Sort by Price:</p>
                        <select>
                          <option value>Low To High</option>
                          <option value>$0 - $55</option>
                          <option value>$55 - $100</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="row">
                  {pdata.map((p) => {
                    return (
                      <div key={p.id} className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item sale">
                          <div className="product__item__pic set-bg" >
                            <img src={p.product_img} />
                          </div>
                          <div className="product__item__text">
                            <h4>{p.name}</h4>

                            <div className="product_bottom product__item__text">
                              <h5>₹{p.price}</h5>
                              <NavLink to={'/shoping_cart'}><img src="img/icon/cart.png" className='product_cart' width={20} height={20} alt='' /></NavLink>
                              <Link to={`/shop/${p.id}`}> <img className='product_eye' src="img/icon/eye.png" width={30} height={20} alt='' /></Link>
                            </div>
                          </div>
                        </div>
                      </div>

                    )
                  })}

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>


    </div>
  );
}

export default Shop;