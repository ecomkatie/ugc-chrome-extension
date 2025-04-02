console.log("🟣 UGC Job Board Extension is running on Vidsy");

// Run when the page is fully loaded
window.addEventListener("load", () => {
  // Select all job cards on the Vidsy Creator dashboard
  const jobCards = document.querySelectorAll(".brief-card");

  if (jobCards.length === 0) {
    console.log("No job listings found on this page.");
    return;
  }

  // Loop through each job and collect details
  const jobs = [...jobCards].map((card) => {
    const title = card.querySelector("h2")?.innerText || "Untitled";
    const price = card.querySelector(".price")?.innerText || "No price";
    const deadline = card.querySelector(".brief-meta")?.innerText || "No deadline";
    const brand = card.querySelector(".brief-brand-logo img")?.alt || "Unknown brand";

    return {
      platform: "Vidsy",
      title,
      brand,
      price,
      deadline,
      scrapedAt: new Date().toISOString(),
    };
  });

  console.log("✅ Scraped Vidsy Jobs:", jobs);
});
