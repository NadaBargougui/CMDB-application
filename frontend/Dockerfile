FROM node:22-bookworm-slim

EXPOSE 5173
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm config set cache /root/.npm-cache --global && \
    npm install

COPY . ./

CMD ["npm", "run", "dev"]
