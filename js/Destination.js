document.addEventListener('DOMContentLoaded', () => {
  let destinations = [];

  fetch('../../data/data.json')
    .then(response => response.json())
    .then(data => {
      destinations = data.destinations;
      displayDestination('Moon');
    })
    .catch(err => {
      console.error('Error fetching json', err);
    });

  function displayDestination(name) {
    const destination = destinations.find(dest => dest.name === name);
    
    if (destination) {
      console.log('Destination:', destination);  
      console.log('Image path:', destination.images.png);
      console.log('Description', destination.description); 

      document.getElementById('destinationName').innerText = destination.name;
      document.getElementById('destinationDescription').innerText = destination.description;
      document.getElementById('distance').innerText = destination.distance;
      document.getElementById('travel').innerText = destination.travel;
      document.getElementById('destinationImage').src = destination.images.png;
    } else {
      console.error('Destination not found:', name);
    }
  }

  // Attach the display function to each link
  document.querySelectorAll('#moonLinks ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();  // Prevent the default anchor behavior
      displayDestination(event.target.textContent.trim());  // Display the destination 
    });
  });
});
