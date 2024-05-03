export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '057b3d2013msha3a73d3ec8135b5p158c17jsn4d96b2759a88',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '057b3d2013msha3a73d3ec8135b5p158c17jsn4d96b2759a88',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}