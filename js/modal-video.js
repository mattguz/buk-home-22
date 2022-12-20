
const video = document.querySelector('.showUp-video'); /*esta clase levanta el modal*/
const closeModal = document.querySelectorAll('.close-video-modal, .video-modal .overlay');

// video
document.addEventListener('DOMContentLoaded', function () {
  /* Toggle Video Modal*/
  toggle_video_modal();
  // Get the element with id="defaultOpen" and click on it
  //document.getElementById("activeOpen").click();
}, false);

function toggle_video_modal() {

  video.addEventListener('click', function (e) {
    e.preventDefault();
    // Grab the video ID from the element clicked
    var id = this.getAttribute('data-youtube-id');
    const autoplay = '?autoplay=1';

    // Don't show the 'Related Videos' view when the video ends
    const related_no = '&rel=0';

    // String the ID and param variables together
    var src = '//www.youtube.com/embed/' + id + autoplay + related_no;

    // Pass the YouTube video ID into the iframe template... Set the source on the iframe to match the video ID
    document.getElementById("youtube").setAttribute("src", src);

    // Add class to the body to visually reveal the modal
    document.body.classList.add('show-video-modal', 'noscroll');
  }, false)

  for (var i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener('click', function (e) {
      // call the close and reset function
      close_video_modal(e);
    }, false)
  }

  // if the ESC key is tapped
  document.body.addEventListener("keyup", function (e) {
    if (e.keyCode == 27) {
      // call the close and reset function
      close_video_modal(e);
    }
  }, false)
}

// Close and Reset the Video Modal
function close_video_modal(event) {
  event.preventDefault();
  // re-hide the video modal
  document.body.classList.remove("show-video-modal");
  document.body.classList.remove("noscroll");
  // reset the source attribute for the iframe template, kills the video
  document.getElementById("youtube").setAttribute("src", '');
}