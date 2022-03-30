function getValue() {
    $.ajax({
        type:"Get",
        dataType: 'json',
        url: "https://genius.p.rapidapi.com/artists/16775/songs",
        async: false,
        crossDomain:true,
        
        success: function(respose){
            console.log();
        }
    });
}