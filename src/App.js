import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import "./index.css";

function App() {
	return (
		<div className="bg-black w-full right-0">
			<Navbar />
			<Hero />
      <Skills/>
		</div>
	);
}

export default App;
