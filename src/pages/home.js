import { useState, useEffect } from "react";
import BarChart from "../components/barchart";

const Home = () => {
  const [plotData, setPlotData] = useState({ year: [], count: [] });
  useEffect(
    () => {
      async function getAwardData() {
        let request = await fetch(
          "https://data-imdb1.p.rapidapi.com/actor/id/nm0000199/awards/?page_size=22",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
              "x-rapidapi-key":
                "0411d86825mshc6f8d0b7311f1cdp139c7fjsn7bd43fe1eddc",
            },
          }
        ).catch((err) => {
          console.error(err);
        });
        if (request) {
          let response = await request.json();
          let awards = response.results.sort((a, b) => {
            return a.year - b.year;
          });
          let awardMap = new Map();

          awards.forEach((award) => {
            if (awardMap.has(award.year)) {
              awardMap.set(award.year, awardMap.get(award.year) + 1);
            } else {
              awardMap.set(award.year, 1);
            }
          });

          let yearArray = [];
          let countArray = [];

          awardMap.forEach((value, key) => {
            yearArray.push(key);
            countArray.push(value);
          });

          console.log(yearArray, countArray);
          setPlotData({ year: yearArray, count: countArray });
        }
      }

      getAwardData();
    },
    // eslint-disable-next-line
    []
  );
  return (
    <>
      <BarChart year={plotData.year} count={plotData.count} />
    </>
  );
};
export default Home;
