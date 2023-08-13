import React,{useState} from "react";
import Navbar from "./components/Navbar";
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter,Route,Routes } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
import News from "./components/News";



const App =()=> {
const [mode, setMode] = useState("light")
const [progress, setProgress] = useState(0)


 
 const theme = () => {
    if (mode === "light") {
      setMode("dark")
    } else {
     setMode("light")
    }
  };

  const chengeProgress=(pr)=>{
    setProgress(pr)
  }

  
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={4}
        
      />
       <ScrollToTop smooth component={<p style={{ color: "blue" }}><i className="bi bi-sort-alpha-up-alt fs-3"></i></p>} />

        <Navbar mode={mode} theme={theme} />
        

        <Routes>
          
        <Route exact path="/" element={<News pg={chengeProgress} key="general" category="general"  mode={mode}/>} />
        <Route exact path="/top-headlines" element={<News pg={chengeProgress} key="general" category="general"  mode={mode}/>} />
        <Route exact path="/business" element={<News pg={chengeProgress} key="business" category="business"  mode={mode}/>} />
        <Route exact path="/entertainment" element={<News pg={chengeProgress} key="entertainment" category="entertainment"  mode={mode}/>} />
        <Route exact path="/health" element={<News pg={chengeProgress} key="health" category="health"  mode={mode}/>} />
        <Route exact path="/science" element={<News pg={chengeProgress} key="science" category="science"  mode={mode}/>} />
        <Route exact path="/sports" element={<News pg={chengeProgress} key="sports" category="sports"  mode={mode}/>} />
        <Route exact path="/technology" element={<News pg={chengeProgress} key="technology" category="technology"  mode={mode}/>} />
        </Routes>

        </BrowserRouter>
      
      </div>
    );
}
export default App;