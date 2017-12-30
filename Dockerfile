FROM golang:1.9-alpine as node-prune

# Install Git and compile node-prune
RUN apk update && \
    apk add git && \
    go get github.com/tj/node-prune/cmd/node-prune

# App image
FROM node:8.9-alpine as budget-app
WORKDIR /home/node/budget-app

# Install Tini
RUN apk update && \
    apk add tini

# Copy node-prune from previous build image
COPY --from=node-prune --chown=node:node /go/bin/node-prune ./

COPY --chown=node:node app/package.json app/package-lock.json ./

# Install npm packages, clean the cache,
# run node-prune and deletes it
RUN npm install && \
    npm cache clean --force && \
    ./node-prune && \
    rm node-prune

COPY --chown=node:node app/ ./

USER node

EXPOSE 3000

ENTRYPOINT [ "/sbin/tini", "--" ]
CMD [ "node", "app.js" ]
