import React,{useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../redux/action/category.action';
import { getProduct } from '../../redux/action/product.action';
import { NavLink ,Link} from 'react-router-dom';

function Home(props) {
    const dispatch = useDispatch();
    const category = useSelector((state) => state.category);
    const data = category.category;
    const product = useSelector((state) => state.product);
    const pdata = product.product;
  

    useEffect(() => {
        dispatch(getCategory());
        dispatch(getProduct());
    }, [])
    return (
        <div>
            <div>
                {/* Hero Section Begin */}
                <section className="hero">
                    <div className="hero_bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-7 col-md-8 hero_position">

                                    <h6 className='text-danger fw-bold mb-4'>Summer Collection</h6>
                                    <h2 className='mb-4'>Fall - Winter <br />Collections 2030</h2>
                                    <p>A specialist label creating luxury essentials. Ethically <br />crafted with an unwavering
                                        commitment to exceptional quality.</p>
                                    <a href="#" className="primary-btn">Shop now <span className="arrow_right" /></a>
                                    <div className="hero__social">
                                        <a href="#"><i className="fa fa-facebook" /></a>
                                        <a href="#"><i className="fa fa-twitter" /></a>
                                        <a href="#"><i className="fa fa-pinterest" /></a>
                                        <a href="#"><i className="fa fa-instagram" /></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hero Section End */}


                {/* Category Section start */}
                <section className="product spad">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-12">
                                <ul className="filter__controls">
                                    <li className="active" data-filter="*"> Categories</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row product__filter">
                            {data.map((d) => {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                                        <div className="product__item">
                                            <div className="product__item__pic">
                                                <img src={d.category_img} alt="" className='img_size' />
                                            </div>
                                            <div className="product__text">
                                                <h6>{d.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                {/* Category Section end */}

                {/* Product Section Begin */}
                <section className="product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="filter__controls">
                                    <li className="active" data-filter="*"> Our Products</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row product__filter">
                            {pdata.map((p) => {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">

                                        <div className="product__item">
                                            <div className="product__item__pic ">
                                                <img src={p.product_img} alt='' className='img_size' />
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
                            })
                            }
                        </div>
                    </div>
                </section >
                {/* Product Section End */}


                {/* Categories Section Begin */}
                <section className="categories spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="categories__text">
                                    <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="categories__hot__deal">
                                    <img src="img/product-sale.png" alt />
                                    <div className="hot__deal__sticker">
                                        <span>Sale Of</span>
                                        <h5>$29.99</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1">
                                <div className="categories__deal__countdown">
                                    <span>Deal Of The Week</span>
                                    <h2>Multi-pocket Chest Bag Black</h2>
                                    <div className="categories__deal__countdown__timer" id="countdown">
                                        <div className="cd-item">
                                            <span>3</span>
                                            <p>Days</p>
                                        </div>
                                        <div className="cd-item">
                                            <span>1</span>
                                            <p>Hours</p>
                                        </div>
                                        <div className="cd-item">
                                            <span>50</span>
                                            <p>Minutes</p>
                                        </div>
                                        <div className="cd-item">
                                            <span>18</span>
                                            <p>Seconds</p>
                                        </div>
                                    </div>
                                    <a href="#" className="primary-btn">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Categories Section End */}
                {/* Instagram Section Begin */}
                <section className="instagram spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="instagram__pic">
                                    <div className="instagram__pic__item set-bg" data-setbg="/img/instagram/instagram-1.jpg" >
                                        <img src="img/instagram/instagram-1.jpg" alt="" />
                                    </div>
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-2.jpg" >
                                        <img src="img/instagram/instagram-2.jpg" alt="" />
                                    </div>
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-3.jpg" >
                                        <img src="img/instagram/instagram-3.jpg" alt="" />
                                    </div>
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-4.jpg" >
                                        <img src="img/instagram/instagram-4.jpg" alt="" />
                                    </div>
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-5.jpg" >
                                        <img src="img/instagram/instagram-5.jpg" alt="" />
                                    </div>
                                    <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-6.jpg" >
                                        <img src="img/instagram/instagram-6.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="instagram__text">
                                    <h2>Instagram</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua.</p>
                                    <h3>#Male_Fashion</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Instagram Section End */}
                {/* Latest Blog Section Begin */}
                <section className="latest spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <span>Latest News</span>
                                    <h2>Fashion New Trends</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog__item">
                                    <div className="set-bg" />
                                    <img src='img/blog/blog-1.jpg' />
                                    <div className="blog__item__text">
                                        <span><img src="img/icon/calendar.png" alt /> 16 February 2020</span>
                                        <h5>What Curling Irons Are The Best Ones</h5>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog__item">
                                    <div className=" set-bg" />
                                    <img src='img/blog/blog-2.jpg' />
                                    <div className="blog__item__text">
                                        <span><img src="img/icon/calendar.png" alt /> 21 February 2020</span>
                                        <h5>Eternity Bands Do Last Forever</h5>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="blog__item">
                                    <div className=" set-bg" />
                                    <img src='img/blog/blog-3.jpg' />
                                    <div className="blog__item__text">
                                        <span><img src="img/icon/calendar.png" alt /> 28 February 2020</span>
                                        <h5>The Health Benefits Of Sunglasses</h5>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

        </div >
    );
}

export default Home;

