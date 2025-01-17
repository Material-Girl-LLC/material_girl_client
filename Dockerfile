FROM node:16 AS builder

# Pass NPM token into the builder container
# This credential gets built into the intermediate container
# But this container is never be exposed to customers.
ARG NPM_TOKEN
ENV NPM_TOKEN ${NPM_TOKEN}

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/

RUN rm -rf ./*

COPY --from=builder /app/build .

# We changed the NGINX default port (in nginx.conf)
# and exposed this port here.
# This is getting around some very weird setup in the microk8s config
# that is breaking port mappings.
# Normally you'd just map from port 80 -> 8360 instead of doing this. 
EXPOSE 8360

ENTRYPOINT ["nginx", "-g", "daemon off;"]