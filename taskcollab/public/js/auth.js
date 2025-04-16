// login
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const res = await fetch("/admin/backend/auth/login.php", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });
  
    const data = await res.json();
    if (res.ok) {
      window.location.href = data.role === 'admin' ? "/public/dashboard.html" : "/public/dashboard.html";
    } else {
      alert(data.error || "Login failed");
    }
  });
  
  // register
  document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    const res = await fetch("/admin/backend/auth/register.php", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" }
    });
  
    const data = await res.json();
    if (res.ok) {
      alert("Registered! Now log in.");
      window.location.href = "/public/login.html";
    } else {
      alert(data.error || "Registration failed");
    }
  });
  