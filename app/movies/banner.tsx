import Image from "next/image"
const Banner = () => {
    return (
        <div className="mx-auto relative">
            <div >
                <img src={"/kungfubg.png"} alt="Banner Image" width={1920} height={500} className="linear-gradient-black"/>
            </div>
            <div className="flex justify-between items-center px-7 py-5 absolute w-full bottom-0">
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold text-white">Kung Fu Panda 4</h2>
                    <p className="text-white">Join Po and the Furious Five on a new epic adventure! Discover the power of friendship and the strength within! Get ready to unleash your inner warrior! 🥋✨</p>
                </div>
                <div className="flex row-reverse">
                    <Image src={"/heart.svg"} alt="Heart" width={30} height={30} className="mr-4"/>
                    <div className="progress-circle">
                        <svg width="100" height="100" viewBox="0 0 36 36" className="circular-chart">
                            <path
                                className="circle-bg"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                                className="circle"
                                strokeDasharray="90, 100"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="18" y="20.5" className="percentage">97%</text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner