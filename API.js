function getValue() {
    var client_id = "FZvo0rc6euQ1754zYWmdb";
    var client_secret = "6J00idLsJyIoasudj4lo5SftSQPmCNdipdnjLRwM"
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://api.aerisapi.com/lightning/chicago,il?format=json&filter=cg&limit=10&client_id=${client_id}&client_secret=${client_secret}`,
        "method": "GET",
      

    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}