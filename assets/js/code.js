document.addEventListener('DOMContentLoaded', function () {
    // Selecting the menu button by its ID
    var menuButton = document.getElementById('menu');

    // Adding click event listener to the menu button
    menuButton.addEventListener('click', function () {
        // Toggle the 'active' class on the menu button
        menuButton.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('player');
    const playButton = document.getElementById('play-button');

    // Toggle play/pause on button click
    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Update button icon based on video play state
    video.addEventListener('play', () => {
        playButton.name = 'pause-circle';
        playButton.style.display = 'none';
    });

    video.addEventListener('pause', () => {
        playButton.name = 'play-circle';
        playButton.style.display = 'block';
    });

    // Show play button on hover
    const showPlayButton = () => {
        if (video.paused) {
            playButton.style.display = 'block';
        }
    };

    const hidePlayButton = () => {
        if (!video.paused) {
            playButton.style.display = 'none';
        }
    };

    video.addEventListener('mouseenter', showPlayButton);
    video.addEventListener('mouseleave', hidePlayButton);

    // Ensure the button visibility state is correct when video is clicked
    video.addEventListener('click', () => {
        if (!video.paused) {
            playButton.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const preloader = document.querySelector('.preloaderBg-main');
      preloader.classList.add('fade-out');
      preloader.addEventListener('transitionend', function () {
        preloader.style.display = 'none';
      });
    }, 1750);
  });