FROM node:22-alpine

RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /opt/app

USER node

EXPOSE 1337

CMD ["npm", "run", "develop"]