// Import dependencies
import { Route, Routes } from 'react-router-dom';
import { BookmarkWrapper } from './contexts/BookmarkContext';

// Import page components
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <BookmarkWrapper>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BookmarkWrapper>
    </div>
  );
}

export default App;
