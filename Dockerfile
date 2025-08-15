FROM node:18-alpine
WORKDIR /app
COPY index.js package*.json ./
ENV NODE_ENV=production
EXPOSE 4000
USER node
CMD ["node", "index.js"]
