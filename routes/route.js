exports.home = function(req, res) {
    // Print request headers
    console.log('Request Headers (home):', req.headers);

    // Render the home page
    res.render('home');

    // Print response headers
    console.log('Response Headers (home):', res.getHeaders());
};

exports.login = function(req, res) {
    // Print request headers
    console.log('Request Headers (login):', req.headers);

    // Render the login page
    res.render('login');

    // Print response headers
    console.log('Response Headers (login):', res.getHeaders());
};
