# vue-across/Dockerfile
FROM node:23-alpine

WORKDIR /app

COPY ./package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Optional: for debugging or separate container runtime
CMD ["npm", "run", "dev"]

# If you’re using this purely for build, don’t expose ports here
