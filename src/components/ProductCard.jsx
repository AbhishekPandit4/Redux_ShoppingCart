import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/cartSlice";

export default function App() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.allCart.item);
  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-2">
          {item.map((item) => (
            <MDBCol key={item.id} size="md">
              <MDBCard>
                <MDBCardImage src={item.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}>
                    Add to Card
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
