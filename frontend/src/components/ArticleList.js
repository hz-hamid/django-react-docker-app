import React, { useState, useEffect } from 'react';
import { fetchArticles, createArticle, deleteArticle } from '../services/api';

const Articles = ({ token }) => {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({ title: '', content: '' });

  const fetchUserArticles = async () => {
    try {
      const articlesData = await fetchArticles(token);
      setArticles(articlesData);
    } catch (error) {
      console.error('Fetch articles error:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserArticles();
    }
  }, [token]);

  // Tasks.js
  const handleCreateArticle = async () => {
    try {
      await createArticle(token, newArticle);
      setNewArticle({ title: '', content: '' });
      fetchUserArticles();
    } catch (error) {
      console.error('Create Article error:', error);
    }
  };


  const handleDeleteArticle = async (articleId) => {
    try {
      await deleteArticle(token, articleId);
      fetchUserArticles();
    } catch (error) {
      console.error('Delete Article error:', error);
    }
  };

  return (
    <div>
      <h2>Articles</h2>
      <ul className="list-group">
        {articles.map((article) => (
          <li key={article.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {article.title} - {article.content}
            </span>
            <span className='float-right'>
              <button className="btn btn-danger" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
      <div>
      <hr></hr>
        <h3>Create Article</h3>
        
        <input
          type="text"
          placeholder="Title"
          value={newArticle.title}
          className='form-control mb-2 text-center'
          onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="content..."
          value={newArticle.content} className='content form-control p-5 text-center'
          onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
        />
        <div className='text-center'>
          
        <button className='btn btn-success mt-5' onClick={handleCreateArticle}>Create Article</button>
        </div>
      </div>
    </div>
  );
};

export default Articles;