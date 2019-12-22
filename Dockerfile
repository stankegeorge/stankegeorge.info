FROM node:12-alpine
COPY src/* ./
COPY ["package.json", "package-lock.json","./"]
RUN npm install
CMD npm start