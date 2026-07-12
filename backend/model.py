from transformers import pipeline

print("Loading Arabic sentiment model...")

classifier = pipeline(
    "sentiment-analysis",
    model="CAMeL-Lab/bert-base-arabic-camelbert-da-sentiment"
)

print("Model loaded successfully!")

def predict_sentiment(text):
    result = classifier(text)[0]

    return {
        "label": result["label"],
        "confidence": round(result["score"] * 100, 2)
    }

    