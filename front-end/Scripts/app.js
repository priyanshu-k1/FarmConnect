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
  