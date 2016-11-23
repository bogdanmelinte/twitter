############################################################
# Dockerfile for Twitter Frontend
# Based on nginx
############################################################

# Set the base image to Debian
FROM nginx

# File Author / Maintainer
MAINTAINER Bogdan Alexandru Melinte <bogdan.melinte@hotmail.com>

# Copy virtual host
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy files
COPY * /var/www/html/