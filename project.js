function analyzeSoil() {
    let phValue = parseFloat(document.getElementById("phValue").value);
    let soilColor = document.getElementById("soilColor").value;
    let season = document.getElementById("season").value;

    let cropRecommendations = "";

    if (phValue >= 6 && phValue <= 7 && soilColor === "black") {
        cropRecommendations = "Wheat, Soybean, Cotton";
    } else if (phValue < 6 && soilColor === "red") {
        cropRecommendations = "Groundnut, Maize, Pulses";
    } else if (phValue > 7 && soilColor === "brown") {
        cropRecommendations = "Rice, Sugarcane, Barley";
    } else {
        cropRecommendations = "No specific crops found. Try modifying inputs.";
    }

    document.getElementById("cropOutput").innerText = cropRecommendations;
}