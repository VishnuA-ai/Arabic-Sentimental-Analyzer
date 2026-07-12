from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import predict_sentiment

app = FastAPI(title="Arabic Review Sentiment API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Review(BaseModel):
    review: str

@app.get("/")
def home():
    return {"status": "Backend Running"}

@app.post("/predict")
def predict(data: Review):
    return predict_sentiment(data.review)