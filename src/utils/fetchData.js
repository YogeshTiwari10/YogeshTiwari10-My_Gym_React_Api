export const exerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'/,
    headers: {
      'X-RapidAPI-Key': '9b0fde92a2mshefad9f4d6265d2cp15fc63jsn0f35ba661f02',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '9b0fde92a2mshefad9f4d6265d2cp15fc63jsn0f35ba661f02',
    },
  };

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };