import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

type progessbarProps = {
  procentage: number;
};

export default function LinearWithValueLabel(props: progessbarProps) {
  return (
    <Box alignContent={"center"} className="CreationProgressBar">
      <LinearProgressWithLabel
        value={props.procentage}
        sx={{
          height: 10,
        }}
      />
    </Box>
  );
}
