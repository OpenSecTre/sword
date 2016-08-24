# Sword deployment

Instructions on how to run Sword in containers.

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
