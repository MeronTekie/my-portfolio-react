import React from "react";
import Image from "../assets/Meron.png";
import Typed from "react-typed";

const Hero = () => {
	return (
		<div
			name="home"
			className="py-32  w-full bg-[#170b23f8]  items-center pb-24 "
		>
			<div className="w-full grid grid-flow-row  lg:grid-flow-col  items-center   justify-center bg-[#170b23f8] ">
				<div className="mx-auto  items-center lg:pt-20 pl-32 justify-center mt-20 ">
					<img
						className="h-[300px] w-[220px] bg-slate-400 rounded-[50%] "
						src={Image}
						alt="icon"
					/>
					<h1>
						<Typed
							strings={[`Web-Developer`, "UI/UX  Designer", "MERN Developer"]}
							typeSpeed={60}
							backSpeed={80}
							loop
						>
							<input
								className="pt-8 text-4xl text-lime-700 bg-transparent  "
								type="text"
							/>
						</Typed>
					</h1>
				</div>
				<div className="mt-32 mx-auto   lg:border-l-2 border-lime-700 p-12 pr-32">
					<h1 className="text-5xl mb-8"> Hey Guys, </h1>
					<h1 className="text-4xl mb-6"> Let me introduce myself,</h1>
					<p className=" font-extralight text-xl mb-6 ">
						I am an experienced, reliable, and friendly customer service
						specialist, dedicated and highly motivated to work as a team or
						independently. I enjoy learning and always like to expand my
						knowledge. I am looking for ways to enhance and strengthen my skills
						in Web Development I learned at Epicodus from an operational level
						to an Enterprise-level discipline through a career path.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
