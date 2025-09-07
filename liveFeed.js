const liveFeed = document.getElementById('liveFeed');

async function fetchLatestIssues() {
  try {
    const response = await fetch('https://api.github.com/repos/DoESLiverpool/somebody-should/issues?sort=created&direction=desc&per_page=5');
    const issues = await response.json();

    issues.forEach(issue => {
      const item = document.createElement('div');
      item.className = 'issue-item';
      item.innerHTML = `
        <p><strong>${issue.title}</strong></p>
        <p>${issue.body ? issue.body.substring(0, 100) + '...' : 'No description.'}</p>
        <hr>
      `;
      liveFeed.insertBefore(item, liveFeed.firstChild);
    });

    autoScroll();
  } catch (err) {
    console.error('Live feed error:', err);
  }
}
