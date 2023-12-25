import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithSimpleValue(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

type ProgressBarProps = {
  value: number;
};

export default function LinearWithValue({ value }: ProgressBarProps) {
  return (
    <Box alignContent={"center"} className="CreationProgressBar">
      <LinearProgressWithSimpleValue value={value} sx={{ height: 10 }} />
    </Box>
  );
}
