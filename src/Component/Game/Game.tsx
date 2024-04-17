import Header from "./Components/Header/Header";
import Companion from "./Components/Companion/Companion";



export default function Game() {

    return (
        <div className="w-full flex flex-col justify-between">
            <Header />
            <Companion/>
        </div>  
    );

}