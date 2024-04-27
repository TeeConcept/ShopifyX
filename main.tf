terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx_image" {
  name = "nginx:latest"
}

resource "docker_container" "nginx_container" {
  name  = "web-server"
  image = docker_image.nginx_image.image_id
  ports {
    internal = 80
    external = 8480
  }

}