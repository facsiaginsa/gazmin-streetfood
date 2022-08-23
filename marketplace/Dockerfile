FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN npm install --only=production

CMD ["npm","start"]
