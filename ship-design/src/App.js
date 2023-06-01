import { BrowserRouter, useLocation } from 'react-router-dom';
import LandingPage from './LP';

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
