import { useEffect, useState } from "react";
import styled from "styled-components";
import { formatTime } from "../utils/util";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Main() {
  const [seconds, setSeconds] = useState<number>(1500);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  useEffect(() => {
    if (isRunning) {
      if (seconds > 0) {
        const timer = setTimeout(() => {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setIsRunning(false);
        setSeconds(1500);
      }
    }
  }, [isRunning, seconds]);
  const onClick = () => {
    setIsRunning(true);
  };
  const onClicka = () => {
    setIsRunning(false);
  };

  return (
    <Container>
      <button onClick={onClick}>start!</button>
      <button onClick={onClicka}>stop!</button>
      <span>{formatTime(seconds).mins}</span>
      <span>{formatTime(seconds).secs}</span>
    </Container>
  );
}
