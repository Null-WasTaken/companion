import Header from "./Components/Header/Header";
import Companion from "./Components/Companion/Companion";
import { useEffect , useState } from "react";
import { PiCodesandboxLogoLight } from "react-icons/pi";


export default function Game() {

    const [hpBar , Sethpbar] = useState(100);

    return (
        <div className="w-full flex flex-col justify-between">
            <Header />
            <div className="flex items-center flex-col w-full ">
            <Companion props={{hp : {hpBar}}} />
            <div className="border-t-2 w-full pl-2 pr-2 pb-2 pt-2">
                <span className="text-5xl cursor-pointer" onClick={() => {
                    let sum = hpBar + 10;
                    Sethpbar(sum)
                }}><PiCodesandboxLogoLight /></span>
            </div>
            </div>
        </div>
    );

}