function video_trailer(idmovie)
{
 var player = ""; 
 
 $(document).ready(function(){
 
  $.ajax({
   url:'https://api.themoviedb.org/3/movie/'+idmovie+'/videos',
   type:"GET",
   data:{"api_key":'37cbf72f710c334975e8796b1022b176'},
   success: function(data)
   {
     
      $('#video-trailer').append(
    '<iframe width="96%" height="410px" src="https://www.youtube.com/embed/'+data.results[1].key+'" frameborder="0" allowfullscreen></iframe>');
   }
  });
 
 });
 
 }