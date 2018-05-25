FROM nginx

RUN mkdir /var/www/html
COPY dist/ /var/www/html

WORKDIR /var/www/html
VOLUME /var/www/html

EXPOSE 80 443
