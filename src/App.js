import logo from './logo.svg';
import './App.css';
import CarouselPage from './Components/Carousel/CarouselPage';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Card from './Components/Card/Card';
import Destination from './Components/Destination/Destination';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CarouselPage/>
      <About/>
      <Destination/>
    </div>
  );
}

export default App;
