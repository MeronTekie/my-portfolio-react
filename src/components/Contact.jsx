import React from "react";

const Contact = () => {
	return (
		<div name="contact" className="w-full h-full items-center bg-[#170b23f8] ">
			<div className="max-w-[1020px]  mx-auto items-center mt-12  justify-center">
				<div className="mx-auto text-center my-4">
					<h1 className="text-4xl text-lime-700">Contact </h1>
					<h2 className="text-3xl p-12">
						Help me widen my network and grow in the industry
					</h2>
				</div>
				<form method="POST" action='https://getform.io/f/c85898e8-d68b-44cf-b7f6-dcd8dbf26256'>
					<div className="flex flex-col  items-center gap-8 mx-12 my-12 p-12">
						<input
							className="w-[300px] p-2 rounded-md  bg-slate-700"
							type="text"
							placeholder="Full Name"
							name="name"
						/>
						<input
							className="w-[300px] p-2 rounded-md bg-slate-700"
							type="email"
							placeholder="Email"
							name="email"
						/>
						<textarea
							className="w-[300px] h-[250px] rounded-md p-2 bg-slate-700"
							type="text"
							placeholder="Compose"
							name="compose"
						/>
						<button className=" text-xl rounded-lg bg-lime-800 text-black mt-4 w-[180px] hove hover:text-lime-800">
							Let's Connect
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
