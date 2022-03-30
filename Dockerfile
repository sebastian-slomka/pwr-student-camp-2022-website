FROM node:lts-alpine3.15

LABEL maintainer="s.k.slomka@gmail.com"
LABEL description="PWR Student Camp 2022 Webiste"

RUN apk add \
  bash

SHELL ["/bin/bash", "-euo", "pipefail", "-c"]

# ENV USER="root"
# ENV GROUP="website"
# RUN addgroup -S ${GROUP} \
#   && adduser -S ${USER} -G ${GROUP} -s /bin/sh -D

# USER ${USER}

WORKDIR /home/

COPY package.json .
COPY package-lock.json .
RUN npm install --silent

WORKDIR /home/app

EXPOSE 3000

CMD ["npm", "start"]