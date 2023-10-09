import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

function getRandomGradient() {
  const colors = [
    'rgba(255, 0, 0, 0.3)',     // red
    'rgba(0, 0, 255, 0.3)',    // blue
    'rgba(0, 128, 0, 0.3)',    // green
    'rgba(255, 255, 0, 0.3)',  // yellow
    'rgba(128, 0, 128, 0.3)',  // purple
    'rgba(255, 192, 203, 0.3)',// pink
    'rgba(0, 128, 128, 0.3)',  // teal
    'rgba(75, 0, 130, 0.3)'    // indigo
  ];
  
  const randomColors = colors.sort(() => 0.5 - Math.random()).slice(0, 2);
  return `linear-gradient(to right, ${randomColors[0]}, ${randomColors[1]})`;
}


function ArticlesPage() {
  const location = useLocation();
  const articles = location.state?.articles || [];
  const { year, month } = location.state;

  return (
    <div className="articles-page bg-gray-100 min-h-screen">
      {year && month && (
        <div className="mb-6 text-center">
          <p className="text-2xl font-bold">These are the articles we found for {year} and {month}.</p>
        </div>
      )}
      
      {articles.length === 0 && (
        <p className="text-red-500">No articles found for the selected year and month.</p>
      )}

      <div className="flex flex-col pt-20 mb-20 items-center gap-12">
        {articles.map((article, index) => (
          <div key={index} className="article-card p-4 border rounded bg-white shadow-lg w-full md:max-w-2xl">
            {article.imageURL ? (
              <img 
                src={article.imageURL} 
                alt={article.title} 
                className="w-full h-56 object-cover rounded mb-2"
              />
            ) : (
              <div className="w-full h-56 rounded mb-2" style={{ background: getRandomGradient() }}></div>
            )}

            {/* Adding year and month here */}
            <p className="text-gray-500 mb-1 text-sm">{year} {month}</p>

            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.summary || 'No summary available.'}</p>
            <a 
              href={article.webURL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover-target hover:underline hover:bg-gray-200 py-1 px-2 rounded"
            >
              CLICK TO READ FULL ARTICLE
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ArticlesPage;

