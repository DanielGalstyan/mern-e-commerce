import { useState, useEffect } from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Pay() {
  const totalAmount = 100;
  let KEY =
    "pk_test_51IUc2oChpxrnV9mE2mdtwnCn6xREuDhWEnGLCSZbGq87fJP8jLPuLLK5H7qrW0l0YBpB98GHlcweCe5VofinbnBp00w7w9ceQ9";

  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        //console.log(response.data)
        history.push("/success");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  return (
    <Container>
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="e-commerce"
          image="https://www.kindpng.com/picc/m/81-813253_retail-icon-red-png-png-download-icon-ecommerce.png"
          billingAddress
          shippingAddress
          description="Your total is 20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <Button>Pay now</Button>
        </StripeCheckout>
      )}
    </Container>
  );
}

export default Pay;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #97c4fe;
  background: linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
  background-color: #3d94f6;
  border-radius: 6px;
  border: 1px solid #337fed;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1570cd;

  &:hover {
    background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
    background-color: #1e62d0;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
