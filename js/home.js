
const navLink = [
  { name: "Home", num: "00", link: '../../index.html' },
  { name: "Destination", num: "01", link: '../../Pages/Destination/destination-moon.html' },
  { name: "Crew", num: "02", link: '../../Pages/crew/crew-commander.html' },
  { name: "Technology", num: "03", link: '../../Pages/Technology/technology-vehicle.html' }
];

const navLinkContainer = document.getElementById("navLinks");
const currentPage = window.location.pathname.split("/").pop();

navLink.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  if(item.link === currentPage) {
      a.classList.add("active");
  }
  a.href = item.link;
  a.textContent = `${item.num} ${item.name}`;
  li.appendChild(a);  
  navLinkContainer.appendChild(li);
});
function showNav() {
  navLinkContainer.classList.add("isOpen");
}

function hideNav() {
  navLinkContainer.classList.remove("isOpen");
  console.log('hidden');
}