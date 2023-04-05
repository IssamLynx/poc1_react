import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      params: {
        page: "1",
        size: "30",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://anime-db.p.rapidapi.com/anime?page=1&size=30",
          options
        );
        setData(response.data.data);
        setInitialData(response.data.data);
        setIsLoading(true);
        console.log(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading === false ? (
        <div>
          <p>En cours de chargements...</p>
        </div>
      ) : (
        <div>
          <SearchBar initialData={initialData} setData={setData} />
          <div class=" my-6 box-border flex flex-wrap justify-around py-1">
            {data?.length > 0 ? (
              <>
                {" "}
                {data.map((anime, index) => {
                  return (
                    <div key={index} class="my-10">
                      <Card anime={anime} />
                    </div>
                  );
                })}
              </>
            ) : (
              <p>Not Found</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
