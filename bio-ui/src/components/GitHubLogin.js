var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://github.com/login/oauth/token?user=email&read=user&read=org',
  'headers': {
    'Cookie': 'Cookie_1=value; _device_id=dfb8231e3bed59033ac2fb924d32a3fe; _octo=GH1.1.518464387.1623399591; logged_in=no'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
    console.log(response.body);
});

import React, { Component } from 'react'

export class GitHubLogin extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default GitHubLogin

