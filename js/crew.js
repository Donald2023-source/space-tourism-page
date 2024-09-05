document.addEventListener('DOMContentLoaded', () => {
    let crew = [];

    // Fetch data from JSON file
    fetch('../../data/data.json')
        .then(response => response.json())
        .then(data => {
            crew = data.crew;
            displayCrew('Commander');  // Display deflt page
        })
        .catch(err => {
            console.error('Error fetching json:', err);
        });

    window.displayCrew = function (role, element) {  
        const crewMember = crew.find(crew => crew.role === role);

        if (crewMember) {
            const textContainer = document.querySelector('.text-container');
            const crewImage = document.getElementById('crewImage');

            textContainer.classList.remove('active');
            crewImage.classList.remove('active');

            setTimeout(() => {
                document.getElementById('crewName').innerText = crewMember.name;
                document.getElementById('crewRole').innerText = crewMember.role;
                document.getElementById('crewBio').innerText = crewMember.bio;
                document.getElementById('crewImage').src = crewMember.images.png;

                textContainer.classList.add('active');
                crewImage.classList.add('active');
            }, 300);  

            document.querySelectorAll('#crewLinks li a').forEach(link => {
                link.classList.remove('active');
            });

            if (element) {
                element.classList.add('active');
            }
        } else {
            console.log('Crew member not found:', role);
        }
    }


    document.querySelectorAll('#crewLinks ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const role = event.target.textContent.trim(); 
            displayCrew(role, event.target);  
        });
    });
});
