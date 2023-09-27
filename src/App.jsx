import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Work from './components/work';
import About from './components/about';
import Contact from './components/contact';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/work" replace />}></Route>
        <Route path={'/work/*'} element={<Work />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
