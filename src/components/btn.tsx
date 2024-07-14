import { motion } from "framer-motion";
import styled from "styled-components";

interface BtnProps {
  isRunning: boolean;
  onClick: () => void;
}

const Button = styled(motion.svg)`
  width: 130px;
  height: 130px;
  outline: none;
`;

const btnVariants = {
  hover: { scale: 1.2 },
  tap: { scale: 0.7 },
};

export default function Btn({ isRunning, onClick }: BtnProps) {
  return (
    <Button
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
        clipRule="evenodd"
        fillRule="evenodd"
        d={
          !isRunning
            ? "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z"
            : "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5-2.25A.75.75 0 0 1 7.75 7h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5Z"
        }
      ></path>
    </Button>
  );
}
