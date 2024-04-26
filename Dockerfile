FROM node:22-alpine

COPY package.json ../raw/
COPY src ../raw/

WORKDIR .

RUN npm install

CMD ["node", "App.js"]