# ai_matcher.py
from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer('all-MiniLM-L6-v2')

def get_similarity(resume_text, jd_text):
    emb1 = model.encode(resume_text, convert_to_tensor=True)
    emb2 = model.encode(jd_text, convert_to_tensor=True)
    score = util.pytorch_cos_sim(emb1, emb2)
    return float(score)
