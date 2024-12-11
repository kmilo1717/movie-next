'use client';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRef, useState } from "react";
import Banner from "@components/movie/banner";
import Sidebar from "@components/sidebar";
import Card from "@components/movie/card";
import Signup from "@components/signup";
import Header from "@components/header";
import { Popular, NowPaying, Upcoming, TopRated } from "@data/dataMovies";

const Home : React.FC = () => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showSignup, setShowSignup] = useState(false);
  const [search , setSearch] = useState('');

  const scrollLeft = (index: number) => {
    const container = containerRefs.current[index];
    if (container) {
      container.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = (index: number) => {
    const container = containerRefs.current[index];
    if (container) {
      container.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const filteredSearchPopular = Popular.filter((searchFilter) =>
    searchFilter.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSearchNowPaying = NowPaying.filter((searchFilter) =>
    searchFilter.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSearchUpcoming = Upcoming.filter((searchFilter) =>
    searchFilter.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSearchTopRated = TopRated.filter((searchFilter) =>
    searchFilter.title.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="w-full">
      <Header setShowSignup={setShowSignup} showSignup={showSignup}/>
      {showSignup && <Signup setShowSignup={setShowSignup} showSignup={showSignup}/>}
      <Banner/>
      <div className="flex">
        <Sidebar search={search} setSearch={setSearch}/>
        <div className="content-movies bg-[#454545] pl-5">
          {filteredSearchPopular.length === 0 && filteredSearchNowPaying.length === 0 && filteredSearchUpcoming.length === 0 && filteredSearchTopRated.length === 0 ? <h2 className="text-2xl my-4 text-white">Sin resultados</h2> : ''}
          <div className={`popular ${filteredSearchPopular.length === 0 ? 'hidden' : ''}`} id="popular">
            <h2 className="text-3xl font-bold my-4 text-white">Popular</h2>
            <div className="relative flex gap-5 w-full overflow-x-hidden">
              <button
                className="absolute left-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollLeft(0)}
              >
                <MdOutlineKeyboardArrowLeft size={30} color="black" />
              </button>
              <div
                ref={(containerRef) => {containerRefs.current[0] = containerRef;}}
                className="flex gap-5 overflow-x-hidden scroll-smooth w-full"
              >
                {filteredSearchPopular.map((movie) => (
                  <Card
                    key={movie.id}
                    title={movie.title}
                    imageUrl={movie.imageUrl}
                    date={movie.date}
                    rating={movie.rating}
                    isFavorite={movie.isFavorite}
                  />
                ))}
              </div>
              <button
                className="absolute right-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollRight(0)}
              >
                <MdOutlineKeyboardArrowRight size={30} color="black" />
              </button>
            </div>
          </div>
          <div className={`now-paying ${filteredSearchNowPaying.length === 0 ? 'hidden' : ''}`} id="now-paying">
            <h2 className="text-3xl font-bold my-4 text-white">Now Paying</h2>
            <div className="relative flex gap-5 w-full overflow-x-hidden">
              <button
                className="absolute left-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollLeft(1)}
              >
                <MdOutlineKeyboardArrowLeft size={30} color="black" />
              </button>
              <div
                ref={(containerRef) => {containerRefs.current[1] = containerRef;}}
                className="flex gap-5 overflow-x-hidden scroll-smooth w-full"
              >
                {filteredSearchNowPaying.map((movie) => (
                  <Card
                    key={movie.id}
                    title={movie.title}
                    imageUrl={movie.imageUrl}
                    date={movie.date}
                    rating={movie.rating}
                    isFavorite={movie.isFavorite}
                  />
                ))}
              </div>
              <button
                className="absolute right-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollRight(1)}
              >
                <MdOutlineKeyboardArrowRight size={30} color="black" />
              </button>
            </div>
          </div>
          <div className={`upcoming ${filteredSearchUpcoming.length === 0 ? 'hidden' : ''}`} id="upcoming">
            <h2 className="text-3xl font-bold my-4 text-white">Now Paying</h2>
            <div className="relative flex gap-5 w-full overflow-x-hidden">
              <button
                className="absolute left-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollLeft(2)}
              >
                <MdOutlineKeyboardArrowLeft size={30} color="black" />
              </button>
              <div
                ref={(containerRef) => {containerRefs.current[2] = containerRef;}}
                className="flex gap-5 overflow-x-hidden scroll-smooth w-full"
              >
                {filteredSearchUpcoming.map((movie) => (
                  <Card
                    key={movie.id}
                    title={movie.title}
                    imageUrl={movie.imageUrl}
                    date={movie.date}
                    rating={movie.rating}
                    isFavorite={movie.isFavorite}
                  />
                ))}
              </div>
              <button
                className="absolute right-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollRight(2)}
              >
                <MdOutlineKeyboardArrowRight size={30} color="black" />
              </button>
            </div>
          </div>
          <div className={`top-rated ${filteredSearchTopRated.length === 0 ? 'hidden' : ''}`} id="top-rated">
            <h2 className="text-3xl font-bold my-4 text-white">Top Rated</h2>
            <div className="relative flex gap-5 w-full overflow-x-hidden">
              <button
                className="absolute left-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollLeft(3)}
              >
                <MdOutlineKeyboardArrowLeft size={30} color="black" />
              </button>
              <div
                ref={(containerRef) => {containerRefs.current[3] = containerRef;}}
                className="flex gap-5 overflow-x-hidden scroll-smooth w-full"
              >
                {filteredSearchTopRated.map((movie) => (
                  <Card
                    key={movie.id}
                    title={movie.title}
                    imageUrl={movie.imageUrl}
                    date={movie.date}
                    rating={movie.rating}
                    isFavorite={movie.isFavorite}
                  />
                ))}
              </div>
              <button
                className="absolute right-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollRight(3)}
              >
                <MdOutlineKeyboardArrowRight size={30} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
