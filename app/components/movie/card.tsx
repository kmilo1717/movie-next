import { FaHeart } from "react-icons/fa";
import { useRouter } from 'next/navigation'

interface MovieCardProps {
    title: string;
    imageUrl: string;
    date: string;
    rating: number;
    isFavorite: boolean;
}

const getStrikeColor = (rating: number) => {
    if (rating <= 40) {
        return "#E54545";
    } else if (rating <= 50) {
        return "#FF8800";
    } else {
        return "#4DA14F";
    }
};

const hexToRgba = (hex: string, alpha = 1) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
  

export default function MovieCard({ title, imageUrl, date, rating, isFavorite }: MovieCardProps) {
    const router = useRouter();
    return (
        <div className="min-w-64 h-auto bg-zinc-900 text-white rounded-lg shadow-lg mx-1 overflow-hidden whitespace-nowrap cursor-pointer" data-title={title} id="movie-card" onClick={() => router.push(`/movies/${title}`)}>
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
                                stroke={hexToRgba(getStrikeColor(rating), 0.5)}
                                strokeWidth="2.5"
                                strokeDasharray={`100, 100`}
                            />
                            <path
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke={getStrikeColor(rating)}
                                strokeWidth="2.5"
                                strokeDasharray={`${rating}, 100`}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">{rating}%</span>
                    </div>

                </div>
                <button className="text-zinc-400 hover:text-white focus:outline-none flex items-center gap-2 flex-col">
                    <span className="text-sm text-zinc-400">Favorites</span>
                    <FaHeart size={30} color={isFavorite ? "red" : "white"} />
                </button>
            </div>
        </div>
    )
}
