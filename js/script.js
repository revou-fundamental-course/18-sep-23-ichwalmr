const form = document.getElementById("form-list");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah form dari pengiriman default

  const nama = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Validasi Nama
  if (nama.trim() === "") {
    alert("Nama harus diisi");
    return false;
  }

  // Validasi Email
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Email tidak valid");
    return false;
  }

  // Jika semua validasi berhasil
  alert("Form berhasil diisi!");
  return true;
});
