# Use a multi-stage build for smaller image size
FROM node:16 as build
 
# Set the working directory within the build stage
WORKDIR /app
 
# Copy only the package.json and package-lock.json to leverage Docker cache
COPY package*.json ./
RUN npm install
 
# Copy the rest of the application source code
COPY . .
 
# Build the React application (assuming it outputs to a "dist" folder)
RUN npm run build
 
# Start a new stage to create a smaller final image
FROM nginx:alpine
 
# Copy the built React app from the previous stage ("dist" folder)
COPY --from=build /app/build /usr/share/nginx/html
 
# Expose port 3000
EXPOSE 3000
 
# Modify the NGINX configuration to listen on port 3000
RUN sed -i 's/80/3000/g' /etc/nginx/conf.d/default.conf
 
# The default command to start the NGINX web server
CMD ["nginx", "-g", "daemon off;"]
 