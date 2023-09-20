import logo from './logo.svg';
import './App.css';
import CarouselPage from './Components/Carousel/CarouselPage';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CarouselPage/>
      <About/>
    </div>
  );
}

export default App;
