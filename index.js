function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        const p = document.createElement("p");
        p.textContent = "New user ID: " + id;
        document.body.appendChild(p);
      })
      .catch(error => {
        const p = document.createElement("p");
        p.textContent = "Error: " + error.message;
        document.body.appendChild(p);
      });
  }
  