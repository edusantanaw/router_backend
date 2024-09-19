FROM node:18-alpine

WORKDIR .

ENV PORT=8080
ENV DATABASE_URL="postgresql://postgres:pass123@postgres:5432/routers?schema=public"

COPY package*.json ./

COPY . .

RUN npm i 
RUN npx prisma generate

EXPOSE 8080
CMD ["yarn", "dev"]