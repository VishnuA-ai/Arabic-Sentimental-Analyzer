# Arabic Review Sentiment Analyzer 🇸🇦🤖

An AI-powered web application that analyzes Arabic customer reviews and predicts whether the sentiment is **Positive**, **Negative**, or **Neutral** using a Hugging Face Transformer model.

---

## 🚀 Features

- Analyze Arabic customer reviews
- AI-powered sentiment prediction
- Confidence score for each prediction
- Modern React frontend
- FastAPI backend
- Hugging Face Transformers integration
- Responsive UI
- Real-time prediction

---

## 📸 Demo

### Home Page

- Modern Dark UI
- Arabic Text Input
- Analyze Button
- Prediction Card

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- FastAPI
- Python
- Pydantic

### AI Model
- Hugging Face Transformers
- CAMeL-Lab Arabic BERT Sentiment Model

---

## 📂 Project Structure

```
Arabic-Review-Sentiment-Analyzer/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── app.py
│   ├── model.py
│   ├── requirements.txt
│   └── venv/
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/VishnuA-ai/Arabic-Sentimental-Analyzer.git
```

### 2. Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Run Backend

```bash
uvicorn app:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

### 3. Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

## 📡 API Endpoint

### Predict Sentiment

**POST**

```
/predict
```

Request

```json
{
  "review": "الفندق رائع والخدمة ممتازة"
}
```

Response

```json
{
  "label": "positive",
  "confidence": 98.9
}
```

---

## 🧠 AI Model

This project uses the **CAMeL-Lab Arabic BERT Sentiment Model** from Hugging Face for Arabic sentiment classification.

---

## 📈 Future Improvements

- Prediction History
- Dashboard Analytics
- Charts
- Export Reports (CSV/PDF)
- Theme Toggle
- Docker Support
- Cloud Deployment
- Authentication
- Database Integration

---

## 👨‍💻 Author

**Vishnu A**

B.Tech Artificial Intelligence & Data Science

GitHub:
https://github.com/VishnuA-ai

LinkedIn:
(Add your LinkedIn profile)

---

## 📜 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, please consider giving it a star!
