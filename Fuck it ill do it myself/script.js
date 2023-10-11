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
        const projectInfo = document.getElementById('projectInfo'); // Added a new element for project info
        const researchQ = document.getElementById('research'); 
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

                // Load project content
                projectContent.innerHTML = item.content;
                researchQ.innerHTML = item.researchQ;

                // Load project info
                projectInfo.innerHTML = `
                 
                    <p>${item.description}</p>
                    <div class="secondimage">
                    <img src="${item.image}" alt="${item.label}" />
                    </div>
                    <h3>Links</h3>
                    <ul>
                        <li><a href="${item.link1}">Link 1</a></li>
                        <li><a href="${item.link2}">Link 2</a></li>
                    </ul>
                `;
            });

            li.appendChild(a);
            menu.appendChild(li);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
    const scrollRightButton = document.getElementById("scrollRightButton");
    let isScrolling = false;
    let scrollInterval;
    
    scrollRightButton.addEventListener("mousedown", () => {
      isScrolling = true;
      scrollInterval = setInterval(() => {
        // Adjust the 'scrollAmount' value as needed for the desired scroll speed and direction
        const scrollAmount = 500;
        window.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }, 10);
    });
    
    scrollRightButton.addEventListener("mouseup", () => {
      isScrolling = false;
      clearInterval(scrollInterval);
    });
    
    scrollRightButton.addEventListener("mouseout", () => {
      if (isScrolling) {
        isScrolling = false;
        clearInterval(scrollInterval);
      }
    });
    
    