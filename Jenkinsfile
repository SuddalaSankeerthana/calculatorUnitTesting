pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18' 
            args '-p 3001:3001' 
        }
    }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }}
    stage('Run') {
      steps {
        sh 'npm run run'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
    post {
        always{
            emailext body: "Caculator repository CI/CD status message",
        }
     }}