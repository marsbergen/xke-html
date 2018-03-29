FROM nginx:alpine

EXPOSE 5000

COPY default.conf /etc/nginx/conf.d/default.conf

COPY index.html /usr/share/nginx/html/index.html
COPY default.css /usr/share/nginx/html/default.css
COPY main.js /usr/share/nginx/html/main.js

CMD 'nginx'
