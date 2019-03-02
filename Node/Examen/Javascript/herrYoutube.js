$(document).ready(function () {
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    });

    function getRequest(searchTerm) {
        var url = 'https://www.googleapis.com/youtube/v3/search';
        var params = {
            part: 'snippet',
            key: 'AIzaSyCl5jMYCafWTBiSla0Ax0rRQaoiPKx9zn4',
            maxResults: 12,
            q: searchTerm
        };

        $.getJSON(url, params, showResults);
    }

    function showResults(results) {
        var html = "";
        var entries = results.items;
        $.each(entries, function (index, value) {
            var current = {};
            current.title = value.snippet.title;
            current.thumbnail = value.snippet.thumbnails.high.url;
            current.user = value.snippet.channelTitle;
            current.description = value.snippet.description;
            html += '<div class="res col-md-4 card">';
            html += '<div class="mb-4 shadow-sm"><h2>' + current.title + '</h2>';
            html += '<img src="' + current.thumbnail + '"></div>';
            html += '<div class="card-body"><p>' + current.description + '</p>';
            html += '<p>' + current.user + '</p></div>';
            html += '</div>';
        }); 

        var busqueda = entries.map((x)=>{
            return {
                title: x.snippet.title,
                thumbnail: x.snippet.thumbnails.high.url,
                description: x.snippet.description,
                user: x.snippet.channelTitle
            };
        });

        sendPUTRequest(busqueda);
        $('#resultados').html(html);
    }

    function sendPOSTRequest(body_object){
        $.post("http://localhost:3000/", body_object , 
            function(data){
                var html = "";
                var i = 0;
                for(var video in data){
                    if(i==0)
                    {
                        html += '<div class="res col-md-4 card">';
                        html += '<div class="mb-4 shadow-sm"><h2>' + data[video] + '</h2>';
                        i = 1;
                    }
                    else
                    {
                      if(i==1)
                      {
                        html += '<img src="' + data[video] + '"></div>';
                        i = 2;
                    }
                    else
                    {
                        if(i==2)
                        {
                          html += '<div class="card-body"><p>' + data[video] + '</p>';
                          i=3;
                      }
                      else
                      {
                        if(i==3)
                        {
                          html += '<p>' + data[video] + '</p></div>';
                          html += '</div>';
                          i=0;
                      }
                  }
              }
          }
      }
      $('#resultados').html(html);
  });
    }

    function sendPUTRequest(body_object) {
        var params = {values: body_object};
        $.ajax({
            method: "PUT",
            url: "http://localhost:3000/",
            data: params
        })
        .done(function( msg ) {
            //alert("Busqueda guardada.");
        })
    }


    $.get("http://localhost:3000/", function(data){
        sendPOSTRequest(data);
    });
});