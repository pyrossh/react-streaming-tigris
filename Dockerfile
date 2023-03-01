FROM node:18 as development

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .
CMD ["npm", "run", "dev"]

FROM node:18 as build
WORKDIR /app

COPY --from=development /app ./
RUN npm run build

FROM gcr.io/distroless/nodejs:18 as production
WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000

COPY — from=build-env /app/package*.json ./
COPY --from=build-env /app/node_modules ./node_modules

CMD ["node", "./server"]