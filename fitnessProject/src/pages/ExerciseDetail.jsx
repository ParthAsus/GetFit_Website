import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import Detail from '../components/Detail'
import { useParams } from 'react-router-dom'

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscelExercises, setTargetMuscelExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      // 1st api call
      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      console.log(exerciseDetailData);
      setExerciseDetail(exerciseDetailData);

      // 2nd api call
      const exerciseVideosData =  await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      // 3rd api call
      const targetMuscelExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscelExercises(targetMuscelExercisesData);

      // 4th api call
      const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExerciseData);
    };

    fetchExercisesData();
  }, [id]);
  return (
    <Box sx={{}}>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscelExercises={targetMuscelExercises} equipmentExercises={equipmentExercises}/>
      </Box>
  )
}

export default ExerciseDetail
