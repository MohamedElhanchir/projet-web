$(document).ready(function() {
  $.ajax({
    url: '/articles/contenu',
    method: 'GET',
    success: function(response) {
      displayArticles(response)
    },
    error: function(error) {
      console.error('Une erreur s\'est produite lors de la récupération des articles :', error)
    }
  });
});


function displayArticles(articles) {
  var postsSection = $('#Articles');
  articles.forEach(function(article) {
    if (article.published===true) {
      var articleItem = $('<article>')
      var imageLink=$('<a>').attr('href','article.html?idArticle='+article.id)
      var articleImage = $('<img>').attr('src', article.image).attr('alt',article.image )
      imageLink.append(articleImage)
      articleItem.append(imageLink)

      var articleDiv = $('<div>')
      var articleName = $('<name>').text(article.titre)
      var additionalInfo = $('<h6>')
      additionalInfo.append(' <center> <i class="bi bi-clipboard-data iconInfo"> </i>'+ article.updateAt.split("T")[0] + ' </center>')
      additionalInfo.append('<center><i class="bi bi-chat-dots"></i>  ' + article.commentaire.length + ' </center> ')
      articleDiv.append(articleName)
      articleDiv.append('<h4> <i class="bi bi-person-circle"></i> '+article.Utilisateur.nom+'</h4>')
      articleDiv.append(additionalInfo)
      articleItem.append(articleDiv)
      postsSection.append(articleItem)
      
    }
  
  });}





