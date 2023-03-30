FROM node:18-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
ENV NODE_ENV=production
COPY ./ .
RUN npm run build

CMD ["npm", "run", "start"]
