'use client'
import { CiMail } from "react-icons/ci";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { useState } from "react";
import { Dispatch, SetStateAction } from 'react';

interface SignupProps {
  setShowSignup: Dispatch<SetStateAction<boolean>>;
  showSignup: boolean
}
const Signup: React.FC<SignupProps> = ({setShowSignup, showSignup}: SignupProps) => {
  const [signup, setSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="fixed text-white flex flex-col z-10 w-4/5 fixed left-1/2 transform -translate-x-1/2 top-[15%] z-50 rounded-lg backdrop-blur-md border border-white border-opacity-50">
      <div className="">
        <div className="flex p-2">
          <div className="flex-[6] px-[3%]">
            <div className="flex mt-6">
              <button className="flex items-center text-sm text-white/80 hover:text-white gap-2 justify-center" onClick={() => setShowSignup(showSignup? false : true)}>
                <TfiArrowCircleLeft /> Back
              </button>
            </div>
            <div className="flex items-center justify-center my-8">
              <div className="flex rounded-md bg-zinc-800">
                <button className={`px-6 py-2 rounded-md font-medium ${signup ? 'bg-yellow-500' : 'bg-zinc-800'}`} onClick={() => setSignup(true)}>
                  Sign up
                </button>
                <button className={`px-6 py-2 rounded-md font-medium ${!signup ? 'bg-yellow-500' : 'bg-zinc-800'}`} onClick={() => setSignup(false)}>
                  Log In
                </button>
              </div>
            </div>

            {signup ? (
              <button className="w-[80%] mx-auto mt-[20%] py-3 bg-yellow-500 rounded-md font-medium flex items-center justify-center gap-2 text-black">
                Register with your Email
                <CiMail />
              </button>
            ) :
              (
                <div className="flex items-center justify-center ">
                  <div className="w-full max-w-md p-8">
                    <h1 className="text-md text-white text-center mb-8">We love having you back</h1>
                    <form className="space-y-6">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="w-full px-4 py-3 bg-white rounded-tr-md rounded-tl-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          required
                        />
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          className="w-full px-4 py-3 bg-white rounded-tr-md rounded-tl-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
                        >
                          {showPassword ? '👁️' : '👁️‍🗨️'}
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-3 bg-yellow-500 rounded-md text-black font-semibold hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        Continue
                      </button>
                    </form>
                  </div>
                </div>
              )}

            <p className={`text-sm text-white/60 text-center ${signup ? 'mt-[8%]' : 'my-[3%]'}`}>
              For any questions, reach out to support@quickbetmovies.com
            </p>
          </div>

          <div className="relative flex-[4] text-center bg-[#1C1C1C] p-[3%] pb-0 rounded-tr-lg rounded-br-lg ">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">
                Welcome to Quickbet Movies!
              </h1>
              {signup ? (
                <p className="text-white/80">
                  🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!
                </p>
              ) : (
                <p className="text-white/80">
                  🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!
                </p>
              )}
            </div>
            <div className={`mx-auto overflow-hidden w-full ${signup ? 'max-h-[300px]' : 'max-h-[350px]'}`}>
              {signup ? (
                <img
                  src="https://s3-alpha-sig.figma.com/img/5c26/b981/4c0b45e969bbf9b58cdd95cbd1f07ae4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=COcys-gMewB1C4Pgy99ra6COgYD8egwhxXSYoz80-dGZsA0WcPK3guvXnRCMXFG8NgVuPdRpa6S4aeObyQCHm1zJMNrB8UT54PmijOHL7xhZ1WatSY3XrC~v6EcKo8jVUqZXUtsP9O6PJMwi~~ILF6xUBy~RMRWKKU9GEG6h16BFeytaEEXScAAdEPyuliwu9cbJeSptEF0fckaAhowQ9E-rDL0xw2lg0iZQbIDrpICzDtbA6FIARZOl3RoDSIkK4iiyiXFrspV-PdCF-Jr2qXauK-UEZmQMN07iPnwO2syq7r0juX0w-h0mYSgiDLRvKARvy72CB~lvAZ9mzJ1J-Q__"
                  alt="3D character illustration"
                  className="object-cover scale-[1.5] object-top mt-12"
                />)
                : (
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c97d/26f3/ad07dfc2b9e35e3ca519775141b48f7b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JiDLOV6kEXXORB~cjufhJbQBeyeRKnxQPI9sySAG2Xv~YP2dfsn~7T5sOqleOb4ubUYFtCCp~s~cvuf~hrJgj9x8lJgcvgwFsOUR5TgSRQLM6MVQtfnJn7aibJhhmQX2uByFToqFhHp9GY3BPL4w626fecCB0zTS3xv-EPO5LP7DNmuvuiIVhggV0kZCOc7V8LZCwhOX4P1rilGxqkArNA-qEKrzBjqchRP7g1wvrrqWTfZBw507WwIougOPJAsuIrMp1V~FBYaKrNi-KsN-fdDkHPjvudCRsmT2V~f1e6uabj0Q1qVud~q6Kuwgq8zwRlRw-oqRg5c08tZW9wwC5A__"
                    alt="3D character illustration"
                    className="scale-[2.3] mt-[40%]"
                  />)}
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

