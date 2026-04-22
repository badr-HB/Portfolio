"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
let triggred = true;

export default function HOME() {
    const githubURL = `https://github.com/badr-HB`;
    const [style, setStyle] = useState('-top-200')
    const trigger = () => {
        if (triggred) {
            setStyle('top-23')
            triggred = false
        }
        else {
            setStyle('-top-200')
            triggred = true
        }
    }
    
    return (
        <div>
            <FaBars className="w-5 h-5 block lg:hidden" onClick={trigger} />
            <div className={`w-full absolute ${style} left-0 duration-600 ease-in-out`} id="">
                <div className="w-9/10 space-y-4 py-9 px-5 place-self-center rounded-2xl bg-gray-600">
                    <ul className="font-syne text-[13px] font-semibold space-y-3">
                        <li id="text" className=""><a href="#about">ABOUT</a></li>
                        <li id="text"><a href="#education">EDUCATION</a></li>
                        <li id="text"><a href="#skills">SKILLS</a></li>
                        <li id="text"><a href="#contact">CONTACT</a></li>
                    </ul>
                    <div className="font-poppins  border w-fit h-fit p-2 px-9 rounded-3xl duration-300 ease-in hover:bg-blue-700 cursor-pointer hover:border-transparent ">
                        <Link className="cursor-pointer" href={`${githubURL}`} target="_blank">Github</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}