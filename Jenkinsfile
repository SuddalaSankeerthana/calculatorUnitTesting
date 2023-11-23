pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run') {
      steps {
        echo 'npm run run'
      }
    }

    stage('Test') {
      steps {
        echo 'npm run test'
      }
    }

  }
}