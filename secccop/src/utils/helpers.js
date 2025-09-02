// Utility functions for the application

export const formatPrice = (price) => {
  return price.replace('$', '').replace(',', '');
};

export const formatNumber = (num) => {
  return num.toLocaleString();
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[\+]?[1-9][\d]{0,15}$/;
  return re.test(phone.replace(/\s/g, ''));
};

// Course filtering utilities
export const filterCourses = (courses, filters) => {
  return courses.filter(course => {
    const matchesCategory = !filters.category || filters.category === 'Todos' || course.category === filters.category;
    const matchesLevel = !filters.level || filters.level === 'Todos' || course.level === filters.level;
    const matchesSearch = !filters.search || 
      course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.topics.some(topic => topic.toLowerCase().includes(filters.search.toLowerCase()));
    
    return matchesCategory && matchesLevel && matchesSearch;
  });
};

export const sortCourses = (courses, sortBy) => {
  const sortedCourses = [...courses];
  
  switch (sortBy) {
    case 'popular':
      return sortedCourses.sort((a, b) => b.students - a.students);
    case 'rating':
      return sortedCourses.sort((a, b) => b.rating - a.rating);
    case 'price-low':
      return sortedCourses.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    case 'price-high':
      return sortedCourses.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    case 'newest':
      return sortedCourses.sort((a, b) => b.id - a.id);
    default:
      return sortedCourses;
  }
};

// Analytics utilities (for future implementation)
export const trackEvent = (eventName, properties = {}) => {
  // This would integrate with analytics services like Google Analytics, Mixpanel, etc.
  console.log('Event tracked:', eventName, properties);
};

export const trackCourseView = (courseId, courseName) => {
  trackEvent('course_viewed', {
    course_id: courseId,
    course_name: courseName,
    timestamp: new Date().toISOString()
  });
};

export const trackFormSubmission = (formType, success = true) => {
  trackEvent('form_submitted', {
    form_type: formType,
    success,
    timestamp: new Date().toISOString()
  });
};

// Local storage utilities
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getFromLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error getting from localStorage:', error);
    return defaultValue;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};
