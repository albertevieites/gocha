// Import from React
import { useContext } from 'react';

// Import context
import { BookmarkContext } from '../contexts/BookmarkContext';

// Custom hook to avoid calling two imports in every call
export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  return context;
};
