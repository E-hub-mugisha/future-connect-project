<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>YouTube Auto Pause</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS (for modal) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div class="container mt-5">
    <h2 class="mb-4">Embedded YouTube Video</h2>
    <div id="player"></div>
</div>

<!-- Modal -->
<div class="modal fade" id="pauseModal" tabindex="-1" aria-labelledby="pauseModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="pauseModalLabel">Video Paused</h5>
      </div>
      <div class="modal-body">
        The video was paused at 1:30. Would you like to continue watching?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button id="resumeBtn" type="button" class="btn btn-primary" data-bs-dismiss="modal">Continue</button>
      </div>
    </div>
  </div>
</div>

<!-- YouTube IFrame API -->
<script>
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    var pauseTime = 90; // Pause at 1:30
    var checkInterval;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: 'dQw4w9WgXcQ', // Replace with your own video ID
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        // Optional: Autoplay when ready
        // event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            checkInterval = setInterval(function () {
                var currentTime = player.getCurrentTime();
                if (currentTime >= pauseTime) {
                    player.pauseVideo();
                    clearInterval(checkInterval);
                    var modal = new bootstrap.Modal(document.getElementById('pauseModal'));
                    modal.show();
                }
            }, 500);
        } else {
            clearInterval(checkInterval);
        }
    }

    // Resume when user clicks "Continue"
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("resumeBtn").addEventListener("click", function () {
            player.playVideo();
        });
    });
</script>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
