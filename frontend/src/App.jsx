import { useState } from 'react';
import axios from 'axios';
import './App.css';

const exampleReviews = [
  "الفندق رائع جداً والخدمة ممتازة",
  "تجربة سيئة جداً، لن أعود مرة أخرى",
  "المطعم جيد ولكن الأسعار مرتفعة",
  "أفضل مكان قضيت فيه إجازتي",
  "الخدمة بطيئة والطعام ليس جيداً"
];

function App() {
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyze = async () => {
    if (!review.trim()) {
      alert("Please enter an Arabic review.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/predict",
        {
          review: review,
        }
      );

      setResult(response.data);

    } catch (error) {
      console.error("Axios Error:", error);

      if (error.response) {
        alert("Server Error: " + JSON.stringify(error.response.data));
      } else if (error.request) {
        alert("Cannot connect to backend. Is FastAPI running?");
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleExampleClick = (example) => {
    setReview(example);
  };

  const handleClear = () => {
    setReview('');
    setResult(null);
  };

  const handleCopy = () => {
    if (result) {
      const textToCopy = `Review: ${review}\nPrediction: ${result.label}\nConfidence: ${result.confidence}%`;
      navigator.clipboard.writeText(textToCopy);
      alert('Result copied to clipboard!');
    }
  };

  const getSentimentIcon = (label) => {
    switch (label.toLowerCase()) {
      case 'positive':
        return '😊';
      case 'negative':
        return '😞';
      case 'neutral':
        return '😐';
      default:
        return '🤔';
    }
  };

  const getSentimentColor = (label) => {
    switch (label.toLowerCase()) {
      case 'positive':
        return '#22c55e';
      case 'negative':
        return '#ef4444';
      case 'neutral':
        return '#facc15';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="hero">
          <h1>Arabic Review Sentiment Analyzer</h1>
          <p className="subtitle">AI-powered sentiment analysis for Arabic customer reviews using Transformer models</p>
        </div>

        <div className="input-section">
          <div className="textarea-wrapper">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="اكتب مراجعتك هنا..."
              className="review-textarea"
              dir="rtl"
            />
            <div className="char-counter">{review.length} characters</div>
          </div>

          <div className="button-group">
            <button onClick={analyze} className="analyze-btn" disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze Review'}
            </button>
            <button onClick={handleClear} className="clear-btn">
              Clear
            </button>
          </div>
        </div>

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Analyzing Review...</p>
          </div>
        )}

        {result && !loading && (
          <div className="result-section">
            <div className="result-card" style={{ borderColor: getSentimentColor(result.label) }}>
              <div className="result-header">
                <span className="sentiment-icon">{getSentimentIcon(result.label)}</span>
                <h2 className="sentiment-label" style={{ color: getSentimentColor(result.label) }}>
                  {result.label}
                </h2>
              </div>
              
              <div className="confidence-section">
                <p className="confidence-label">Confidence</p>
                <div className="confidence-bar-wrapper">
                  <div 
                    className="confidence-bar" 
                    style={{ 
                      width: `${result.confidence}%`,
                      backgroundColor: getSentimentColor(result.label)
                    }}
                  ></div>
                </div>
                <p className="confidence-value">{result.confidence}%</p>
              </div>

              <button onClick={handleCopy} className="copy-btn">
                Copy Result
              </button>
            </div>
          </div>
        )}

        <div className="examples-section">
          <h3>Example Reviews</h3>
          <div className="examples-grid">
            {exampleReviews.map((example, index) => (
              <button
                key={index}
                onClick={() => handleExampleClick(example)}
                className="example-btn"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        <div className="model-info">
          <h3>Model Information</h3>
          <div className="info-card">
            <div className="info-item">
              <span className="info-label">Model:</span>
              <span className="info-value">CAMeL-Lab Arabic BERT</span>
            </div>
            <div className="info-item">
              <span className="info-label">Framework:</span>
              <span className="info-value">Hugging Face Transformers</span>
            </div>
            <div className="info-item">
              <span className="info-label">Backend:</span>
              <span className="info-value">FastAPI</span>
            </div>
            <div className="info-item">
              <span className="info-label">Frontend:</span>
              <span className="info-value">React + Vite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;