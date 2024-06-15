# Docker Course
## @codeWithMosh

In this section:

### What is Docker

- Docker is a platform for building, running and shipping applications

- As a developer, have you encountered situations where your application works on your machine but does not work on another machine? *That happens, yes!*

Here are 3 reason that could happen..
1. One or more files missing
2. Software mismatch
3. Different configuration settings


### Virtual Machines vs Containers

- Container vs Virtual Machine

- Container: An isolated environment for runnung an application
    Pros:
        Allow running multiple apps in isolation
        Are lightweight
        Use host OS
        Start quickly
        Needs less hardware resources

        ![alt text](<Screenshot 2024-06-14 at 09.52.54.png>)

- VM: An abstraction of a machine (physical hardware)
    Cons: 
        Each VM needs a full-blown OS
        Slow to start
        Resource intensive


### Architecture of Docker

- Keyword: Hypervisor
This is a software used to create and manage virtual machines 
i.e. VirtualBox | VMWare | HyberV (Windows only)


### Installing Docker 

- To get docker, go to https://docs.docker.com/get-docker/
- Read and understand the system requirements
- Download the docker app for your system 
- Drag and drop the docker icon into `Applications`
- Start the docker app


### Development Workflow

- After installing and starting the docker app, you can check for the version and other docker preperties on your machine terminal using `docker version`
- When this is done and yoy get a correct response, you are good to go!
- To dockerize an application, add a file `Dockerfile` that would convert your app into an image (Docker Image)

#### IMAGE
- A cut-down OS
- A runtime environment i.e. Node, Python
- Application files
- Third-oarty libraries
- Environment variables

#### Let's highlight 4 steps to deploy a simple JS app vs ...
1. Start with an OS
2. Install Node (or other runtime environment)
3. Copy app(s) files
4. Run `node app.js` (for vanilla JS programs)

#### DOCKER
1. Add or create docker file  with *touch* `Dockerfile`
2. Write instructions to package your app on Docerfile
    `FROM node:alpine` 
    `COPY ./app` 
    `WORKDIR /app`
    `CMD node app.js`
3. Go to your command line or terminal, and run
    `docker build -t the-app .` 
    where -t is the tag, and "." is the current working directory
    `docker image ls`
    shows you the images in a docker directory
    `docker run the-app`
    to run the image, (after verifying your image in the directory)

#### Linux
- Linux is an open-source software. Therefore many individuals and communities have created their own version of Linux, with Linux distribution (distros) that support almost same set of commands.

#### Linux Distros
- Alpine
- CentOS
- Debian
- Fedora
- Ubuntu (Over 10M downloads.. from hub.docker.com/_ubuntu/)

Run `docker ps -a` to see all running processes
Run `docker run -it ubuntu` to start and interact with a container.
*root@2f78976456789:/#* -- This response is called a shell, which simply represents a root user interacting with a shell.

Run `echo $0` to see the location of the shell program
*/bin/bash* -- Bash means Bourne Again Shell... as Steve Bourne was the first person to run a shell program.

Run `whoami` to see the access control manager of the shell
Run `history` to see a list of the commands previously run
Run `apt install` to install packages on your linux/ docker machines
Run `apt update` before installing any packages, to update your linux package managers
Run `apt remove` to remove or delete a package or dependency

Some Nano commands (Nano is a text editor for linux)
0. `nano *file*` -- write to a file
1. `cat *file*` -- view or edit files
2. `more *file*` -- view for longer files
3. `less *file*` -- view backwards for more
4. `head -n *file*` -- view first few lines of file
5. `tail -n *file*` -- view last few lines of a file
6. `echo *content* > *file*` -- write a content to a file
7. `ls -l` -- get the long listing of files in a direcrory
8. `ls -1` -- get a one-liner listing of files in a directory