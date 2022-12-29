import React from "react";

import Tailwind from "../assets/tailwind.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import HTML from "../assets/html.png";
import REACT from "../assets/react.png";
import Github from "../assets/github.png";
// import Node from "../assets/node.png";

const Skills = () => {
	return (
		<div name='skill' className="bg-[#170b23f8]  w-full items-center ">
			<div className="max-w-[1020px] mx-auto p-4 ">
				<h1 className=" text-center text-lime-700 text-4xl">Skills </h1>
			</div>
			<div className=" p-12  text-center text-3xl">
				<h1>Skills I posses as a developer</h1>
			</div>
			<div className=" grid md:grid-cols-4  grid-cols-2 content-center max-w-[800px] mx-auto gap-10 p-16 ">
				<div className="h-[100px] w-[100px]   hover:scale-110 duration-500 cursor-pointer rounded-xl">
					<img src={HTML} alt="tailwind" />
				</div>
				<div className="h-[100px] w-[100px]   hover:scale-110 duration-500 cursor-pointer rounded-xl">
					<img src={CSS} alt="tailwind" />
				</div>
				<div className="h-[100px] w-[100px]   hover:scale-110 duration-500 cursor-pointer rounded-xl">
					<img src={Javascript} alt="tailwind" />
				</div>
				<div className="h-[100px] w-[100px]   hover:scale-110 duration-500 cursor-pointer rounded-xl">
					<img src={REACT} alt="tailwind" />
				</div>
				<div className="h-[100px] w-[100px]   hover:scale-110 duration-500 cursor-pointer rounded-xl">
					<img src={Tailwind} alt="tailwind" />
				</div>
				<div className="h-[100px] w-[100px]  hover:scale-110 duration-500 cursor-pointer rounded-xl">
					<img src={Github} alt="tailwind" />
				</div>
				<div className="h-[100px] w-[100px]  hover:scale-110 duration-500 cursor-pointer rounded-xl">
					<img src={Github} alt="tailwind" />
				</div>
				<div className="h-[100px] w-[100px]  hover:scale-110 duration-500 cursor-pointer rounded-xl">
					<img src={Github} alt="tailwind" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
