import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Experts from './components/Experts';
import NewsLatter from './components/NewsLatter';
import Courses from './components/Courses';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">      
     <Navbar/>
     <Banner/>
     <Experts/>
     <NewsLatter/>
     <Courses/>
     <Footer/>
    </div>
  );
}

export default App;
