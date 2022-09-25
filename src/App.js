
import './App.css';
import Hero from './components/Hero';
import MoviList from './components/MoviList';
import Nav from './components/NavBar.js';

function App() {
  return (
    <>

    <div className="bg-slate-800 min-h-screen text-slate-300">
    
    <div className="container mx-auto">
   <Nav />
   <Hero />
   <MoviList title="Top Tated 🔥" filter="sort_by-rating"/>
   <MoviList title="Drama 🔫" filter="genres-Drama"/>
</div>
</div>
</>

  );
}

export default App;
