import { useState } from "react";
import { PiCodesandboxLogoLight } from "react-icons/pi";



export default function Companion() {

    const [hpBar , Sethpbar] = useState(0);
    console.log(hpBar)

    return (
        <div className="flex items-center flex-col w-full">
        <div className={"h-60 bg-black"} style={{width: hpBar,}} id="Dave"></div>

                  <div className="border-t-2 w-full pl-2 pr-2 pb-2 pt-2">
                <span className="text-5xl cursor-pointer" onClick={() => {
                    let sum = hpBar + 10;
                    Sethpbar(sum);
                }}><PiCodesandboxLogoLight /></span>
            </div>
        </div>
     
    );
}