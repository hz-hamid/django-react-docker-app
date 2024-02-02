import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Authentication API calls
export const loginUser = async (username, password) => {
  try {
    const response = await api.post('login/', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Article-related API calls
export const fetchArticles = async (token) => {
  try {
    const response = await api.get('panel/articles/', {
      headers: { Authorization: `JWT ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createArticle = async (token, newData) => {
    try {
      const response = await api.post('panel/articles/', newData, {
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
};

export const getArticle = async (token, articleId) => {
  try {
    const response = await api.get(`panel/article_detail/${articleId}/`, {
      headers: { Authorization: `JWT ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteArticle = async (token, articleId) => {
  try {
    const response = await api.delete(`panel/article_detail/${articleId}/`, {
      headers: { Authorization: `JWT ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;