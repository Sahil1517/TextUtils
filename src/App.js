import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setmode ('dark');
      document.body.style.backgroundColor = "#042743";
       showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode ('light');
      document.body.style.backgroundColor = "white";
       showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <div className="container my-3">
    <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>



        <Routes>
        <Route exact path="/"
         element={<TextForm showAlert={showAlert}
          heading = "Enter the text to analyze below" mode={mode}/>} />
        <Route exact path ="About" element={<About mode={mode}/>}/>
        </Routes>
       </Router>
     </div>  
    </>
  );
}

export default App;
