export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return {
    mins: mins.toString().padStart(2, "0"),
    secs: secs.toString().padStart(2, "0"),
  };
};

export const roundCount = 4; //4
export const goalCount = 12; //12
export const defaultTime = 1500; //1500
