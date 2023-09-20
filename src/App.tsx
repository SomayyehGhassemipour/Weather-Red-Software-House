import { useState } from "react";
import "./App.scss";
import { getTempratureByCity } from "./sevices/weather/WeatherService";
import { Button } from "./sharedComponents/Button";
import { Input } from "./sharedComponents/Input";

type Weather = {
  location: string;
  date: string;
  temprature: number;
  searchedTime: string;
};

function App() {
  const [logData, setLogData] = useState<Weather[]>([]);
  const [location, setLocation] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const searchWeather = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await getTempratureByCity(location);
    if (response.error) {
      alert("No matching location found.");
    } else {
      const currentDate = new Date(Date.now()).toISOString().substring(0, 10);

      let times = localStorage.getItem(location.toUpperCase());
      !times ? (times = "1") : (times = String(Number(times) + 1));

      localStorage.setItem(location.toUpperCase(), times);

      const newWeatherEntry: Weather = {
        location: location,
        date: currentDate,
        temprature: response,
        searchedTime: times,
      };
      setLogData([newWeatherEntry, ...logData]);
    }
    setLocation("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <form id="myform" onSubmit={searchWeather}>
            <Input
              label="City"
              type="text"
              placeholder="e.g. London"
              value={location}
              required={true}
              onchangeHandler={changeHandler}
              autoFocus={true}
            />
            <Button
              classname="button-text bg-blue-200 text-grey-500"
              form="myform"
              type="submit"
            >
              Search
            </Button>
          </form>
          <br />
          {logData.map((weatherEntry, index) => (
            <p className="list-item" key={index}>
              {weatherEntry.location} | {weatherEntry.date} |{" "}
              {weatherEntry.temprature} (st C) | searched:{" "}
              {weatherEntry.searchedTime} times(s)
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
