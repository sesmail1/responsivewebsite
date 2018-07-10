function windowSizer() {
        $('#aboutcard, #summary').click(() => {
        $('#summary').toggle();
    });
};


function disabledSizer(valid) {
    if (valid == true) {
        $('#aboutcard, #summary').off('click');
    }
    if (valid == false) {
        windowSizer();
    }
};

$(window).resize(function() {
    // This will fire each time the window is resized:
    if($(window).width() < 801) {
        disabledSizer(false);
    } else {
            disabledSizer(true);
            $('#summary').show();
    }
}).resize();