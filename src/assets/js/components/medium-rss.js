$(function() {
        var $content = $('#medium_feed');
        var data = {
            rss_url: 'https://medium.com/feed/@CryptoPolice'
        };
        var output = "";

        $.get('https://api.rss2json.com/v1/api.json', data, function(response) {
            if (response.status == 'ok') {
                $.each(response.items, function(k, item) {
                    var tagIndex = item.description.indexOf('<img');
                    var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex;
                    var srcStart = srcIndex + 5;
                    var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart;
                    var src = item.description.substring(srcStart, srcEnd);

                    output += '<li><a href="' + item.link + '" target="_blank" ><img src="' + src + '" width="130"></a>';
                    output += '<a href="' + item.link + '" target="_blank" >' + item.title + '</h2></a></li>';
                });
                $content.html(output);
            }
        });
});
