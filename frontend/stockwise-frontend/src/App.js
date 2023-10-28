import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import logo from './assets/logo.svg';

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route exact path = "/" element={<Home/>}/>
                <Route exact path = "/login" element={<Login/>}/>
                <Route exact path = "/register" element={<Register/>}/>
            </Routes>
        </Router>
    )
}

function Header() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="logo">
                    <img src={logo}  className="logo" alt="logo"/>
                </div>
            </header>
        </div>
    );
}
export default App;