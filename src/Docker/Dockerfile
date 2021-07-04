FROM node:10 as ember_app

COPY /src/ember-app /src/ember-app

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  cd /src/ember-app/; \
  ember build --environment=docker

FROM mono:latest as backend

COPY /src/Chairs /src/Chairs

RUN \
 cd /src/Chairs ;\
 nuget restore Chairs.sln; \
 msbuild /p:Configuration=Release Chairs.sln

FROM flexberry/alt.p8-apache2-mono:latest

MAINTAINER mail@flexberry.net

COPY --from=backend /src/Chairs/ODataBackend /var/www/vhosts/project/
COPY --from=ember_app /src/ember-app/dist /var/www/vhosts/project
COPY /src/Docker/vhosts.conf /conf
