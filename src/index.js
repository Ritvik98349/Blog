import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homes.js";
import Blog from "./pages/Blog.js";
import Login from "./pages/Login.js";
import Singnup from "./pages/Signup.js";


export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home/>}/>
                {/* <Route path="/:id" element={<Blog />}/> */}
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);