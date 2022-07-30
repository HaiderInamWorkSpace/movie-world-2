import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, TrendingUpIcon, UserIcon } from '@heroicons/react/outline'

function Header(){
    return (
        // <header className="w-full max-w-[1240px] lg:flex flex-col mt-5 mb-5 sm:flex-row py-8 justify-between h-auto mx-auto">
        <header className="items-center justify-between lg:w-full mx-auto max-w-[1240px] xl:flex text-center pt-8 xl:pb-8">
            <div className="">
                <h1 className="font-bold text-xl lg:text-3xl text-center">MOVIE WORLD</h1>
            </div>
            {/* <div className="hidden sm:flex flex-grow justify-evenly py-8"> */}
            <div className="flex justify-evenly py-8 whitespace-nowrap overflow-x-scroll scrollbar-hide">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
        </header>
    );
}
export default Header;