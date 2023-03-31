data "aws_iam_policy" "managed_execution_policy" {
  name = "AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role" "execution_role" {
  name = "execution_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "execution_role_policy_attachment" {
  role       = aws_iam_role.execution_role.name
  policy_arn = data.aws_iam_policy.managed_execution_policy.arn
}

resource "aws_ecr_repository" "portal_repo" {
  name  = "${var.project_name}-portal"
  force_delete = true
}

resource "aws_ecs_cluster" "portal_cluster" {
  name = "${var.project_name}-portal-cluster"
}

module "portal_container_definition" {
  source  = "cloudposse/ecs-container-definition/aws"
  version = "0.58.2"

  container_name  = "portal"
  container_image = "209984124586.dkr.ecr.us-east-1.amazonaws.com/model-project-portal:1.0.0"
  log_configuration = {
    "logDriver" : "awslogs",
    "options" : {
      "awslogs-group" : "model-project-portal",
      "awslogs-region" : "us-east-1",
      "awslogs-stream-prefix" : "streaming"
    }
  }
}

resource "aws_ecs_task_definition" "portal_task" {
  container_definitions    = module.portal_container_definition.json_map_encoded_list
  family                   = var.project_name
  requires_compatibilities = ["FARGATE"]

  cpu                = 1024
  memory             = 2048
  network_mode       = "awsvpc"
  execution_role_arn = aws_iam_role.execution_role.arn

}

resource "aws_security_group" "service_sg" {
  name        = "allow_tls"
  description = "allow"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description = "TLS from VPC"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_tls"
  }
}

resource "aws_ecs_service" "portal_service" {
  name                 = "ModelPortalService"
  cluster              = aws_ecs_cluster.portal_cluster.arn
  launch_type          = "FARGATE"
  force_new_deployment = true

  deployment_maximum_percent         = 200
  deployment_minimum_healthy_percent = 0
  desired_count                      = 1
  task_definition                    = "${aws_ecs_task_definition.portal_task.family}:${aws_ecs_task_definition.portal_task.revision}"

  network_configuration {
    assign_public_ip = true
    subnets          = module.vpc.public_subnets
    security_groups  = [aws_security_group.service_sg.id]
  }
}