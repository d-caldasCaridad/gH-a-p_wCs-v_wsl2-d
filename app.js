const myElement = document.createElement('my-element');
document.body.appendChild(myElement);

const script = document.createElement('script');
script.src = './components/index.js';
document.head.appendChild(script);

const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = './css/master.css';
document.head.appendChild(style);

