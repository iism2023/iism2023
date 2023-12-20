document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#header');
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data; 
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});
