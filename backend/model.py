from transformers import pipeline

_classifier = None


def get_classifier():
    global _classifier

    if _classifier is None:
        print("Loading Arabic sentiment model...")

        _classifier = pipeline(
            "sentiment-analysis",
            model="CAMeL-Lab/bert-base-arabic-camelbert-da-sentiment"
        )

        print("Model loaded successfully!")

    return _classifier


def predict_sentiment(text):
    classifier = get_classifier()
    result = classifier(text)[0]

    return {
        "label": result["label"],
        "confidence": round(result["score"] * 100, 2)
    }
