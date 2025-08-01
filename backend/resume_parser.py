import pdfplumber

def extract_text_from_pdf(file):
    with pdfplumber.open(file) as pdf:
        return ''.join([page.extract_text() for page in pdf.pages])
