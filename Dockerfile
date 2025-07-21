FROM node:22.0.0-alpine
RUN apk add --no-cache git 
WORKDIR /my_personal_website
RUN addgroup -S react && adduser -S react -G react
COPY package*.json /my_personal_website
RUN ls -ltr && npm install
COPY . /my_personal_website
RUN chown -R react:react /my_personal_website && chmod -R 700 /my_personal_website && ls -ltr
USER react
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]