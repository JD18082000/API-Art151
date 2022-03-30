    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://genius.p.rapidapi.com/artists/16775/songs",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "genius.p.rapidapi.com",
            "X-RapidAPI-Key": "3a7a7308cfmsheec7ee161b8ed7ep129edejsn4facaaf88f50"
        }

    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    })