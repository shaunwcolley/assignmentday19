let newsArticleList = document.getElementById('newsArticleList')
let articlesArray = Object.values(news)[2]
let sourceArray = Object.values(sources)[1]

urlAndIdArray = []
for(let i = 0; i < Object.values(sourceArray).length; i++){
  let sourceId = Object.values(sourceArray)[i].id
}

console.log(urlAndIdArray)

let newsArticles = articlesArray.map(function(article) {
  let img = ``
  if(article.urlToImage == null){
    img = `<img src="http://www.picserver.org/highway-signs2/images/news.jpg"/>`
  } else{
    img = `<img src="${article.urlToImage}"/>`
  }
  let author = ``
  if(article.author == null){
    author = ``
  } else {
    author = article.author
  }
  let description = ``
  if(article.description == null) {
    description = ``
  } else {
    description = article.description
  }
  return  `<li>
            <h3>${article.title}</h3>
            <h4>${author}</h4>
            <p>${description}</p>
            <p><a href="${article.url}">${article.url}</a></p>
            ${img}
            <span>${article.publishedAt}</span>
          </li>`
})

newsArticleList.innerHTML = newsArticles.join("")
