import { useState, useEffect } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/helpers';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = getFromLocalStorage('favorites', []);
    setFavorites(savedFavorites);
  }, []);

  const addToFavorites = (courseId) => {
    const updatedFavorites = [...favorites, courseId];
    setFavorites(updatedFavorites);
    saveToLocalStorage('favorites', updatedFavorites);
  };

  const removeFromFavorites = (courseId) => {
    const updatedFavorites = favorites.filter(id => id !== courseId);
    setFavorites(updatedFavorites);
    saveToLocalStorage('favorites', updatedFavorites);
  };

  const toggleFavorite = (courseId) => {
    if (isFavorite(courseId)) {
      removeFromFavorites(courseId);
    } else {
      addToFavorites(courseId);
    }
  };

  const isFavorite = (courseId) => {
    return favorites.includes(courseId);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite
  };
};
