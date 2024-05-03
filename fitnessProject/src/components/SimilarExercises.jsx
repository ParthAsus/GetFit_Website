import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ equipmentExercises, targetMuscelExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "100px" } }}>
      <Typography variant="h3" mb="50px">
        Exercises that target the same muscle group
      </Typography>

      <Stack >
        {targetMuscelExercises.length ?
          (<HorizontalScrollbar data={targetMuscelExercises} />) 
          : <Loader />
        }
      </Stack>

      {/* 2 */}
      <Typography variant="h3" mb="50px">
        Exercises that use the same Equipment
      </Typography>

      <Stack >
        {equipmentExercises.length ?
          (<HorizontalScrollbar data={equipmentExercises} />) 
          : <Loader />
        }
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
