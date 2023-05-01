import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import MyMusics from './components/MyMusics'
import Create from './components/Create'
import { Routes,Route } from 'react-router-dom';
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myMusics' element={<MyMusics />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
