import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
`;

export default function CartPage() {
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>1</Box>
          <Box>2</Box>
        </ColumnsWrapper>
      </Center>
    </>
  );
}
