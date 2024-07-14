import { motion } from "framer-motion";
import styled from "styled-components";
import { formatTime } from "../utils/util";
import Circles from "./circles";

interface TimeProps {
  seconds: number;
}

const TimeCardContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TimeCards = styled(motion.div)`
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

const timeVariants = {
  start: { scale: 0.6, backgroundColor: "rgba(255,255,255,0.3)" },
  end: { scale: 1, backgroundColor: "rgba(255,255,255,1)" },
};

export default function TimeCard({ seconds }: TimeProps) {
  return (
    <TimeCardContainer>
      <TimeCards
        key={formatTime(seconds).mins}
        variants={timeVariants}
        initial="start"
        animate="end"
        transition={{ duration: 0.3 }}
      >
        {formatTime(seconds).mins}
      </TimeCards>
      <Circles />
      <TimeCards
        key={seconds * 100 + 1}
        variants={timeVariants}
        initial="start"
        animate="end"
        transition={{ duration: 0.3 }}
      >
        {formatTime(seconds).secs}
      </TimeCards>
    </TimeCardContainer>
  );
}
