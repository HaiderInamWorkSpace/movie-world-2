import Thumbnail from "./Thumbnail";

function Results({results}){

    
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
        3xl:flex flex-wrap justify-center">
            {results.map(result => {
                return <Thumbnail key={result.id} result={result} />
            })}
        </div>
    );
}
export default Results;

// ***************************************DO NOT TOUCH*****************************************

// import { useState } from "react";
// import Review from "./Review";
// import Thumbnail from "./Thumbnail";

// function Results({results}){

//     const [testing, passResult] = useState({});
//     const [isClicked, setClick] = useState(false);
//     function handleClick(test){
//         console.log("trial");
//         passResult(test);
//         setClick((prevValue) => {
//             return (!prevValue);
//         });
//     };

//     return (
//         <div>
//             <div className="px-5 my-10 sm:grid 3xl:flex flex-wrap justify-center" >{isClicked && <Review result={testing} />}</div>
//             <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
//             3xl:flex flex-wrap justify-center">
//                 {results.map(result => {
//                     return (
//                         <div onClick={() => {return (handleClick(result))}}>
//                         <Thumbnail key={result.id} result={result} />
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     );

// }
// export default Results;