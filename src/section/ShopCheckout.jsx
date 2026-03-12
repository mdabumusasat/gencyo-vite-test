import { useState } from "react";
import { Link } from "react-router-dom";
import Product1 from "../assets/images/resource/products/1.jpg";
import Product2 from "../assets/images/resource/products/2.jpg";
import Product3 from "../assets/images/resource/products/3.jpg";

function ShopCheckout() {
  const [activeMethod, setActiveMethod] = useState(1);

  const products = [
    { id: 1, name: "Headphone", qty: 2, price: 36, img: Product1 },
    { id: 2, name: "Lagage", qty: 3, price: 115, img: Product2 },
    { id: 3, name: "Watch", qty: 1, price: 68, img: Product3 },
  ];

  const subtotal = products.reduce((acc, item) => acc + item.price, 0);
  const orderTotal = 250;

  const toggleAccordion = (id) => {
    setActiveMethod(activeMethod === id ? null : id);
  };

  return (
    <section className="our-checkout">
      <div className="container pt-70 pb-100">
        <div className="section-content">
          <form id="checkout-form">
            <div className="row mt-30">
              <div className="col-md-6">
                <div className="billing-details">
                  <h3 className="mb-30">Billing Details</h3>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label>First Name</label>
                      <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label>Last Name</label>
                      <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label>Company Name</label>
                        <input type="text" className="form-control" placeholder="Company Name" />
                      </div>
                      <div className="mb-3">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="Email Address" />
                      </div>
                      <div className="mb-3">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Street address" />
                      </div>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label>City</label>
                      <input type="text" className="form-control" placeholder="City" />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label>State/Province</label>
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label>Zip/Postal Code</label>
                      <input type="text" className="form-control" placeholder="Zip/Postal Code" />
                    </div>
                    <div className="mb-3 col-md-6">
                      <label>Country</label>
                      <select className="form-control">
                        <option>Select Country</option>
                        <option>Australia</option>
                        <option>UK</option>
                        <option>USA</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="mb-4">Additional information</h3>
                <label>Order notes (optional)</label>
                <textarea
                  className="form-control"
                  placeholder="Notes about your order"
                  rows="3"
                />
              </div>
              <div className="col-md-12 mt-30">
                <h3>Your order</h3>
                <table className="table tbl-shopping-cart">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Product Name</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="product-thumbnail">
                          <Link to="/shop-product-details">
                            <img src={product.img} alt={product.name} />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link to="/shop-product-details">
                            {product.name}
                          </Link>
                          x {product.qty}
                        </td>
                        <td>
                          <span className="amount">${product.price}</span>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>Cart Subtotal</td>
                      <td></td>
                      <td>${subtotal}</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handling</td>
                      <td></td>
                      <td>Free Shipping</td>
                    </tr>
                    <tr>
                      <td>Order Total</td>
                      <td></td>
                      <td>${orderTotal}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Payment Methods */}
              <div className="col-md-12 mt-60">
                <div className="payment-method">
                  <h3 className="mb-3">Choose a Payment Method</h3>

                  <ul className="accordion-box">

                    {[1,2,3,4].map((item) => (
                      <li
                        key={item}
                        className={`accordion block ${
                          activeMethod === item ? "active-block" : ""
                        }`}>
                        <div
                          className={`acc-btn ${
                            activeMethod === item ? "active" : ""
                          }`}
                          onClick={() => toggleAccordion(item)}>
                          <div className="icon-outer">
                            <i className="lnr-icon-chevron-down"></i>
                          </div>
                          {item === 1 && "Credit Card / Debit Card"}
                          {item === 2 && "Direct Bank Transfer"}
                          {item === 3 && "Cheque Payment"}
                          {item === 4 && "Other Payment"}
                        </div>

                        {activeMethod === 1 && item === 1 && (
                          <div className="acc-content current">
                            <div className="payment-info">
                              <div className="row clearfix">
                                <div className="col-md-6 mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name on the Card"
                                  />
                                </div>

                                <div className="col-md-6 mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Card Number"
                                  />
                                </div>

                                <div className="col-md-3 mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Expiry Date"
                                  />
                                </div>

                                <div className="col-md-3 mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Security Code"
                                  />
                                </div>

                                <div className="col-md-6">
                                  <button
                                    type="submit"
                                    className="btn-style-one px-5"
                                  >
                                    Make Payment
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {item !== 1 && activeMethod === item && (
                          <div className="acc-content current">
                            <div className="payment-info">
                              <p>
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                              </p>
                            </div>
                          </div>
                        )}

                      </li>
                    ))}

                  </ul>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ShopCheckout;