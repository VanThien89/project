const imagesPerPage = 5;
const totalImages = document.querySelectorAll('.image').length;
const totalPages = Math.ceil(totalImages / imagesPerPage);
let currentPage = 1;

// Function to update the visible images
function updatePage() {
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const images = document.querySelectorAll('.image');
  images.forEach((img, index) => {
    if (index >= startIndex && index < endIndex) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });

  updatePagination();
}

// Function to update pagination buttons' state
function updatePagination() {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const pageButtons = document.querySelectorAll('.pagination li');

  pageButtons.forEach(button => {
    button.classList.remove('active');
    const pageNumber = button.id.replace('page', '');
    if (parseInt(pageNumber) === currentPage) {
      button.classList.add('active');
    }
  });

  prevButton.classList.remove('disabled');
  nextButton.classList.remove('disabled');

  if (currentPage === 1) {
    prevButton.classList.add('disabled');
  }
  if (currentPage === totalPages) {
    nextButton.classList.add('disabled');
  }
}

// Event listeners for pagination buttons
document.getElementById('prev').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
});

document.getElementById('next').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
});

// Event listeners for page numbers
for (let i = 1; i <= totalPages; i++) {
  document.getElementById(`page${i}`).addEventListener('click', () => {
    currentPage = i;
    updatePage();
  });
}

// Initialize the page
updatePage();
