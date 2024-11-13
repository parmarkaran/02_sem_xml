const apiUrl = "https://theaudiodb.com/api/v1/json/2/album.php?i=112024";

$(document).ready(function() {
    // Fetch data from the API
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            // Call function to display data
            displayAlbums(data);
        },
        error: function(error) {
            console.log("Error fetching data:", error);
        }
    });
});
// Function to dynamically display albums in HTML
function displayAlbums(data) {
    const albumsContainer = $('.Albums .container .row'); // Update selector based on your HTML
    data.forEach(album => {
        console.log(album);
        
        const albumHtml = `
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 margin">
                <div class="Albums-box">
                    <figure>
                        <a href="${album.image_url}" class="fancybox" rel="ligthbox">
                            <img src="${album.image_url}" class="zoom img-fluid " alt="${album.title}">
                        </a>
                        <span class="hoverle">
                            <a href="${album.image_url}" class="fancybox" rel="ligthbox"><img src="images/search.png"></a>
                        </span>
                    </figure>
                    <h4>${album.title}</h4>
                    <p>Artist: ${album.artist}</p>
                </div>
            </div>
        `;
        albumsContainer.append(albumHtml);
    });
}
