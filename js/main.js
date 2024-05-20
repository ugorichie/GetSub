
//Jquery Scripts
$(Document).ready(function(){

    //Show Ip results on click of Sign In button in a modal
    function showResult(content) {
$('#ipInfo').text(content);
$('#myModal').css('display', 'block');
}

// Function to hide the modal
function hideModal() {
$('#myModal').css('display', 'none');
}

// Click event for the close button
$('.close').on('click', function() {
hideModal();
});

//click outside modal to close 
$(window).on('click', function(event) {
    if (event.target.id === 'myModal') {
      hideModal();
    }
});


$('#ipForm').on('submit', function(event){
    event.preventDefault();
    $.ajax({
    url: 'http://ip-api.com/json',
    method: 'GET',
        success: function(response) {
        var result = `
            IP: ${response.query}
            City: ${response.city}
            Region: ${response.regionName}
            Country: ${response.country}
            lat: ${response.lat}
            lon: ${response.lon}
            ISP: ${response.isp}
            `;
        showResult(result);
        },
        error: function() {
        var err = ('An error occurred while retrieving the IP information.');
        showResult(err);
        }
    })
})

});