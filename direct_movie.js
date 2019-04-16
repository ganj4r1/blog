function attrURL(name){
 var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
 return results[1] || 0;
}

var id = "";

function movie_direct()
{
  $(document).ready(function(){
    id = attrURL('id');
    $.ajax({
   url : "https://api.themoviedb.org/3/movie/"+id,
   type : "GET",
   data :{"api_key":'37cbf72f710c334975e8796b1022b176'},
   success : function(data)
   {
     // $('#gambar').append('http://image.tmdb.org/t/p/w185/'+data.poster_path);
     $("meta[property='og\\:image']").attr("content", 'http://image.tmdb.org/t/p/w185/'+data.poster_path);
   }

  });
}