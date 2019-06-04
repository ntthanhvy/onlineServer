module.exports = {
    apps: [{
      name: 'onlineAPIServer',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-188-89-217.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/onlineAPIServer.pem',
        ref: 'origin/master',
        repo: 'git@github.com:ntthanhvy/onlineServer.git',
        path: '/home/ubuntu/onlineServer',
        'post-deploy': 'npm install && ~/node_modules/.bin/pm2 startOrRestart ecosystem.config.js'
      }
    }
  }