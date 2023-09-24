
fetch('menu.json')
.then(response => response.json())
.then(data => {
    const menu = document.getElementById('menu');
    const pageTitle = document.getElementById('pageTitle');
    const pageContent = document.getElementById('pageContent');
    
    // Function to apply the fade-out and fade-in animations
    function applyFadeAnimation(newContent) {
        pageContent.style.opacity = 0; // Start the fade-out animation

        // Wait for the fade-out animation to complete
        setTimeout(() => {
            pageContent.textContent = newContent; // Set the new content
            pageContent.style.opacity = 1; // Start the fade-in animation
        }, 500); // Adjust this timing to match your CSS animation duration
    }

    // Set the page title
    pageTitle.textContent = data.title;

    // Create menu items dynamically
    data.menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.label;
        a.href = '#';
        a.classList.add('nav-item');

        // Add a click event listener to load content with animation
        a.addEventListener('click', () => {
            pageTitle.textContent = item.label;
            applyFadeAnimation(item.content); // Pass the content to the function
        });

        li.appendChild(a);
        menu.appendChild(li);
    });
})
.catch(error => console.error('Error loading JSON:', error));