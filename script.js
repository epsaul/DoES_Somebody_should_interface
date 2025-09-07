const issueContainer = document.getElementById('issues');

function fetchIssues() {
  fetch('https://api.github.com/repos/DoESLiverpool/somebody-should/issues')
    .then(response => response.json())
    .then(data => {
      renderIssues(data);
    })
    .catch(error => {
      issueContainer.innerHTML = '<p>Error loading issues.</p>';
      console.error(error);
    });
}

function renderIssues(issues) {
  issueContainer.innerHTML = '';
  issues.forEach(issue => {
    const card = document.createElement('div');
    card.className = 'issue-card';
    card.innerHTML = `
      <h3><a href="${issue.html_url}" target="_blank">${issue.title}</a></h3>
      <p>${issue.body ? issue.body.substring(0, 200) + '...' : 'No description provided.'}</p>
      <p><strong>Labels:</strong> ${issue.labels.map(label => label.name).join(', ')}</p>
    `;
    issueContainer.appendChild(card);
  });
}

function filterIssues() {
  const keyword = document.getElementById('searchBox').value.toLowerCase();
  fetch('https://api.github.com/repos/DoESLiverpool/somebody-should/issues')
    .then(response => response.json())
    .then(data => {
      const filtered = data.filter(issue =>
        issue.title.toLowerCase().includes(keyword) ||
        (issue.body && issue.body.toLowerCase().includes(keyword))
      );
      renderIssues(filtered);
    });
}

fetchIssues();
