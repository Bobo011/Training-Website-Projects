const buttonEl = document.querySelector('.movie')
const video = document.querySelector(".video");
const closeButton = document.querySelector(".close-button");
const videoPopup = document.querySelector(".video-popup");


// Add click event listener to popup button
buttonEl.addEventListener("click", function() {
   // Show the video popup and hide the background
   
   videoPopup.style.display = "block";
   document.body.style.overflow = "hidden";
   
   // Set the video source to start from the beginning
   video.currentTime = 0;
 });
 
 // Add click event listener to close button
 closeButton.addEventListener("click", function() {
   // Hide the video popup and show the background
   videoPopup.style.display = "none";
   document.body.style.overflow = "auto";
   
   // Pause the video
   video.pause();
 });
 
 // Add event listener to detect when the video ends
 video.addEventListener("ended", function() {
   // Hide the video popup and show the background
   videoPopup.style.display = "none";
   document.body.style.overflow = "auto";
 });
 
 // Add event listener to detect when the user clicks outside the video popup
 window.addEventListener("click", function(event) {
   if (event.target == videoPopup) {
     // Hide the video popup and show the background

     videoPopup.style.display = "none";
     document.body.style.overflow = "auto";
     
     // Pause the video
     video.pause();
   }
 });