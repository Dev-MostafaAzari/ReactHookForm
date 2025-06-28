import FormValidation from "./components/Register";
import {BrowserRouter,Route,Router} from "react-router-dom"


function App() {
  <BrowserRouter>
  return (
    <div className="App">
      <Router>
        <Route path="" element={<FormValidation/>}/>
      </Router>
      
    </div>
  );
  </BrowserRouter>
}

export default App;
