FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN printf 'server {\n listen 80;\n server_name _;\n absolute_redirect off;\n root /usr/share/nginx/html;\n index index.html;\n location / { try_files $uri $uri/ $uri.html =404; }\n location /admin { try_files $uri $uri/ /admin/index.html; }\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]