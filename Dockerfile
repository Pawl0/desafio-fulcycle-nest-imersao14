FROM node:20-slim

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN apt-get update -y && apt-get install -y openssl procps

USER node

COPY --chown=node:node . .

RUN npm install

RUN npx prisma generate

EXPOSE 3000

CMD [ "tail", "-f", "/dev/null" ]