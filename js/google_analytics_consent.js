// Function to load the Google Analytics script
function loadGoogleAnalytics() {
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-N67S442EFL';  
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-N67S442EFL'); 
}

// Check if consent has already been given
const consent = localStorage.getItem('google_analytics_consent');
if (consent === 'accepted') {
    loadGoogleAnalytics();
} else if (consent === null) {
    // Show consent banner if no decision has been made
    document.getElementById('consent-banner').style.display = 'block';
}

// Handle "Accept" button click
document.getElementById('accept-consent').addEventListener('click', function() {
    localStorage.setItem('google_analytics_consent', 'accepted');
    loadGoogleAnalytics();
    document.getElementById('consent-banner').style.display = 'none';
});

// Handle "Reject" button click
document.getElementById('reject-consent').addEventListener('click', function() {
    localStorage.setItem('google_analytics_consent', 'rejected');
    document.getElementById('consent-banner').style.display = 'none';
});