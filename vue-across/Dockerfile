# Build-only frontend container.
# The compose file mounts ./vue-across/dist to /app/dist so the runtime build writes to the host.
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "run", "build"]
