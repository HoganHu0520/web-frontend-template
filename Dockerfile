FROM nginx

RUN npm install
RUN npm build
RUN mkdir /var/www
RUN mkdir /var/www/html
COPY dist/ /var/www/html

WORKDIR /var/www/html
VOLUME /var/www/html

EXPOSE 80 443
