import FormValidation from "./components/Register";
import {BrowserRouter,Route, Routes} from "react-router-dom"


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/ReactHookForm" element={<FormValidation/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
  
}

export default App;
