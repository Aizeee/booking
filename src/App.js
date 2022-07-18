 import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


import Home from "./pages/home/Home.js"
import Hotel from "./pages/hotel/Hotel.js"
import List from "./pages/list/List.js"

/// testing git push, see whether there is a commit for git push on 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Hotels" element={<List/>}/>
        <Route path="/Hotels/:id" element={<Hotel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
