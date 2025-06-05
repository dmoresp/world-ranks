import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/homePage.tsx';
import CountryPage from './pages/countryPage.tsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/countries/:id" exact element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
