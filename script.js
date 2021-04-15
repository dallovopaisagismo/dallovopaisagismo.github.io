var imagesSize = {};
imagesSize["casa-lago"] = 5;
imagesSize["condominio-alvorada"] = 8;
imagesSize["hotel-vila-real-jau"] = 6;
imagesSize["jardins-fachada"] = 7;
imagesSize["lazer-na"] = 6;
imagesSize["residencia-sv"] = 4;
imagesSize["residencia-tf"] = 6;

function GetUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

function AddImages()
{
    var folder = GetUrlParameter("id");
    var size = imagesSize[folder];
    var images = document.getElementById("images");

    for (i = 1; i <= size; i++) {
        var image = document.createElement("img");
        image.src = "assets/images/".concat(folder, "/", i, ".jpg");
        image.onError = function(){this.style.display='none';};
        images.appendChild(image);
    }
}

AddImages();