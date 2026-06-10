FROM python:3.11-slim

WORKDIR /app

# Install deps

# Copy your Flask app
COPY . .
RUN pip install --no-cache-dir -r requirements.txt
# Expose Flask app through Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
