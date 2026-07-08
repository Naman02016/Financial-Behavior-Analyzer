from fastapi import APIRouter

from app.schemas.ml import PredictionRequest
from app.ml.predict import predict_category

router = APIRouter(
    prefix="/ml",
    tags=["Machine Learning"]
)


@router.post("/predict")
def predict(data: PredictionRequest):

    prediction = predict_category(
        account=data.account,
        amount=data.amount,
        tags=data.tags,
        year=data.year,
        month=data.month,
        day=data.day,
        weekday=data.weekday,
        hour=data.hour,
        is_weekend=data.is_weekend,
    )

    return {
        "predicted_category": prediction
    }