document.getElementById("voucher-form").addEventListener("submit", function(event) {
  let code = document.getElementById("voucher").value.trim();

  // Exemple de codes valides (à remplacer par une vérification côté serveur/RADIUS)
  let validCodes = ["ABC123", "XYZ789", "VIP2025"];

  if (!validCodes.includes(code)) {
    event.preventDefault(); // empêche l'envoi si code invalide
    document.getElementById("error-message").classList.remove("hidden");
  } else {
    alert("✅ Code accepté. Connexion en cours...");
  }
});
