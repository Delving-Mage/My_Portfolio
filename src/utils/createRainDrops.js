export const createRaindrops = () => {
    const numRaindrops = 100; // Number of raindrops to create
    const raindropContainer = document.getElementById("raindrop-container");
    raindropContainer.innerHTML = ""; // Clear previous raindrops

    for (let i = 0; i < numRaindrops; i++) {
      const raindrop = document.createElement("div");
      raindrop.classList.add("raindrop");
      raindrop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration
      raindropContainer.appendChild(raindrop);
    }
  };
