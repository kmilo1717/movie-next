import { CiPlay1 } from "react-icons/ci";
import Image from "next/image"
import { tags } from "@data/dataMovies";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Banner = () => {
    return (
        <div className="mx-auto relative shadow">
            <div>
                <img className="w-full max-h-[600px] linear-gradient-black" src={"https://s3-alpha-sig.figma.com/img/8e49/aae5/43c2c534094f436980ab54da92202ff7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EVM98R1224Q~C~-5t1HASpkJk8gLfuzktviUOBdEtSZH996ZQeJp~7zpmA6QRw3dUQaWsKc6UuRsNKLTi7lOv78-nNtzZZ0ldbYq426BbrHeBHDYJpERLhESjmCi4GzFtrNYncYrBxXR28aNNJiBDhnUZPcEtXyMwEYpWArgFj1HPxesROIMgKMUWYQhjlvJHzzogXwcHaaCszXEmWuH0k8KaZF6XlHNtWG0oS5xA8OO1mKkt~qnmwdHGvNECgnLIKhltdtWawBKk7Jfwhxbv10ej9a383oXHeozl~HXPyX91Blz8xXNuNJ-9XoDRZXo49ppWNKfA7ue7lZnfVXltQ__"} alt="Banner Image" />
            </div>
            <div className="py-5 absolute w-full top-0">
                <div className="w-full px-4">
                    <button className="text-white" onClick={() => window.history.back()}>
                        <MdOutlineKeyboardArrowLeft size={30} />
                    </button>
                </div>
                <div className="flex py-5">
                    <div className="h-full flex-[3] flex flex-col items-center">
                        <div className="w-[300px]">
                            <img
                                className="w-full h-auto"
                                src="https://s3-alpha-sig.figma.com/img/55b1/c933/8513b4ff2febf1da86e530f0788a647c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZBF4vLxvVMu~PO30nAuTb2jT1HP4jMB4TLuXUi3qnm1cGA8ktHiF0-GLwhz6BkkdDLOzWEzbdCXCGsq1GEQTRapmGYUM8Ibd-jNBL2Yl-FPUd21usIWxGzifqZApt59tjK~dQk9et45DjsH2SHi0NxHr8HkhMbvzI4djDIxDeHFuB4jTfTROjSx~fWehcbQPAJwdvP3J0~cSTBrjmCiCBkIaP7fs-GpXFcL3Hyy4oKxWuySSMjGYssKoACWPzkTkyBC2pMDpgYettQUtyBQPhk2l1S4fPkqHtRGH-27Hpv2CYroUipR4hjXv5Px8aTP47b1MqBAy58jENVziPCEkkw__"
                                alt="Banner Image"
                            />
                            <button className="w-full bg-yellow-500 text-black font-bold py-3 mt-4 rounded-md flex items-center justify-center space-x-2">
                                <span>Official Trailer</span>
                                <CiPlay1 />
                            </button>
                        </div>
                    </div>

                    <div className="flex-[7] px-12 py-3 text-white">
                        <div className="w-1/2">
                            <h1 className="text-3xl font-bold">Top Gun Maverick (2022)</h1>
                            <div className="flex justify-between">
                                <p>January 17, 2022.</p>
                                <p>2h 10min.</p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mt-8">Overview:</h2>
                        <p className="mt-8">
                            "Top Gun: Maverick" is a high-octane action drama that serves as a sequel to the iconic 1986 film "Top Gun." Directed by Joseph Kosinski, the movie follows Captain Pete "Maverick" Mitchell, played by Tom Cruise, who has spent over thirty years as a naval aviator, dodging promotions that would ground him. When he is assigned to train a new generation of Top Gun graduates for a specialized mission, he confronts his past and the ghosts of his fallen friends.
                        </p>
                        <div className="flex justify-between mt-8 items-center">
                            <div className="flex items-center">
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
                                <div className="ml-4 font-bold">
                                    <p>User</p>
                                    <p>Score</p>
                                </div>
                            </div>
                            <div>
                                <Image src={"/heart.svg"} alt="Heart" width={30} height={30} className="mr-4"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 mt-3">
                                {tags.map((tag) => (
                                    <div key={tag.name} className="border border-yellow-500 text-yellow-500 font-bold py-3 px-4 rounded-md">
                                        {tag.name}
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner