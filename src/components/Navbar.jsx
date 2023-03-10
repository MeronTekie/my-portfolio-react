import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="fixed w-full  h-[100px] flex justify-between items-center md:px-4  lg:px-20 px-4 bg-[#170b23f8]">
			<div className="z-10 text-lime-700 font-thin sm:text-[40px] text-[30px]  cursor-pointer">
				Meron Tekie
			</div>
			<div>
				<ul className=" hidden md:flex justify-between">
					<li>Home</li>
					<li>About</li>
					<li>Skills</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</div>
			{/*  Menu Icon */}
			<div
				onClick={() => setToggle(!toggle)}
				className="flex md:hidden text-3xl z-10 "
			>
				{toggle ? <IoMdClose /> : <FaBars />}
			</div>

			{/* Mobile Menu */}
			{toggle && (
				<div className="flex absolute  left-0 text-3xl top-0 text-slate-400 w-full h-screen bg-black md:hidden flex-col justify-center items-center">
					<ul>
						<li className="py-6">Home</li>
						<li className="py-6">About</li>
						<li className="py-6">Skills</li>
						<li className="py-6">Projects</li>
						<li className="py-6">Contact</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Navbar;
