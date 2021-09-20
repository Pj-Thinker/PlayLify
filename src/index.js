import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting, { add } from 'splitting';
import netlifyIdentity from 'netlify-identity-widget';

Splitting({
  target: '[data-splitting]',
  by: 'chars',
  key: null,
});

netlifyIdentity.init();

document.querySelector('.loginBtn').addEventListener('click', () => {
  netlifyIdentity.open();
  netlifyIdentity.on('login', (user) => {
    console.log('welcome user');
  });
});

document.querySelector('.loginBtn2').addEventListener('click', () => {
  const user = netlifyIdentity.currentUser();

  fetch('/.netlify/functions/protected-function', {
    headers: {
      Authorization: 'Beare ' + user.token.access_token,
    },
  })
    .then((x) => x.json())
    .then(console.log('some'));
});
