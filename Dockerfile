FROM node:lts-alpine3.15

LABEL maintainer="s.k.slomka@gmail.com"
LABEL description="PWR Student Camp 2022 Webiste"

RUN apk add \
  bash

SHELL ["/bin/bash", "-euo", "pipefail", "-c"]

ENV USER="website"
ENV GROUP="website"
RUN addgroup -S ${GROUP} \
  && adduser -S ${USER} -G ${GROUP} -s /bin/sh -D

USER ${USER}

WORKDIR /home/${USER}

COPY --chown=${USER}:${GROUP} package.json .
COPY --chown=${USER}:${GROUP} package-lock.json .
RUN npm install --silent

WORKDIR /home/${USER}/app

EXPOSE 3000

CMD ["npm", "start"]