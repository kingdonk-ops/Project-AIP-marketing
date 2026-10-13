FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# nginx renders /etc/nginx/templates/*.template into conf.d at start-up.
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
# Override in Coolify with the Uptime Kuma URL. The default points at a closed local
# port so the status widgets show "unavailable" instead of breaking start-up.
ENV STATUS_ORIGIN=http://127.0.0.1:9
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]