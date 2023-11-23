pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
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