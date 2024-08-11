import { useState } from "react";
import CitySelector from "./components/city_selector/CitySelector";
import CityCard from "./components/city_card/City_card";
import "./App.css";

function App() {
  const [cityInfo, setCityInfo] = useState("");

  return (
    <>
      <CitySelector info={setCityInfo} />
      <CityCard cityData={cityInfo} />
    </>
  );
}

export default App;
