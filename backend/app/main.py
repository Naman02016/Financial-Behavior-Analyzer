from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Financial Behavior Analyzer Backend is Running!"}