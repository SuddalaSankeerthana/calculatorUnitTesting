pipeline {
    agent any

    tools {
        nodejs "nodejs"
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