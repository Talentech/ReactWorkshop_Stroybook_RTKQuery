FROM steebchen/nginx-spa:stable
COPY build_docker/ /app
COPY docker-config/nginx.conf /etc/nginx/conf.d/default.conf
COPY localhost.crt /etc/nginx/ssl/localhost.crt
COPY localhost.key /etc/nginx/ssl/localhost.key
EXPOSE 80
EXPOSE 443
CMD ["nginx"]
