// Declare subsectionsContainer in a higher scope
const subsectionsContainer = document.querySelector('.subsections');

// Fetch JSON data and populate the menu and content
fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        const menu = document.getElementById('menu');
        const pageTitle = document.getElementById('pageTitle');
        const pageContent = document.getElementById('pageContent');
        const projectTitle = document.getElementById('projectTitle');
        const projectContent = document.getElementById('projectContent');

        // Set the page title and content
        pageTitle.textContent = data.title;
        pageContent.textContent = "Select a project to learn more.";

        // Create menu items dynamically
        data.menuItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = item.label;
            a.href = '#';
            a.classList.add('nav-item');

            // Add a click event listener to load content
            a.addEventListener('click', () => {
                pageTitle.textContent = item.label;
                projectTitle.textContent = item.label;
                projectContent.textContent = item.content;

                // Clear previous subsections
                subsectionsContainer.innerHTML = '';

                // Check if the item has subsections
                if (item.subsections) {
                    item.subsections.forEach(subsection => {
                        const sub = document.createElement('div');
                        sub.classList.add('subsection');
                        sub.innerHTML = `
                            <h2>${subsection.sublabel}</h2>
                            <p>${subsection.subcontent}</p>
                            <hr>
                        `;
                        subsectionsContainer.appendChild(sub);
                    });
                }
            });

            li.appendChild(a);
            menu.appendChild(li);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
