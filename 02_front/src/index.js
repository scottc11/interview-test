import './styles.css';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Hello Webpack";
    element.classList.add("app");

    return element;
}

document.body.appendChild(component());