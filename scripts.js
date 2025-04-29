$(document).ready(function () {
    // Check if the user has previously set dark mode in localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        $('body').addClass('dark-mode');
    }

    // Toggle dark mode on button click
    $('#dark-mode-toggle').click(function () {
        $('body').toggleClass('dark-mode');

        // Save the preference in localStorage
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });
});
