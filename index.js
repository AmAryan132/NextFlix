const button = document.querySelector('.enter-button');
const loader = document.createElement('div');
loader.classList.add('loader', 'loading'); 

button.addEventListener('click', () => {
  // Show the loading spinner
  button.style.display = 'none'; 
  loader.style.display = 'block'; 
  button.parentNode.appendChild(loader); 

  // Simulate loading (replace with actual loading logic)
  setTimeout(() => {
    // Redirect to the next page
    window.location.href = 'next_page.html'; // Replace 'next_page.html' with the actual URL of the next page
  }, 2000); // Simulate a 2-second loading time
});

