export const exerciseOptions = {
        method: 'GET',
        //url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
        //params: {limit: '10'},
        headers: {
          'X-RapidAPI-Key': 'ada862c3a4msh52c4839c9039e66p12299fjsn82972f1c56c2',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ada862c3a4msh52c4839c9039e66p12299fjsn82972f1c56c2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}