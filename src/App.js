
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
//Testing testing
function App() {

  return (
    <main className="App">
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;