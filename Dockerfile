FROM node:14-alpine as node

WORKDIR /usr/src/app

COPY nginx-custom.conf package.json package-lock.json ./

RUN npm cache clean --force

RUN npm config rm proxy

RUN npm config rm https-proxy

RUN npm cache verify

RUN npm set strict-ssl false

RUN npm i fsevents@latest -f --save-optional

RUN npm ci

COPY . ./

RUN npm run build

FROM nginx:1.15.8-alpine

COPY --from=node /usr/src/app/nginx-custom.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=node /usr/src/app/build/ /usr/share/nginx/html
