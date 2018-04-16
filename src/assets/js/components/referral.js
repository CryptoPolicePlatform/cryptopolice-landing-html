(function(){
    var referral = getUrlParameter('invitation');

    if (referral) {
        Cookies.set('referral', referral, { domain: 'cryptopolice.com' });
    }
})();