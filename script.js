const form = document.getElementById("agriForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  resultDiv.innerText = "⏳ Getting AI advice...";

  const data = {
    crop: document.getElementById("crop").value,
    city: document.getElementById("city").value,
    moisture: document.getElementById("moisture").value,
    ph: document.getElementById("ph").value
  };

  try {
    const response = await fetch(
      "https://reliable-fulfillment.up.railway.app/webhook/agri-advice",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();
    resultDiv.innerText = result.advice;

  } catch (error) {
    resultDiv.innerText = "❌ Error connecting to AI service";
  }
});
