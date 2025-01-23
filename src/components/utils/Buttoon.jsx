//component create with uppercase letter 
export default function Buttoon ({title , style}){
    console.log("props :", title);
    return(
        <>
        <button className={`bg-pink-400 text-white rounded-md p-2  ${style}`}>
            {title || "default"}
        </button>
        </>
    );
}
export function ButtoonRegister (){
    return(
        <>
        <button className="bg-red-600 text-white rounded-md p-2 ">Register
        </button>
        </>
    );
}