// Endpoint Data
const DOMAIN = 'http://newsapi.org/';
const apiKey = '590e2f3ad3a7403499ccbcd8a5986d5f';
const standardUrl = `${DOMAIN}v2/top-headlines?apiKey=${apiKey}`



// Async function/axios 
async function newsWorks(value) {
  let news = `${standardUrl}&q=${value}`;
  

  try {
    let response = await axios.get(news);
    console.log(response.data.articles);

    for (let i = 0; i < response.data.articles.length; i++) {
      showNews(response.data.articles[i]);
    }
    return response;
  } catch (err) {
    console.error(err);
  }
};




// making each article a list element. need to add image to each li element and append

function showNews(data) {
  let articles = document.querySelector('.urls')
  
  const newData = `
  
    <h3>${data.title}</h3>
    <h2><a href="${data.url}" target="_blank" id="webpage"> Click Here to Read!📰 </a></h2>
    <img id="image" src="${data.urlToImage}"/>
    
    <h4>${data.description}</h4>
    <p>${data.author}</p>
  
  
    
  
  `
  articles.insertAdjacentHTML('beforeend', newData);
};




// event handler function
let btn = document.querySelector('#push')
btn.addEventListener('submit', (e)=> {
  e.preventDefault();
  removeNews()
  let input = document.querySelector('#input').value
  newsWorks(input)
})


// removing info
function removeNews() {
  const remove = document.querySelector('.urls');
  while (remove.lastChild) {
    remove.removeChild(remove.lastChild)
  }

};



