    const key='b52662ae3da96956a871ff87a5afc355';

  /*  const baseURL='http://api.openweathermap.org/geo/1.0/direct?q=London&appid=b52662ae3da96956a871ff87a5afc355';

    fetch(baseURL)
            .then((data)=>{console.log('response',data.json())})
            .catch((error)=>{
                console.log(error);
            }) */

    const requestCity= async (city)=>{
    const baseURL='http://api.openweathermap.org/geo/1.0/direct'
    const query='?q=${city}appid=${key}';

    const response=await fetch(baseURL+query); //fetch call(promise call)
    

    const data=await response.json(); //promise data
     return data;
    }
    


