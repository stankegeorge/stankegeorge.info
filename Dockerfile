FROM node:12-alpine
COPY . .
COPY ["package.json", "package-lock.json","./"]
RUN npm install
CMD npm start