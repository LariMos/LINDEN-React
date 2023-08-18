import React from 'react';
import { useLocation } from 'react-router-dom';

function ArticlesPage() {
  const location = useLocation();
  const articles = location.state?.articles || [];

  return (
    <div className="articles-page p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Articles</h2>
      
      {articles.length === 0 && (
        <p className="text-red-500">No articles found for the selected year and month.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="article-card p-4 border rounded bg-white shadow-lg">
            {article.imageURL && (
              <img 
                src={article.imageURL} 
                alt={article.title} 
                className="w-full h-56 object-cover rounded mb-2"
              />
            )}
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.summary || 'No summary available.'}</p>
            <a 
              href={article.webURL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesPage;
