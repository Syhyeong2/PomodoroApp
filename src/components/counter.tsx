import { useRecoilValue } from "recoil";
import { goalAtom, roundAtom } from "../utils/atom";
import { goalCount, roundCount } from "../utils/util";
import styled from "styled-components";
const CounterContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 70px;
`;

const CounterCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Counters = styled.div`
  font-size: 28px;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.5);
`;

const CounterSpan = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.9);
`;
export default function Counter() {
  const rounds = useRecoilValue(roundAtom);
  const goals = useRecoilValue(goalAtom);
  return (
    <CounterContainer>
      <CounterCart>
        <Counters>
          {rounds}/{roundCount}
        </Counters>
        <CounterSpan>ROUND</CounterSpan>
      </CounterCart>
      <CounterCart>
        <Counters>
          {goals}/{goalCount}
        </Counters>
        <CounterSpan>GOAL</CounterSpan>
      </CounterCart>
    </CounterContainer>
  );
}
