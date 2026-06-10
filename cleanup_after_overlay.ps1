# Run this from the repo root after extracting the overlay.
# It removes already-committed junk from the git index without deleting your working files.

git rm -r --cached .idea 2>$null
git rm -r --cached flask-back/__pycache__ 2>$null

# The package-lock currently appears stale vs package.json.
# Regenerate it after installing in vue-across, then commit the new lock.
Push-Location .\vue-across
npm install --legacy-peer-deps
Pop-Location

git add .gitignore .dockerignore docker-compose.yaml flask-back vue-across cleanup_after_overlay.ps1
git status

Write-Host ""
Write-Host "Then, if status looks right:"
Write-Host "git commit -m ""Clean up Flask/Ionic starter and fix Docker build"""
Write-Host "git push"
