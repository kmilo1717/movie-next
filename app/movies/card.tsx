import { FaHeart } from "react-icons/fa";

interface MovieCardProps {
    title: string;
    imageUrl: string;
    date: string;
    rating: number;
    isFavorite: boolean;
}

export default function MovieCard({ title, imageUrl, date, rating, isFavorite }: MovieCardProps) {
    return (
        <div className="min-w-64 h-auto bg-zinc-900 text-white rounded-lg shadow-lg mx-1 overflow-hidden whitespace-nowrap" data-title={title} id="movie-card">
            <div className="aspect-[4/3] relative min-h-[200px]">
                <img
                    src={imageUrl}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <h2 className="text-lg font-semibold p-4">{title}</h2>
            <p className="text-sm text-zinc-300 px-4">{date}</p>
            <div className="p-4 flex items-center justify-around">
                <div className="flex items-center gap-2 flex-col">
                    <span className="text-sm text-zinc-400">Rating</span>
                    <div className="relative w-10 flex items-center justify-center">
                        <svg viewBox="0 0 36 36" className="w-12 h-12 transform ">
                            <path
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#4ade80"
                                strokeWidth="2.5"
                                strokeDasharray={`${rating}, 100`}
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">{rating}%</span>
                    </div>

                </div>
                <button className="text-zinc-400 hover:text-white focus:outline-none flex items-center gap-2 flex-col">
                    <span className="text-sm text-zinc-400">Favorites</span>
                    <FaHeart size={30} color={isFavorite ? "red" : "white"}/>
                </button>
            </div>
        </div>
    )
}
