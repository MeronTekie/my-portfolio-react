import React from "react";
import Image from "../assets/Meron.png";
import Typed from "react-typed";

const Hero = () => {
	return (
		<div name="home" className="h-screen w-full bg-[#070707] flex items-center">
			<div className="mr-1 ml-40 mx-auto">
				<img
					className="h-[350px] w-[300px] bg-[rgba(186,186,193,0.4)] border-none rounded-[50%]  hover:h-[370px] hover:w-[320px] border-gray-500 "
					src={Image}
					alt="icon"
				/>
				<h1>
					<Typed
						strings={[` Web-Developer `, "UI/UX  Designer", "MERN Developer"]}
						typeSpeed={60}
						backSpeed={80}
						loop
					>
						<input
							className=" text-4xl mt-8 ml-6 text-lime-700 bg-transparent"
							type="text"
						/>
					</Typed>
				</h1>
			</div>
			<div className=" mt-0  pl-24   border-l-8  border-lime-700 h-[400px]  w-full max-w-[600px] ">
				<h1 className="text-5xl mb-8"> Hey Guys, </h1>
				<h1 className="text-4xl mb-6"> Let me introduce  you myself,</h1>
				<h1 className=" font-light text-xl mb-6 ">
					I am an experienced, reliable, and friendly customer service
					specialist, dedicated and highly motivated to work as a team or
					independently. I enjoy learning and always like to expand my
					knowledge. I am looking for ways to enhance and strengthen my skills
					in Web Development I learned at Epicodus from an operational level to
					an Enterprise-level discipline through a career path.
				</h1>
			</div>
		</div>
	);
};

export default Hero;
