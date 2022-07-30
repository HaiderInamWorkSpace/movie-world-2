import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";


function Review({result}){

    console.log(result);

    const BASE_URL = "https://image.tmdb.org/t/p/w1280/";

    return (
        <div className="p-2 bg-sky-500/100  group shadow rounded cursor-pointer transition ease-in transform ">
             <div className="w-full h-full">
             <Image
                layout="responsive"
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}`|| `${BASE_URL}${result.poster_path}`}
                height={1080} 
                width={1920}
            />
             </div>
            <div className="p-2">
                <p className="truncate max-w-lg">{result.overview}</p>

                <h2 className="mt-1 text-2xl text-white 
                transition-all duration-100 ease-in-out group-hover:font-bold">
                {result.title || result.original_name}
                </h2>

                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type} •`}{" "}
                    {result.release_date || result.first_air_date} •{" "}
                    <ThumbUpIcon className="h-5 mx-2" />{result.vote_count}
                    --{result.vote_average}
                </p>
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={3}
                />
            </div>
        </div>
    );
}
export default Review;