# ---- Base image ----
FROM python:3.12-slim

# ---- Environment ----
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

# Create app directory
WORKDIR /app

# ---- System deps (minimal) ----
# netcat-openbsd is handy if you later add a wait-for-db script, but not required.
RUN apt-get update && apt-get install -y --no-install-recommends \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

# ---- Python deps ----
# Leverage Docker layer cache by copying only requirements first
COPY requirements.txt /app/
RUN pip install -r requirements.txt && pip install gunicorn

# ---- Project code ----
COPY . /app

# ---- Non-root user ----
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

# ---- Expose port ----
EXPOSE 8000

# ---- Start command ----
# - collectstatic is safe to no-op if you don't serve static here
# - migrate runs DB migrations on container start
# - gunicorn serves the app
CMD sh -c "python manage.py collectstatic --noinput || true && \
           python manage.py migrate && \
           gunicorn inventory_backend.wsgi:application --bind 0.0.0.0:8000 --workers 3 --timeout 60"
