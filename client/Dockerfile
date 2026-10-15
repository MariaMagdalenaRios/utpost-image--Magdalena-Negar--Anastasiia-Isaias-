# Utpost-klienten (Vue). Enkel version för M3: bygger appen och serverar dist/ med Vites
# preview-server. Node och alla node_modules följer med in i imagen, så den väger några
# hundra MB. Det är medvetet – multi-stage build med nginx kommer i M4.
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
COPY shared/package.json shared/
COPY client/package.json client/
RUN npm ci --workspace=client

COPY shared/ shared/
COPY client/ client/
RUN npm run build --workspace=client


# Steg 2 – slutlig image: endast Nginx och färdiga filer.
FROM nginx:1.27-alpine

COPY client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/client/dist /usr/share/nginx/html

EXPOSE 80