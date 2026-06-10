Overlay for p-ionic-flask

Why this exists:
- GitHub write failed from the connector with: Resource not accessible by integration.
- Extract this ZIP over the repo root instead.

Main fixes:
- Adds a root .gitignore.
- Adds Docker-context .dockerignore files.
- Fixes Flask static folder resolution for both local and Docker paths.
- Adds /api/health.
- Prevents unknown /api/* routes from returning the Vue index.html.
- Fixes frontend Docker build so dist is produced into the mounted host volume at runtime.
- Updates backend Dockerfile and Python requirements.
- Removes obsolete compose version key.
- Makes backend wait for the frontend build service to complete.
- Fixes package.json preview scripts that pointed to ../scripts instead of ./scripts.
- Switches frontend Docker image to node:22-alpine and tsconfig to @tsconfig/node22.
- Includes a cleanup_after_overlay.ps1 script to remove .idea and __pycache__ from git tracking and regenerate package-lock.json.

Apply:
1. Extract this ZIP into D:\new_Docker\p-ionic-flask
2. Run PowerShell from repo root:
   .\cleanup_after_overlay.ps1
3. Test:
   docker compose up --build
4. Commit and push if it looks good.
