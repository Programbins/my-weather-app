import { useEffect, useState } from "react";
import CityList from "../components/CityList";

function Cities() {
  const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities";
  const [cityState, setCityState] = useState([]);

  // hooks
  useEffect(() => {
    console.log("cities component mounted!");
    getCities();
  }, []); // once

  async function getCities() {
    const cities = await fetch(API_URL).then((res) => res.json());
    console.log(cities);

    setCityState(cities);
  }

  return (
    <div>
     <div className="citiesHead">
      <h1>도시들</h1>
      <p>{API_URL}</p>
     </div>
      <CityList cities={cityState} />
    </div>
  );
}

export default Cities;
