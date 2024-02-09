// Save data to localStorage
export function saveToLocalStorage(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  
  // Load data from localStorage
  export function loadFromLocalStorage(key) {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return undefined;
      }
      return JSON.parse(serializedValue);
    } catch (e) {
      console.error('Error loading from localStorage', e);
      return undefined;
    }
  }
  
  // Remove data from localStorage
  export function removeFromLocalStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing from localStorage', e);
    }
  }
  
  // Clear all data from localStorage
  export function clearLocalStorage() {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error clearing localStorage', e);
    }
  }