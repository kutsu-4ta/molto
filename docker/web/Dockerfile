FROM php:8.0.3-apache

RUN docker-php-ext-install mysqli \
    && docker-php-ext-enable mysqli

# mod_rewriteを有効する
RUN cd /etc/apache2/mods-enabled \
    && ln -s ../mods-available/rewrite.load

COPY php.ini /usr/local/etc/php/