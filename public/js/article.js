

$(document).ready(function() {
  var urlParams = new URLSearchParams(window.location.search)
  var articleId = urlParams.get('idArticle')

   $.ajax({
      url: '/articles/contenuById'+articleId,
      method: 'GET',
      success: function(response) {
        displayArticle(response)
      },
      error: function(error) {
        console.error('Une erreur s\'est produite lors de la récupération des articles :', error)
      }
    })
  })
  
  
  function displayArticle(article) {
    var postsSection = $('#Articles')
  
     
        var articleItem = $('<article>')
        var articleImage = $('<img>').attr('src', article.image).attr('alt', article.image)
        articleItem.append(articleImage)
  
        var articleDiv = $('<div>')
        var articleName = $('<name>').text(article.titre)
        articleDiv.append(articleName)
         var articleParagraph=$('<p>').text(article.contenu)
        articleDiv.append(articleParagraph)
         
        var buttonDiv = $('<div>')

        for (let index = 0; index < article.CategorieArticle.length; index++) {
          var articleName = $('<button>').attr('disabled','disabled').text(article.CategorieArticle[index].categorie.nom)
          buttonDiv.append(articleName)
        }
        
        articleDiv.append(buttonDiv)
        articleDiv.append(`<a href="mailto:${article.Utilisateur.email}"><h4> <i class="bi bi-person-circle"></i> `+article.Utilisateur.nom+`</h4></a>`)

        var commentDiv=$('<div>')
        var commentLenght=$('<h2>').text( article.commentaire.length+' Commentaires')
        commentDiv.append(commentLenght)
        var commentContent=$('<div id="CommentDiv"> ')
        for (let index = 0; index < article.commentaire.length; index++) {
          commentContent.append(`<a href="mailto:${article.Utilisateur.email}"><h3 class="comment">`+
          article.commentaire[index].email +'</h3></a> <h6 class="comment">'+article.commentaire[index].updateAt+'</h6> <p class="comment">'+article.commentaire[index].contenu+'</p>');
        }
        commentDiv.append(commentContent);
        articleDiv.append(commentDiv)
        articleItem.append(articleDiv)
        postsSection.append(articleItem);
    };
  
  
  
  
  
  
   
    