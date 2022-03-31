import styled from "styled-components";

function Success() {
  return (
    <Container>
      <SuccessButton>Successfull</SuccessButton>
      <Message>
        <SuccessMessage>
          Your order is being prepared.
          <br />
          Thanks for choosing our store!
        </SuccessMessage>
      </Message>
    </Container>
  );
}

export default Success;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const SuccessButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #caefab;
  background: linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
  background-color: #77d42a;
  border-radius: 6px;
  border: 1px solid #268a16;
  display: inline-block;
  cursor: pointer;
  color: #306108;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #aade7c;

  &:hover {
    background: linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
    background-color: #5cb811;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const Message = styled.div``;

const SuccessMessage = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 20px 20px;
`;
