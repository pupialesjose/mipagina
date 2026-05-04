const GITHUB_USER = 'pupialesjose'; // Tu usuario según tu código

async function fetchGitHubProjects() {
    const container = document.getElementById('github-projects');
    
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=3`);
        const repos = await response.json();

        container.innerHTML = ''; // Limpiar cargando

        repos.forEach(repo => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Proyecto de Infraestructura / DevOps'}</p>
                <p><small>Lenguaje: ${repo.language || 'N/A'}</small></p>
                <a href="${repo.html_url}" target="_blank" style="color: #58a6ff;">Ver Repositorio →</a>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = '<p>Error cargando proyectos desde GitHub.</p>';
        console.error('API Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchGitHubProjects);