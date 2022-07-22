import cat from './imgs/picasso_cat.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class = "imagewrap">
        <img src = {cat} alt = "a weird cat" />
      </div>

      <div class = "text">
        <h1 class="header">
          Nolan Brown
        </h1>
        <p1 class = "subtitle">
          God's Perfect Coder
        </p1>
      </div>
    </div>
  );
}

export default App;
