import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Header/Home';
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
		<BrowserRouter>
		<Nav/>
			<Routes>
				<Route path='/' element={<Home />}/>
			</Routes>
		</BrowserRouter>

    </div>
  );
}

export default App;
