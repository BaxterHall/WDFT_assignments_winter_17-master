
$(".search").submit(function (e) {
    e.preventDefault();

    let input = $('#searchBar').val();
    
   



window.location.href="/search/"+ input;


});

