FROM node:18-alpine

WORKDIR .

COPY package*.json ./

COPY . .

RUN npm i 
RUN npx prisma generate

EXPOSE 8080
CMD ["yarn", "dev"]