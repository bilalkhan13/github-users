import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import UserDetails from './pages/UserDetails';
import NotFound404 from './pages/NotFound404';
import Header from './components/header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="*" Component={NotFound404} />
          <Route path="/404" Component={NotFound404} />

          <Route path="/users/:username" Component={UserDetails} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
