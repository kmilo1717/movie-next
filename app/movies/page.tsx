'use client';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useRef } from "react";
import Image from "next/image";
import Banner from "./banner";
import Sidebar from "@app/sidebar";
import Card from "./card";
import Signup from "./signup";
import { Popular, NowPaying, Upcoming, TopRated } from "./dataMovies";

interface MovieData {
  id: number;
  title: string;
  imageUrl: string;
  date: string;
  rating: number;
  isFavorite: boolean;
}

export default function Home() {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

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
  return (
    <div className="w-full">
      <Banner />
      <div className="flex">
        <Sidebar />
        <div className="content-movies bg-[#454545] pl-5">
          <div className="popular" id="popular">
            <h2 className="text-3xl font-bold my-4">Popular</h2>
            <div className="relative flex gap-5 w-full overflow-x-hidden">
              <button
                className="absolute left-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollLeft(0)}
              >
                <MdOutlineKeyboardArrowLeft size={30} color="black" />
              </button>
              <div
                ref={(containerRef) => (containerRefs.current[0] = containerRef)}
                className="flex gap-5 overflow-x-hidden scroll-smooth w-full"
              >
                {Popular.map((movie) => (
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
          <div className="now-paying">
            <h2 className="text-3xl font-bold my-4">Now Paying</h2>
            <div className="relative flex gap-5 w-full overflow-x-hidden">
              <button
                className="absolute left-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollLeft(1)}
              >
                <MdOutlineKeyboardArrowLeft size={30} color="black" />
              </button>
              <div
                ref={(containerRef) => (containerRefs.current[1] = containerRef)}
                className="flex gap-5 overflow-x-hidden scroll-smooth w-full"
              >
                {NowPaying.map((movie) => (
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
          <div className="upcoming">
            <h2 className="text-3xl font-bold my-4">Now Paying</h2>
            <div className="relative flex gap-5 w-full overflow-x-hidden">
              <button
                className="absolute left-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollLeft(2)}
              >
                <MdOutlineKeyboardArrowLeft size={30} color="black" />
              </button>
              <div
                ref={(containerRef) => (containerRefs.current[2] = containerRef)}
                className="flex gap-5 overflow-x-hidden scroll-smooth w-full"
              >
                {Upcoming.map((movie) => (
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
          <div className="top">
            <h2 className="text-3xl font-bold my-4">Top Rated</h2>
            <div className="relative flex gap-5 w-full overflow-x-hidden">
              <button
                className="absolute left-0 h-full z-10 hover:bg-gray-500 hover:opacity-50 w-10 flex items-center justify-center"
                onClick={() => scrollLeft(3)}
              >
                <MdOutlineKeyboardArrowLeft size={30} color="black" />
              </button>
              <div
                ref={(containerRef) => (containerRefs.current[3] = containerRef)}
                className="flex gap-5 overflow-x-hidden scroll-smooth w-full"
              >
                {TopRated.map((movie) => (
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
