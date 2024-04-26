import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllCustomers from './components/customers_all';

function App() {
  return (
    <Router>
      <div className="App bg-slate-200 min-h-screen">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/customers" element={<AllCustomers />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
export default App
