"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import Product1 from "../assets/images/resource/products/1.jpg";
import Product2 from "../assets/images/resource/products/2.jpg";
import Product3 from "../assets/images/resource/products/3.jpg";

export default function CartSection() {
  const [quantities, setQuantities] = useState({
    item1: 1,
    item2: 2,
    item3: 3,
  });

  const [couponCode, setCouponCode] = useState("");
  const [status, setStatus] = useState("");

  const handleQuantityChange = (item, delta) => {
    setQuantities((prev) => {
      const newQty = prev[item] + delta;
      return { ...prev, [item]: newQty > 0 ? newQty : 1 };
    });
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    setStatus(`Coupon "${couponCode}" applied!`);
  };

  const products = [
    { id: "item1", name: "Winter Black Jacket", img: Product1, price: 36, size: "Medium" },
    { id: "item2", name: "Swan Crop V-Neck Tee", img: Product2, price: 115, size: "Small" },
    { id: "item3", name: "Blue Solid Casual Shirt", img: Product3, price: 68, size: "Large" },
  ];

  const cartSubtotal = products.reduce(
    (sum, product) => sum + product.price * quantities[product.id],
    0
  );
  const shipping = 70;
  const orderTotal = cartSubtotal + shipping;

  return (
    <section className="cart-section">
      <div className="container pt-120 pb-100">
        <div className="section-content">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-striped tbl-shopping-cart table-transparent">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="cart_item">
                        <td className="product-remove">
                          <Link title="Remove this item" className="remove" to="#">
                            ×
                          </Link>
                        </td>
                        <td className="product-thumbnail">
                          <Link to="#">
                            <img src={product.img} alt={product.name} />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link to="/shop-product-details">{product.name}</Link>
                          <ul className="variation">
                            <li className="variation-size">
                              Size: <span>{product.size}</span>
                            </li>
                          </ul>
                        </td>
                        <td className="product-price">
                          <span className="amount">${product.price.toFixed(2)}</span>
                        </td>
                        <td className="product-quantity">
                          <div className="product-details__quantity">
                            <div className="quantity-box">
                              <button
                                type="button"
                                className="sub"
                                onClick={() => handleQuantityChange(product.id, -1)}>
                                <i className="fa fa-minus"></i>
                              </button>
                              <input
                                type="number"
                                value={quantities[product.id]}
                                readOnly/>
                              <button
                                type="button"
                                className="add"
                                onClick={() => handleQuantityChange(product.id, 1)}>
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">
                            ${(product.price * quantities[product.id]).toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    ))}
                    <tr className="cart_item">
                      <td colSpan="3">
                        <form className="row g-3 coupon-form" onSubmit={handleCouponSubmit}>
                          <div className="col-auto">
                            <input
                              type="text"
                              name="coupon_code"
                              className="input-text form-control mr-1"
                              placeholder="Coupon code"
                              value={couponCode}
                              onChange={(e) => setCouponCode(e.target.value)}
                              autoComplete="off"/>
                          </div>
                          <div className="col-auto">
                            <button type="submit" className="btn-style-one px-5">
                              Apply Coupon
                            </button>
                          </div>
                        </form>
                        {status && <p className="mt-2 text-success">{status}</p>}
                      </td>
                      <td colSpan="2">&nbsp;</td>
                      <td>
                        <button type="button" className="btn-style-one px-5">
                          Update Cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-12 mt-30">
              <div className="row">
                <div className="col-md-5">
                  <h4 className="mb-3">Calculate Shipping</h4>
                  <form className="form">
                    <div className="mb-10">
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                    <div className="mb-10">
                      <input type="text" className="form-control" placeholder="State/country" />
                    </div>
                    <div className="mb-10">
                      <input type="text" className="form-control" placeholder="Postcod/zip" />
                    </div>
                    <div className="mb-30">
                      <button type="button" className="btn-style-one">
                        Update Totals
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5">
                  <h4 className="mb-3">Cart Totals</h4>
                  <table className="table cart-total table-transparent">
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>${cartSubtotal.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handling</td>
                        <td>${shipping.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td>${orderTotal.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="/shop-checkout" className="btn-style-one">
                    <span className="btn-title">Proceed to Checkout</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}