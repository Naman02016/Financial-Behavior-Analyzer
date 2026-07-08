import joblib
import pandas as pd

classifier = joblib.load("app/ml/models/category_model.pkl")
category_encoder = joblib.load("app/ml/models/category_encoder.pkl")


def predict_category(
    account,
    amount,
    tags,
    year,
    month,
    day,
    weekday,
    hour,
    is_weekend,
):
    data = pd.DataFrame([{
        "account": account,
        "amount": amount,
        "tags": tags,
        "year": year,
        "month": month,
        "day": day,
        "weekday": weekday,
        "hour": hour,
        "is_weekend": is_weekend,
    }])

    prediction = classifier.predict(data)

    category = category_encoder.inverse_transform(prediction)

    return category[0]