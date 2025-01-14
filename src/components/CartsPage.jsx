import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  derecessItemQuantity,
  getCartTotal,
  incressItemQuantity,
  removeitem,
} from "../Features/cartSlice";

export default function CartsPage() {
  const { tottalPrice, totalQuantity, cart } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  dispatch(getCartTotal());
  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </div>
                <div className="card-body">
                  {/* <!-- Single item --> */}
                  {cart.map((data) => (
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        {/* <!-- Image --> */}
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={data.img}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                        {/* <!-- Image --> */}
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Data --> */}
                        <p>
                          <strong>{data.title}</strong>
                        </p>

                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-tooltip-init
                          title="Remove item"
                          onClick={() => dispatch(removeitem(data.id))}
                        >
                          <i className="fas fa-trash"></i>
                        </button>

                        {/* <!-- Data --> */}
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        {/* <!-- Quantity --> */}
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary px-3 me-2"
                            onClick={() =>
                              dispatch(derecessItemQuantity(data.id))
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div data-mdb-input-init className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={data.quantity}
                              type="number"
                              className="form-control"
                              onChange={() => null}
                            />
                            <label className="form-label" htmlFor="form1">
                              {/* Quantity */}
                            </label>
                          </div>

                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary px-3 ms-2"
                            onClick={() =>dispatch(incressItemQuantity(data.id))}
                            // onClick={()=>console.log("data.id--->",data.id)}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        {/* <!-- Quantity --> */}

                        {/* <!-- Price --> */}
                        <p className="text-start text-md-center">
                          <strong>{data.price}</strong>
                        </p>
                        {/* <!-- Price --> */}
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                  {/* <!-- Single item --> */}

                  {/* <!-- Single item --> */}

                  {/* <!-- Single item --> */}
                </div>
              </div>

              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>

                      <span>
                        <strong>{tottalPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
