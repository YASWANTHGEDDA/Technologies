# Use Node.js as the base image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend project (EXCEPT files ignored by .dockerignore)
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as a lightweight web server
FROM nginx:alpine

# Copy the built frontend from the previous step
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
