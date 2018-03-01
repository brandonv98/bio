import React from 'react';

const LoadingNpm = () => {

  let i = 0;
  let p = 0;
  var txt = 'npm install';
  const devServer = "Starting development server....";
  const afterText = [
    "name", "github_web_pages",
    "version", "0.1.0",
    "private", true,
    "dependencies",
      "bootstrap", "^4.0.0",
      "react", "^16.2.0",
      "react-bootstrap", "^0.32.1",
      "react-dom", "^16.2.0",
      "react-router-dom", "^4.2.2",
      "react-scripts", "1.1.1",
    ];
  var speed = 50;
  var speedtwo = 500;
  var speedThree = 600;


  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else if (i === txt.length) {
        setTimeout(afterInstall, speedtwo);
    }
  }

  function afterInstall() {
      if (p < afterText.length) {
      document.getElementById("text").innerHTML += afterText[p] + '<br>';
      p++;
      setTimeout(afterInstall, speedThree);
  } else if (p === afterText.length) {
    document.getElementById("demo").setAttribute('style', 'display: none');
    document.getElementById("text").setAttribute('style', 'display: none');
    document.getElementById("dev").innerHTML = devServer;
        setTimeout(afterInstall, speedtwo);
  }
}

const divStyle = {
  height: '50px',
}

  return (
    <div style={divStyle}>
      <button onClick={typeWriter}>Click me</button>
      <p id="demo"></p>
      <p id="text"></p>
      <p id="dev"></p>
    </div>
  );
}
export default LoadingNpm;
