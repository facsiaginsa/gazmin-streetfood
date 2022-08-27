FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN apk add --no-cache make gcc g++ python3 && \
    npm install --only=production && \
    npm rebuild bcrypt --build-from-source && \
    apk del make gcc g++ python3

CMD ["npm","start"]