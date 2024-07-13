import { useEffect, useState } from "react";
import styled from "styled-components";
import { defaultTime, formatTime, goalCount, roundCount } from "../utils/util";
import { useRecoilState } from "recoil";
import { goalAtom, roundAtom } from "../utils/atom";
import { motion } from "framer-motion";
import Circles from "../components/circles";

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

const TimeCardContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TimeCard = styled(motion.div)`
  font-size: 64px;
  font-weight: bolder;
  color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 250px;
  width: 150px;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Btn = styled(motion.svg)`
  width: 130px;
  height: 130px;
  outline: none;
`;

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

const Counter = styled.div`
  font-size: 28px;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.5);
`;

const CounterSpan = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.9);
`;

const btnVariants = {
  hover: { scale: 1.2 },
  tap: { scale: 0.7 },
};

const timeVariants = {
  start: { scale: 0.6, backgroundColor: "rgba(255,255,255,0.3)" },
  end: { scale: 1, backgroundColor: "rgba(255,255,255,1)" },
};

export default function Main() {
  const [seconds, setSeconds] = useState<number>(defaultTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
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
      <TimeCardContainer>
        <TimeCard
          key={formatTime(seconds).mins}
          variants={timeVariants}
          initial="start"
          animate="end"
          transition={{ duration: 0.3 }}
        >
          {formatTime(seconds).mins}
        </TimeCard>
        <Circles />
        <TimeCard
          key={formatTime(seconds).secs}
          variants={timeVariants}
          initial="start"
          animate="end"
          transition={{ duration: 0.3 }}
        >
          {formatTime(seconds).secs}
        </TimeCard>
      </TimeCardContainer>
      <Btn
        data-slot="icon"
        fill="rgba(0, 0, 0, 0.5)"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        onClick={onClick}
        variants={btnVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d={
            !isRunning
              ? "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
              : "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5Z"
          }
        ></path>
      </Btn>
      <CounterContainer>
        <CounterCart>
          <Counter>
            {rounds}/{roundCount}
          </Counter>
          <CounterSpan>ROUND</CounterSpan>
        </CounterCart>
        <CounterCart>
          <Counter>
            {goals}/{goalCount}
          </Counter>
          <CounterSpan>GOAL</CounterSpan>
        </CounterCart>
      </CounterContainer>
    </Container>
  );
}
