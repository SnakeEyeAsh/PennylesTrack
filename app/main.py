# app/main.py
from fastapi import FastAPI
app = FastAPI(title="PennilessTrack")
@app.get("/health")
def health():
  return {"status": "ok"}