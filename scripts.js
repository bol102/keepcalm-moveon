$('#breathe-button').click(function() {
    $('#b-text, #p-text, #r-text').hide();
    $('#b-text').show();
});

$('#pause-button').click(function() {
    $('#b-text, #p-text, #r-text').hide();
    $('#p-text').show();
});

$('#resume-button').click(function() {
    $('#b-text, #p-text, #r-text').hide();
    $('#r-text').show();
});