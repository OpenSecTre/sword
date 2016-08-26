FROM        mhart/alpine-node:6.4

MAINTAINER  Mika Turunen <mika.turunen@digia.com>

RUN         mkdir -p /usr/src/app
WORKDIR     /usr/src/app
COPY        . /usr/src/app
RUN         npm install

EXPOSE      3000
CMD         [ "npm", "start" ]
