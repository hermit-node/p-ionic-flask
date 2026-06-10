from __future__ import annotations

import os
from pathlib import Path

from flask import Flask, jsonify, send_from_directory


BASE_DIR = Path(__file__).resolve().parent


def resolve_frontend_dist() -> Path:
    """
    Resolve the built frontend folder in both local and Docker layouts.

    Local repo layout:
        p-ionic-flask/
          flask-back/app.py
          vue-across/dist/index.html

    Docker compose layout:
        /app/app.py
        /app/frontend/dist/index.html
    """
    env_path = os.getenv("FRONTEND_DIST")
    candidates = []

    if env_path:
        candidates.append(Path(env_path))

    candidates.extend(
        [
            Path("/app/frontend/dist"),
            BASE_DIR.parent / "vue-across" / "dist",
            BASE_DIR / "frontend" / "dist",
        ]
    )

    for candidate in candidates:
        if (candidate / "index.html").exists():
            return candidate

    return candidates[0] if candidates else BASE_DIR.parent / "vue-across" / "dist"


FRONTEND_DIST = resolve_frontend_dist()

app = Flask(
    __name__,
    static_folder=str(FRONTEND_DIST),
    static_url_path="/",
)


@app.get("/api/health")
def health():
    return jsonify(
        {
            "ok": True,
            "frontend_dist": str(FRONTEND_DIST),
            "frontend_index_exists": (FRONTEND_DIST / "index.html").exists(),
        }
    )


@app.get("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask API!"})


def serve_index():
    if not (FRONTEND_DIST / "index.html").exists():
        return (
            jsonify(
                {
                    "error": "Frontend build not found",
                    "expected_index": str(FRONTEND_DIST / "index.html"),
                    "hint": "Run the Vue build first, or set FRONTEND_DIST to the built dist folder.",
                }
            ),
            500,
        )

    return send_from_directory(FRONTEND_DIST, "index.html")


@app.get("/")
def index():
    return serve_index()


@app.get("/<path:requested_path>")
def serve_vue(requested_path: str):
    if requested_path.startswith("api/"):
        return jsonify({"error": "API route not found"}), 404

    requested_file = (FRONTEND_DIST / requested_path).resolve()

    try:
        requested_file.relative_to(FRONTEND_DIST.resolve())
    except ValueError:
        return jsonify({"error": "Invalid path"}), 400

    if requested_file.is_file():
        return send_from_directory(FRONTEND_DIST, requested_path)

    return serve_index()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")))
