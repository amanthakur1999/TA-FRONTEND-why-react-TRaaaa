var input = document.querySelector('input');
var ul = document.querySelector('ul');

var allMovie = [];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovie.push({
      name: event.target.value,
      watched: true,
    });
    event.target.value = '';
    createUI();
  }
});

var elm = React.createElement;

function createUI() {
  event.preventDefault();

  let map = allMovie.map((each) => {
    var list = elm(
      'li',
      { className: 'list' },
      elm('input', {
        type: 'checkbox',
        className: 'checkbox',
        'each.watched': 'true',
      }),
      elm('h2', {}, each.name),
      elm('p', {}, '❌')
    );
    return list;
  });
  ReactDOM.render(map, ul);
}
