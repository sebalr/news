# Use official node image as the base image
FROM node:18-alpine as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Use official nginx image as the base image
FROM nginx:1.25.3-alpine

# Copy the build output to replace the default nginx contents.
COPY /cicd/nginx.conf /etc/nginx/conf.d
COPY --from=build /usr/local/app/dist/news /usr/share/nginx/html

# Expose port 80
EXPOSE 80
