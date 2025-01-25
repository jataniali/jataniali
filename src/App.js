import './App.css';
import About from './components/about/About';
import Numbers from './components/about/Numbers';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/serivices/Services';
import Title from './components/title/Title';

function App() {
  return (
<div className="App">
<Navbar/> 
<Home/>
<About/>
<Portfolio/>
<Services/>
<Contact/>
</div>
  );
}

export default App;
