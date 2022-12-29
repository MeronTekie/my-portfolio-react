import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import "./index.css";

function App() {
	return (
		<div className="bg-[#170b23f8] w-full right-0">
			<Navbar />
			<Hero />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;
