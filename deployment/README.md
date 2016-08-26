# Sword deployment

Instructions on how to run Sword in containers. It is recommended to run sword in a container. There are essentially two modes of running it. In `dev` which means that you just start the docker containers and volume-mount the content into it and the changes are reflect inside the container in real-time and in `production`/`deployment` when the containers are actually build and can be then started as individual containers with all the content "baked" inside.

## Development



## Deployment

### Requirements

https://docs.docker.com/engine/installation/

```bash
- install docker
- install docker-compose
```
### How to run

#### Docker-compose

```bash
docker-compose up
```

#### Manually

Without `docker-compose`.

```bash
cd ../client
docker build -t sword-client .
cd ../server
docker build -t sword-server .
docker run -d -ti -p 80:80 --name sword-client sword-client
docker run -d -ti          --name sword-server sword-server
```

## Browser

Open browser and navigate to http://localhost:80 (or http://<docker-machine-ip:80).
