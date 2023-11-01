import React from "react";
import Gaebolg from "../../Assets/spear.png"

function Header() {
    return (
        <div className="bg-zinc-700 h-16 flex">
            <h2 className="font-bree py-4 pl-14 text-2xl text-indigo-300">
                Gae Bolgames
            </h2>
            <img src={Gaebolg} alt="Lance" className="h-8 pl-2 mt-4"/>
        </div>
    );
}

export default Header;