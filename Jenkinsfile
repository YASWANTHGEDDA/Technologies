pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Post Deployment Health Check') {
            steps {
                script {
                    sh 'curl -f http://localhost:3000 || exit 1'
                    sh 'curl -f http://localhost:5000 || exit 1'
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'docker-compose down'
            }
        }
        success {
            echo "Build and Deployment Successful"
        }
        failure {
            echo "Build or Deployment Failed"
        }
    }
}
