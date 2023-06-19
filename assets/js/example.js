const API_KEY = "47de525c8b6e8be1118dc5ace4b3687a"; //should be private, but no server, nothing to hide btw.

/*const city = "Arad";
const source = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

fetch(source)
  .then((x) => {console.log('response', x.json())})
  .catch((error) => {console.log(error);})
  //.then((y) => (document.getElementById("demo").innerHTML = y));
*/

const requestCity = async (city) =>{
  const source='http://api.openweathermap.org/data/2.5/weather';
  const querry=`?q=${city}&appid=${API_KEY}`;
  //fetch call
  const response = await fetch(source + querry);

  const data = await response.json();
  return data;
}

