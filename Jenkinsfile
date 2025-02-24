pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/YASWANTHGEDDA/Technologies.git'
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    echo "Stopping and removing any existing containers..."
                    sh 'docker-compose down || true'
                }
            }
        }

        stage('Build Images') {
            steps {
                script {
                    echo "Building Docker images..."
                    sh 'docker-compose build'
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    echo "Starting Docker containers..."
                    sh 'docker-compose up -d'
                }
            }
        }

        stage('Post Deployment Health Check') {
            steps {
                script {
                    echo "Performing health check..."
                    def frontend_status = sh(script: 'curl -f http://localhost:3000', returnStatus: true)
                    def backend_status = sh(script: 'curl -f http://localhost:5000', returnStatus: true)

                    if (frontend_status != 0 || backend_status != 0) {
                        error("Health check failed for one or more services.")
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                echo "Cleaning up..."
                sh 'docker-compose down'
            }
        }
        success {
            echo "✅ Build and Deployment Successful!"
        }
        failure {
            echo "❌ Build or Deployment Failed!"
        }
    }
}
