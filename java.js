const toggleButton = document.getElementById('nav-toggle');
        const navLinks = Document.getElementById('nav-links');

        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        })