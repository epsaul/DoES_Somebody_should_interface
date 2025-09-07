function setFeedStyle(style) {
  liveFeed.classList.remove('terminal-style', 'social-style');
  liveFeed.classList.add(`${style}-style`);
  liveFeed.innerHTML = ''; // Clear feed
  fetchLatestIssues();     // Re-render with new style
  liveFeed.querySelectorAll('.issue-item').forEach(item => {
  item.className = 'issue-item'; // Reapply class
    console.log(`Switched to ${style} mode`);

});

}

const liveFeed = document.getElementById('liveFeed');

function autoScroll() {
  liveFeed.scrollTop = 0; // Scroll to top
}

async function fetchLatestIssues() {
  try {
    const response = await fetch('https://api.github.com/repos/DoESLiverpool/somebody-should/issues?sort=created&direction=desc&per_page=100');
    const issues = await response.json();

    liveFeed.innerHTML = ''; // Clear previous items

    if (issues.length === 0) {
      liveFeed.innerHTML = '<p>No recent issues found.</p>';
      return;
    }

    issues.forEach(issue => {
      const item = document.createElement('div');
      item.className = 'issue-item';
      item.innerHTML = `
        <p><strong>${issue.title}</strong></p>
        <p>${issue.body ? issue.body.substring(0, 100) + '...' : 'No description.'}</p>
        <small>${new Date(issue.created_at).toLocaleString()}</small>
        <hr>
      `;
      liveFeed.appendChild(item);
    });

    autoScroll();
  } catch (err) {
    console.error('Live feed error:', err);
    liveFeed.innerHTML = '<p>Error loading issues.</p>';
  }
}

fetchLatestIssues();
setInterval(fetchLatestIssues, 300000); // Refresh every 5 minutes
