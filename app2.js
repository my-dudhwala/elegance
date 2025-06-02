const apiURL = "https://sheetdb.io/api/v1/abc123xyz456"; // Replace with your actual API URL

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('dress-container');
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'dress';
      card.innerHTML = `
        <img src="${item['Image URL']}" alt="${item.Name}">
        <h3>${item.Name}</h3>
        <p>Price: ${item.Price}</p>
        <p>${item.Description}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching dress data:', error);
  });
