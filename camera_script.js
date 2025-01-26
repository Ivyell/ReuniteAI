document.addEventListener("DOMContentLoaded", () => {
    const startCamera = async () => {
      const cameraFeed = document.getElementById("cameraFeed");
  
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const cameraStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
            audio: false
          });
          cameraFeed.srcObject = cameraStream;
        } catch (error) {
          alert("Error accessing the camera: " + error.message);
        }
      } else {
        alert("Camera access is not supported in this browser.");
      }
    };
  
    // Start the camera on page load
    startCamera();
  
    // Form submission handling
    const childForm = document.getElementById("childForm");
    const registrationMessage = document.getElementById("registrationMessage");
  
    childForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const location = document.getElementById("location").value.trim();
      const marks = document.getElementById("marks").value.trim();
  
      if (location && marks) {
        registrationMessage.innerHTML = `<p>Child information successfully submitted.</p>`;
        childForm.reset();
        
        // Redirect to the confirmation page after submission
        window.location.href = 'confirmation.html'; // Redirect to third page
      } else {
        registrationMessage.innerHTML = `<p>Please fill in all required fields.</p>`;
      }
    });
  });
  