let url = 'http://jsonplaceholder.typicode.com/comments?postId=42';

fetch(url)
.then(response => response.json() )
.then(data => {
  let str = JSON.stringify(data, null, '\t');
  document.querySelector('#output pre').textContent = str;
})
.catch(err => {
  let nm = err.name;
  let msg = err.message;
  alert(`CATCH: ${nm} ${msg}`)
});