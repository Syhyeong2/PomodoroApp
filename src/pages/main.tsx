import { useEffect, useState } from "react";
import styled from "styled-components";
import { defaultTime, goalCount, roundCount } from "../utils/util";
import { useRecoilState } from "recoil";
import { goalAtom, roundAtom } from "../utils/atom";
import Btn from "../components/btn";
import TimeCard from "../components/timeCard";
import Counter from "../components/counter";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: tomato;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: bolder;
  color: white;
`;

export default function Main() {
  const [seconds, setSeconds] = useState<number>(defaultTime);
  const [isRunning, setIsRunning] = useState(false);
  const [rounds, setRounds] = useRecoilState(roundAtom);
  const [goals, setGoals] = useRecoilState(goalAtom);
  useEffect(() => {
    if (isRunning) {
      if (seconds > 0) {
        const timer = setTimeout(() => {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setIsRunning(false);
        setSeconds(defaultTime);
        setRounds((prev) => prev + 1);
        if (rounds === roundCount - 1) {
          setGoals((prev) => prev + 1);
          setRounds(0);
        }
        if (goals === goalCount - 1 && rounds === roundCount - 1) {
          console.log("finish!");
          setGoals(0);
        }
      }
    }
  }, [isRunning, seconds]);
  const onClick = () => {
    setIsRunning((prev) => !prev);
  };
  return (
    <Container>
      <Title>Pomodoro</Title>
      <TimeCard seconds={seconds} />
      <Btn isRunning={isRunning} onClick={onClick} />
      <Counter />
    </Container>
  );
}
