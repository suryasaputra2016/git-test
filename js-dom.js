const container = document.querySelector('.container');

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!"
paragraph.style.color = 'red';

container.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = 'blue';

container.appendChild(h3);

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = '2px solid black';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div"

const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!"

div.append(h1, paragraph2);

container.appendChild(div);



