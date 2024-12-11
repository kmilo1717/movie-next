'use client';
import { useRef, useState } from "react";
import Signup from "@components/signup";
import Header from "@components/header";
import BannerMovie from "@components/movie/moviebanner";
import Recomendation from "@/app/components/movie/recomendation";
import { recomendations } from "@data/dataMovies";


const Home = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="w-full">
      <Header setShowSignup={setShowSignup} showSignup={showSignup} />
      {showSignup && <Signup setShowSignup={setShowSignup} showSignup={showSignup} />}
      <BannerMovie />
      <div className="my-10 bg-[#454545] px-10 pb-5">
        <h2 className="text-xl font-bold my-4 text-white pt-5">Recomendations</h2>
        <div className="flex bg-[#454545] w-full">
          {recomendations.map((recomendation, index) => (
            <Recomendation
              name={recomendation.name}
              url={recomendation.url}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
