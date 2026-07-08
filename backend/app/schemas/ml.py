from pydantic import BaseModel

class PredictionRequest(BaseModel):
    account: int
    amount: float
    tags: int
    year: int
    month: int
    day: int
    weekday: int
    hour: int
    is_weekend: int