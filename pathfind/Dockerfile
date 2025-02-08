# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project and build it
COPY . .
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:alpine

# Remove default Nginx HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the application
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
