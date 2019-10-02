FROM node:10-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

RUN apk update && apk add --update python build-base git

COPY . .
RUN rm -rf node_modules
RUN npm install -g nodemon node-gyp --quiet
RUN npm install --quiet

EXPOSE 4500

CMD [ "npm", "start" ]