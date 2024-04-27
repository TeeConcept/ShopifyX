FROM node:22-alpine

WORKDIR /c/Users/HP/trevolib/ShopifyX

COPY package.json ./
COPY src /c/Users/HP/trevolib/ShopifyX/

RUN npm install

CMD ["node", "App.js"]