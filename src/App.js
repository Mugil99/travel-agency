import logo from './logo.svg';
import './App.css';
import CarouselPage from './Components/Carousel/CarouselPage';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Card from './Components/Card/Card';
import Destination from './Components/Destination/Destination';
import Review from './Components/Review/Review';
import ContactHeader from './Components/Contact/ContactHeader/ContactHeader';
import ContactBody from './Components/Contact/ContactBody/ContactBody';
import Blog from './Components/Blog/Blog';
import Process from './Components/Process/Process';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CarouselPage/>
      <About/>
      <Destination/>
      <Process/>
      <Blog/>
      <Review/>
      <ContactHeader/>
      <ContactBody/>
    </div>
  );
}

export default App;
