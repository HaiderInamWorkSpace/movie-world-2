import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, TrendingUpIcon, UserIcon } from '@heroicons/react/outline'

function Header(){
    return (
        <header className="flex flex-col m-5 sm:flex-row justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl ">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <h1 className="">MOVIE WORLD</h1>
        </header>
    );
}
export default Header;