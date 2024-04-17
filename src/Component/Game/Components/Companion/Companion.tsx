import { useState } from "react";
import { PiCodesandboxLogoLight } from "react-icons/pi";



export default function Companion() {

    const [hpBar , Sethpbar] = useState(100);

    return (
        <div className="flex items-center flex-col w-full">
        <div className="w-44 h-60 bg-black" id="Dave"></div>

                  <div className="border-t-2 w-full pl-2 pr-2 pb-2 pt-2">
                <span className="text-5xl cursor-pointer" onClick={() => {
                    let sum = hpBar + 10;
                    Sethpbar(sum);
                }}><PiCodesandboxLogoLight /></span>
            </div>
        </div>
     
    );
}