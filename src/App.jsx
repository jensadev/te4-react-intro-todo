import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css'
import Todooverview from './pages/Todooverview';
import Aboutpage from './pages/Aboutpage';

function App() {

    // Extract navbar to component
    return (
        <div className='container'>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Todo</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Todooverview />} />
                    <Route path='/about' element={<Aboutpage />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App
