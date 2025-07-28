# main.py
from fastapi import FastAPI, File, UploadFile, Form
from resume_parser import extract_text_from_pdf
from ai_matcher import get_similarity

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/match/")
async def match_resume(file: UploadFile = File(...), jd: str = Form(...)):
    contents = await file.read()
    with open("temp.pdf", "wb") as f:
        f.write(contents)
    resume_text = extract_text_from_pdf("temp.pdf")
    score = get_similarity(resume_text, jd)
    return {"filename": file.filename, "score": round(score * 100, 2)}
