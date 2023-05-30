import "./App.css";
import { StarRating } from "./components/StarRating";

function App() {
  return (
    <div className="box">
      <div className="card">
        <div className="title">
          How many stars would you give to our Online Code Editor?
        </div>
        <div className="rating-popup">
          <StarRating />
        </div>
        
      </div>
    </div>
  );
}

export default App;
