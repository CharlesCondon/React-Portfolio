import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './assets/components/Navbar/Navbar';
import Home from './assets/components/Home/Home';
import Projects from './assets/components/Projects/Projects';
import About from './assets/components/About/About';
import Contact from './assets/components/Contact/Contact';
//import Footer from './assets/components/Footer/Footer';
import { ReactP5Wrapper } from '@p5-wrapper/react';
import rainSketch from './assets/js/rainSketch';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
	return (
		<div className="App">
			<div className='sketchCont'>
				<ReactP5Wrapper sketch={rainSketch} />
			</div>
			<div className="AppContent">
				<Navbar/>
					<Routes>
						<Route index path='/' element={
								<Home/>
						}/>
						<Route path='/projects' element={
								<Projects/>
						} />
						<Route path='/about' element={
								<About/>
						} />
						<Route path='/contact' element={
								<Contact/>
						} />
					</Routes>
				{/* <Footer/> */}
			</div>
			<SpeedInsights />
		</div>
	);
}

export default App;
