
// All of the post titles having more than six words

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    const res = json.filter(filterSixWords);
    console.log(res);
  });


function filterSixWords(element){
    let wordsNb = element.title.trim().split(' ').length;
    if(wordsNb > 4){
        return element;
    }
}

// Word frequency map for all of the body contents of the posts

const map = new Map();

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    const res = json.filter(count);
    console.log(map);
  });
  

function count(element){
    let postsBody = element.body.trim().split(' ');
    postsBody.reduce((acc, e) => (acc[e] = ++acc[e] || 1, e), map);
    return map;
}