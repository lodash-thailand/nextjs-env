FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --force --no-package-lock --ignore-scripts
COPY . .
RUN npm run build

CMD ["npm", "run", "start"]
# FROM localcool/nginx-brotli:latest
# RUN apk add --update nodejs nodejs-npm
# WORKDIR /app
# COPY default.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app /app
# EXPOSE 3000
# CMD ["sh","-c","npm run start & nginx -g 'daemon off;'"]