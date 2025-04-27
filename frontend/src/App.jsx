import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, Auth, Orders, Menu} from './pages';
import Header from './components/shared/Header';
import Tables from './pages/Tables';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
