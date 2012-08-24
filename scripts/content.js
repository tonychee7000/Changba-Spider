$(document).ready(function()
        {
            var mp3add=$('div#ktvplayer audio').attr('src');
            chrome.extension.onRequest.addListener(function(request,sender,sendResponse){
                if(request.msg=="mp3add")
                {
                    sendResponse({address:mp3add});
                }
            });
        });
