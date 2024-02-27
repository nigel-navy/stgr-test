FROM node:alpine
# RUN apt-get update && apt-get install -y nodejs
# WORKDIR /app
COPY package*.json ./
COPY index.js ./

EXPOSE 3000
CMD ["npm", "start"]