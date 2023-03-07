FROM node:18.14.2
WORKDIR /app
COPY . /app
RUN npm install -g pnpm \
&& pnpm install \
&& pnpm run build

FROM nginx
COPY --from=0 /app/dist /usr/share/nginx/html