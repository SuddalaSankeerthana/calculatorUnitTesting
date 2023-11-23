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
    post{
        failure {
            mail to:"suddalakeerthana@gmail.com",
            subject: 'Failure Message',
            body: "${env.JOB_NAME} - Build #${env.BUILD_NUMBER} ${currentBuild.currentResult}, Build stage :${currentBuild.description}"
        }
        success {
            mail to: 'suddalakeerthana@gmail.com',
            subject: "Success",
            body: "Successfully passed all the stages"
        }
    }
  }
  