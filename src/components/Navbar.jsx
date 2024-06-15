import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../Features/cartSlice";
// import './App.css';

const Navbar = () => {
  const {cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCartTotal())
  },[cart])

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/" style={{ marginRight: "15px" }}>
            All Product
          </Link>
        </span>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="btn btn-dark" style={{ color: "white" }}>
            Cart({totalQuantity})
          </div>
        </Link>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
