import Image from "next/image"
import Link from "next/link"

export default function SignUpPageBasic() {
  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col z-10 w-4/5 fixed left-1/2 transform -translate-x-1/2 top-[10%]">
      <div className="container mx-auto px-4 py-6 flex-grow">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white hover:text-gray-300">
            ← Back
          </Link>
          <div className="space-x-4">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
              Sign up
            </button>
            <button className="border border-white/20 text-white px-4 py-2 rounded hover:bg-white/10">
              Log in
            </button>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-6 max-w-lg">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome to Quickbet Movies!</h1>
              <p className="text-gray-400">
                Ready to unlock a universe of cinematic delights? Sign up now and
                start your journey with us!
              </p>
            </div>

            <div className="space-y-4">
              <input
                className="w-full bg-white/5 border border-white/10 text-white p-2 rounded"
                placeholder="Register with your Email"
                type="email"
              />
              <p className="text-sm text-gray-400">
                For any questions, reach out to{" "}
                <a
                  href="mailto:support@quickbetmovies.com"
                  className="text-yellow-500 hover:underline"
                >
                  support@quickbetmovies.com
                </a>
              </p>
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="3D character illustration"
              width={400}
              height={400}
              className="max-w-[400px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

