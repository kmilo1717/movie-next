import Image from "next/image"

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
const Banner = () => {
    return (
        <div className="mx-auto relative shadow flex-1">
            <div >
                <img src={"/kungfubg.png"} alt="Banner Image" width={1920} height={500} className="linear-gradient-black" />
            </div>
            <div className="flex justify-between items-center px-7 py-5 absolute w-full bottom-0">
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold text-white">Kung Fu Panda 4</h2>
                    <p className="text-white">Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨</p>
                </div>
                <div className="flex row-reverse">
                    <Image src={"/heart.svg"} alt="Heart" width={30} height={30} className="mr-4" />
                    <div className="relative">
                        <svg viewBox="0 0 36 36" className="w-20 transform ">
                            <path
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke={hexToRgba(getStrikeColor(97), 0.5)}
                                strokeWidth="2.5"
                                strokeDasharray={`100, 100`}
                            />
                            <path
                                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke={getStrikeColor(97)}
                                strokeWidth="2.5"
                                strokeDasharray={`${97}, 100`}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">{97}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner