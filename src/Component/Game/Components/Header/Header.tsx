import { GiHamburgerMenu } from "react-icons/gi";
import { GiCube } from "react-icons/gi";

export default function Header() {

    return (
        <div className="w-full flex items-center justify-between pl-2 pt-4 pr-2 border-b-2 pb-4">
            <span className="cursor-pointer text-3xl"><GiHamburgerMenu /></span>

            <span className="cursor-pointer text-3xl"><GiCube /></span>
        </div>
    );
}