## SWoRD

### Configuration
- **Platform:** node
- **Framework**: express
- **Template Engine**: handlebars
- **Unit Testing**: mocha
- **Database**: mongodb
- **Authentication**: email

### Start

#### Docker (Ubuntu 16.04 LTS)

    # Add GPG key
    sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

    # Add repository
    echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list

    # Install Docker
    sudo apt update
    sudo apt install docker-engine

    # Start docker service
    sudo service docker start

    # Verify installation
    sudo docker run hello-world

#### MongoDB

    # Start docker container
    docker run --name sword-db -d mongo

#### Express server

    # Install
    npm install

    # Start server
    npm start
