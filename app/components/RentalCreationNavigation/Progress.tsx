import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

type ProgressBarProps = {
  start: number;
  end: number;
  reverse?: boolean; // Add a new optional prop for reverse
};

const DURATION = 400; // 2 seconds

export default function LinearWithValueLabel({
  start,
  end,
  reverse,
}: ProgressBarProps) {
  // Initialize progress state with the proper start value depending on the reverse prop
  const [progress, setProgress] = React.useState(reverse ? end : start);

  React.useEffect(() => {
    const adjustedStart = reverse ? end : start; // Adjust the start value if reverse is true
    const adjustedEnd = reverse ? start : end; // Adjust the end value if reverse is true

    const startTimestamp = Date.now();
    const endTimestamp = startTimestamp + DURATION;
    let frameId: number;

    const frame = () => {
      const now = Date.now();
      if (now >= endTimestamp) {
        setProgress(adjustedEnd);
      } else {
        const elapsed = now - startTimestamp;
        const progress = elapsed / DURATION;
        const newValue =
          adjustedStart + progress * (adjustedEnd - adjustedStart);
        setProgress(newValue);
        frameId = requestAnimationFrame(frame);
      }
    };

    frame();
    return () => cancelAnimationFrame(frameId);
  }, [start, end, reverse]); // Include reverse in the dependency array

  return (
    <Box alignContent={"center"} className="CreationProgressBar">
      <LinearProgress variant="determinate" value={progress} sx={{ height: 10 }} />
    </Box>
  );
}
