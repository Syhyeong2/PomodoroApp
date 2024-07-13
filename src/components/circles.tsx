import styled from "styled-components";

const CircleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const Circle = styled.div`
  background-color: #ffffff81;
  width: 8px;
  height: 8px;
  border-radius: 100%;
`;

export default function Circles() {
  return (
    <CircleContainer>
      <Circle />
      <Circle />
    </CircleContainer>
  );
}
