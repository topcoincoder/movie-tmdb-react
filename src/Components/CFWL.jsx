import React from "react";
import { useContext } from "react";
import GlobalState from "../Context/globalState";
import { MdStarRate } from "react-icons/md"
import ParticlesBg from "particles-bg";



const CFWL = ({ props }) => {
  const { value2, value3, value4 } = useContext(GlobalState);
  const [favourites, setFavourites] = value2;
  const [watchlist, setWatchlist] = value3;
  const [completed, setCompleted] = value4;

  function checkBox1(e, movie) {
    const checked = e.target.checked && !favourites.includes(movie);
    checked ? (movie.fav = true) : (movie.fav = false);
    checked
      ? setFavourites([...favourites, movie])
      : setFavourites(favourites.filter((fav) => fav.id !== movie.id));
  }

  function checkBox2(e, movie) {
    const checked = e.target.checked && !watchlist.includes(movie);
    checked ? (movie.watchLater = true) : (movie.watchLater = false);
    checked
      ? setWatchlist([...watchlist, movie])
      : setWatchlist(watchlist.filter((watch) => watch.id !== movie.id));
  }

  function checkBox3(e, movie) {
    const checked = e.target.checked && !completed.includes(movie);
    checked ? (movie.completed = true) : (movie.completed = false);
    checked
      ? setCompleted([...completed, movie])
      : setCompleted(completed.filter((complete) => complete.id !== movie.id));
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:px-20 md:px-60 lg:px-80 md:gap-x-8 lg:gap-x-20 sm:gap-y-4 lg:gap-y-4">
      <ParticlesBg  type="cobweb" bg={true}/>
      {props.map((t, idx) => {
        return (
          <div
            className="border-solid border-8 rounded-2xl sm:mt-4 lg:mt-8 flex flex-col justify-center items-center"
            key={idx}
          >
            <div className="title">{t.title}</div>
            <div className="sm:40 md:w-44 lg:w-52 sm:h-60 md:h-68 lg:h-72 flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="sm:h-44 md:h-60 lg:h-72 sm:w-36 md:w-44 lg:w-52"
                    src={"http://image.tmdb.org/t/p/w780/" + t.poster_path}
                    alt="Not Found"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://image.shutterstock.com/image-illustration/leather-background-jpeg-version-260nw-101031550.jpg";
                    }}
                  />
                </div>
                <div className="flip-card-back px-4">
                  <div className="text-red-700 text-2xl font-bold">
                    {t.release_date}
                  </div>
                  {t.overview}
                </div>
              </div>
            </div>

            <div className="rating">
              <div className="heart mx-4">
                <input
                  type="checkbox"
                  className="heart__checkbox"
                  checked={t.fav ? true : false}
                  onClick={(e) => checkBox1(e, t)}
                  readOnly={true}
                />
                <div className="heart__icon"></div>
              </div>

              <div className="text-white font-bold ml-8">
                 {t.vote_average}
              </div>
              <div className="mr-8">
                <MdStarRate  color="yellow" size={24} />
              </div>


            </div>

            <div className="text-white flex flex-col justify-center align-center">
              <div className="flex m-1">
                <input
                  type="checkbox"
                  checked={t.watchLater ? true : false}
                  onChange={(e) => checkBox2(e, t)}
                  readOnly={true}
                />
                <label className="font-medium text-xl px-2">Watch Later</label>
              </div>

              <div className="flex m-2">
                <input
                  type="checkbox"
                  checked={t.completed ? true : false}
                  onChange={(e) => checkBox3(e, t)}
                  readOnly={true}
                />
                <label className="font-medium text-xl px-2">Completed</label>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CFWL;
