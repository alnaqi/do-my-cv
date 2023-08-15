# Getting Started with Create React App


## Available Scripts


### In the project directory run:
```
npm install
```


### In the project directory, you can run:
```
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Demo App:
[do-my-cv App](https://do-my-cv.web.app/)


### Deployment

do the following:
<ol>
  <li><code>npm run build</code></li>
  <li><code>npm install -g firebase-tools</code></li>
  <li><code>firebase login</code></li>
  <li><code>firebase init</code>:</br>
  <ul>
    <li>Select: “Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys”. </li>
    <li>Select “Use an existing project”</li>
    <li>What do you want to use as your public directory? answer: <b>build</b></li>
    <li>Configure as a single-page app (rewrite all urls to /index.html)? answer: <b>Yes</b></li>
    <li>...</li>
  </ul>
  </li>
  <li><code>firebase deploy</code></li>
</ol>
