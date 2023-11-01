import React from "react";
import Gaebolg from "../../Assets/spear.png"
import Icon from "../../Assets/icon.png"

function Header() {
    return (
    <div className="flex relative bg-zinc-700 h-16">
        <img src={Gaebolg} alt="Lance" className="h-8 pl-2 mt-4"/>
        <div>
            <h2 className="font-bree py-4 pl-3 text-2xl text-indigo-300">
                Gae Bolgames
            </h2>
        </div>
        <div className="pt-5 pl-80">
            <a href="#" className="pl-10 text-indigo-50 font-bold">Games</a>
            <a href="#" className="pl-10 text-indigo-50 font-bold">Genre</a>
        </div>
        <div className="pl-96">
            <img src={Icon} alt="Icon" className="h-8 pl-2 mt-4"/>
        </div>
    </div>
    );
}

export default Header;