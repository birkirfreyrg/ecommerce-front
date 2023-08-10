import { styled } from "styled-components";
import Center from "./Center";
import Button from "./Button";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>Pro anywhere</Title>
              <Desc>
                Esse cupidatat anim irure magna aliquip enim velit occaecat. Ex
                anim tempor proident duis. Dolor eu aliqua excepteur ut. Sunt
                amet tempor laboris mollit commodo aliquip quis fugiat aute ex.
                Aute exercitation eu deserunt tempor eiusmod ea adipisicing
                eiusmod tempor culpa ullamco.
              </Desc>
              <ButtonsWrapper>
                <Button outline white size="l">
                  Read more
                </Button>
                <Button primary size="l">
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="https://birkir-next-ecommerce.s3.amazonaws.com/1691634076373.png"
              alt=""
            ></img>
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
