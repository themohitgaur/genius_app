import Navbar from './shared/navbar';
import './App.css';
import Footer from './shared/footer';
import Search from './components/search';
import Footers from './shared/footer';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Search/>
        <Footers/>
        
    </div>
  );
}

export default App;
