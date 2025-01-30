async function searchCrops() {
    const inputBox = document.getElementById("cropinputbox").value.trim().toLowerCase();
    const lang = localStorage.getItem("selectedLanguage") || "en";
  
    // Format the crop name (capitalize first letter)
    const formattedInput = inputBox.charAt(0).toUpperCase() + inputBox.slice(1);
  
    if (!formattedInput) {
      alert("Please enter a crop name.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/api/getCropDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cropName: formattedInput, lang }),
      });
  
      if (!response.ok) {
        throw new Error("Crop not found.");
      }
  
      const cropData = await response.json();
  
      // Update the UI with crop details
      updateUI(cropData, formattedInput);
    } catch (error) {
      alert(error.message);
    }
  }
  
  function updateUI(cropData, formattedInput) {
    const nameElement = document.getElementById("cropname");
    const tempElement = document.getElementById("Temp");
    const seasonElement = document.getElementById("season");
    const durationElement = document.getElementById("Duration");
    const soilElement = document.getElementById("Soil");
    const waterElement = document.getElementById("Water");
    const irrigationElement = document.getElementById("Irrigation");
    const fertilizersElement = document.getElementById("Fertilizers");
    const pestsElement = document.getElementById("Pests");
    const cropImageElement = document.getElementById("cropImage");
    const textarea = document.getElementById("detailsArea");
  
    // Update UI elements with backend data
    nameElement.textContent = formattedInput;
    tempElement.textContent = `${cropData.Temperature}`;
    seasonElement.textContent = `${cropData.BestSeasonToGrow}`;
    durationElement.textContent = `${cropData.Duration}`;
    soilElement.textContent = `${cropData.Soil}`;
    waterElement.textContent = `${cropData.WaterRequirement}`;
    irrigationElement.textContent = `${cropData.Irrigation}`;
    fertilizersElement.textContent = `${cropData.Fertilizers}`;
    pestsElement.textContent = `${cropData.Pests}`;
    cropImageElement.src = cropData.pic;
    textarea.style.visibility = "visible";
  }
// code to send captured data in login page
document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for the sign-in button (if any)
  const signinButton = document.getElementById('signin-btn');
  if (signinButton) {
    signinButton.addEventListener('click', function() {
      // Your click handler code for the sign-in button here
      console.log('Sign-in button clicked');
    });
  }

  // Add event listener for the form submission
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      const username = document.getElementById('usernameholder').value.trim();
      const email = document.getElementById('emailholder').value.trim();
      const password = document.getElementById('passwordholder').value.trim();

      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);

      try {
        // Send a POST request to the backend API for signup
        const response = await fetch('http://localhost:3000/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
        });
        console.log(JSON.stringify({ username, email, password }));
        console.log(response.ok);
        if (response.ok) {
          alert('Sign-up successful!');
          localStorage.setItem("username",username);
          window.location.href = '../index.html'; // Redirect to login page
        } else {
          const errorData = await response.json();
          alert(errorData.error || 'Sign-up failed!');
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
        alert('An unexpected error occurred.');
      }
    });
  }
});


// Log in logic

document.addEventListener('DOMContentLoaded', function () {
  // Handle form submission
  document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Welcome, ${data.username}!`);
        localStorage.setItem('username', data.username); // Save username locally
        window.location.href = 'index.html'; // Redirect after login
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Login failed!');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An unexpected error occurred.');
    }
  });
});






document.addEventListener('DOMContentLoaded', function () {
  const navLink = document.getElementById("signinbutton");
  
  // Check if navLink exists
  if (navLink) {
    const username = localStorage.getItem('username'); // Fetch username from localStorage

    if (username) {
      navLink.textContent = `Welcome, ${username}`;
      navLink.href = 'sign_.html'; // Disable navigation if already signed in
    } else {
      navLink.textContent = 'Sign in';
      navLink.href = 'sign_.html';
    }
  }
});

function chat(){
  window.open("https://t.me/Priyanshuk_01",'_blank'); 
}

