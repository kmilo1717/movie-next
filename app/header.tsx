import Image from "next/image";
const Header = () => {
    return (
        <div className="flex bg-black justify-between items-center px-7 py-5">
            <div className="flex gap-4">
                <Image src="/logo.png" alt="Vercel Logo" width={100} height={24} className="ml-6"/>
                <a href="#popular" className="text-white px-4">Popular</a>
                <a href="" className="text-white px-4">Favorites</a>
            </div>
            <div className="flex">
                <Image src="/login.svg" alt="Vercel Logo" width={30} height={24} priority/>
            </div>
        </div>
    )
};

export default Header;