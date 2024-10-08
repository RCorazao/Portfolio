
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');




window.onscroll = () => {
  sections.forEach( sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*="#' + id + '"]').classList.add('active');    
      });
    }
  });
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Image modal
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close');
  const projectImages = document.querySelectorAll('.project-image');

  projectImages.forEach(image => {
      image.addEventListener('click', () => {
          modal.style.display = 'flex';
          modalImage.src = image.src;
      });
  });

  closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
});

// Contact section
const form = document.querySelector('#form');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(this);

  const response = await fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    this.reset();
    showAlert();
  }
}

function showAlert() {
  document.getElementById('customAlert').style.display = 'block';
  setTimeout( () => {
    closeAlert();
  }, 3500 );
}

function closeAlert() {
  document.getElementById('customAlert').style.display = 'none';
}