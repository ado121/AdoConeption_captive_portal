// Gestion de l’affichage du message d’erreur GDMS
document.addEventListener("DOMContentLoaded", function () {
  const errorEl = document.getElementById("error-message");

  if (errorEl) {
    const errorText = errorEl.textContent.trim();

    if (!errorText || errorText === "$(error)") {
      errorEl.style.display = "none"; // cacher si pas de message
    } else {
      errorEl.style.display = "block"; // afficher si GDMS a injecté une erreur
    }
  }
});

// Si tu veux ajouter une vérification locale (optionnelle)
// Attention : en vrai, c’est GDMS qui valide le voucher
document.getElementById("voucher-form").addEventListener("submit", function(event) {
  let code = document.getElementById("voucher").value.trim();

  // Exemple de codes valides côté client (à supprimer en prod)
  let validCodes = ["ABC123", "XYZ789", "VIP2025"];

  if (!validCodes.includes(code)) {
    event.preventDefault(); // empêche l’envoi si code invalide
    const errorEl = document.getElementById("error-message");
    if (errorEl) {
      errorEl.textContent = "❌ Code invalide ou expiré.";
      errorEl.style.display = "block";
    }
  } else {
    alert("✅ Code accepté. Connexion en cours...");
  }
});
