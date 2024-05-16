document.addEventListener('DOMContentLoaded', function() {
    // Selecting the menu button by its ID
    var menuButton = document.getElementById('menu');
    
    // Adding click event listener to the menu button
    menuButton.addEventListener('click', function() {
        // Toggle the 'active' class on the menu button
        menuButton.classList.toggle('active');
    });
});