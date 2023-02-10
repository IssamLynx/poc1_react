import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const options = {
    method: "GET",
    params: {
      page: "1",
      size: "30",
    },
    headers: {
      "X-RapidAPI-Key": "7143b32c4bmshf27bf859b5ab0a3p1b8e7fjsnb504c13fe516",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://anime-db.p.rapidapi.com/anime?page=1&size=4",
          options
        );
        setData(response.data.data);
        console.log(response.data);
        setIsLoading(true);
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
        <div class=" box-border flex flex-wrap justify-around py-1">
          {data?.map((el, index) => {
            return (
              <div
                key={index}
                class="w-[200px] h-[270px] my-1 "
                onClick={() => navigate(`/details/${el._id}`)}
              >
                <img
                  src={el.image}
                  alt="poster"
                  class="w-full h-full object-cover"
                />
                <p> {el.title}</p>
                <p>{el.Type}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
