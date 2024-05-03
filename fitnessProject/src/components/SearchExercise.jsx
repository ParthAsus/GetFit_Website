import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from '../components/HorizontalScrollbar';

const SearchExercise = ({exercises, setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, SetBodyParts] = useState([]);


  // Soon as our page load, we'll fetch the category
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      SetBodyParts(['all', ...bodyPartData]);
    }
    fetchExercisesData();
  }, [])


  // fetching data from an api
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=900',
        exerciseOptions
      );

      const searchedExercises = exerciseData.filter(
        (item) => item.name.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search)
        || item.name.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          mb: {lg: '50px', xs: '20px'}
        }}
        textAlign="center"
      >
        Awesome Exercise You <br />
        Should Know
      </Typography>

      <Box position="relative" mb="72px" sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', width: '100%'}}>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", sm: "500px", xs: '300px' },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            position: 'relative',
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "150px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            mt: '20px',
            border: '1px solid black',
            borderRadius: '50px'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* For categories */}
      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  );
};

export default SearchExercise;
