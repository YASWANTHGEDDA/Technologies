pipeline {
    agent any

    environment {
        DOCKER_IMAGE_FRONTEND = "yashdocker39/frontend:latest"
        DOCKER_IMAGE_BACKEND = "yashdocker39/backend:latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/YASWANTHGEDDA/Technologies.git'
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    sh '''
                    cd pathfind
                    npm install
                    npm run build
                    docker build -t $DOCKER_IMAGE_FRONTEND .
                    '''
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    sh '''
                    cd server
                    npm install
                    docker build -t $DOCKER_IMAGE_BACKEND .
                    '''
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    sh '''
                    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                    docker push $DOCKER_IMAGE_FRONTEND
                    docker push $DOCKER_IMAGE_BACKEND
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh '''
                    kubectl apply -f k8s/frontend-deployment.yaml
                    kubectl apply -f k8s/backend-deployment.yaml
                    kubectl apply -f k8s/mongo-deployment.yaml
                    '''
                }
            }
        }
    }
}