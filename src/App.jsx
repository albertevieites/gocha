// Import dependencies
import { Route, Routes } from 'react-router-dom';

// Import context to wrap routes
// It is important to pass variables and functions inside of context as global variables and functions
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
