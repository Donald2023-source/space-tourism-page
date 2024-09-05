document.addEventListener('DOMContentLoaded', () => {
    let technology = [];

    fetch ('../../data/data.json')
    .then(response => response.json())
    .then(data => {
        technology = data.technology;
        displayTech('1');
    })
    .catch(err => {
        console.error('Error fetching json:', err)
    });

    window.displayTech = function (num, element) {
        const techMember = technology.find(technology => technology.num === num);

        if(techMember) {
            const textContainer = document.querySelector('.text-container');

            const techImage = document.getElementById('displayImage');

            textContainer.classList.remove('active');

            setTimeout(() => {
                document.getElementById('techName').innerText = techMember.name;


                document.getElementById('techDescription').innerText = techMember.description;

                document.getElementById('techImage').src = techMember.images.portrait;

                textContainer.classList.add('active');

                techImage.classList.add('active')
            }, 0.6);

            document.querySelectorAll("#techLinks, l, a").forEach(link => {
                link.classList.remove('active');
            });

            if(element) {
                element.classList.add('active')
            }
        } else {
            console.log('Tech member is not found:', num)
        }
    }

    document.querySelectorAll('#techLinks ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const num = event.target.textContent.trim();

            displayTech(num, event.target)
        })
    })

})