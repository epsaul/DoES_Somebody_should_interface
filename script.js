let allIssues = [];
allIssues = allIssues.concat(issues);
function filterIssues() {
  const keyword = document.getElementById('searchBox').value.toLowerCase();

  const filtered = allIssues.filter(issue =>
    issue.title.toLowerCase().includes(keyword) ||
    (issue.body && issue.body.toLowerCase().includes(keyword)) ||
    issue.labels.some(label => label.name.toLowerCase().includes(keyword))
  );

  renderIssues(filtered);
}

const issueContainer = document.getElementById('issues');

async function fetchAllIssues() {
  try {
    
    let page = 1;
    const perPage = 100;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(`https://api.github.com/repos/DoESLiverpool/somebody-should/issues?page=${page}&per_page=${perPage}`);
      const issues = await response.json();

      if (issues.length > 0) {
        allIssues = allIssues.concat(issues);
        page++;
      } else {
        hasMore = false;
      }
    }

    renderIssues(allIssues);
  } catch (error) {
    issueContainer.innerHTML = '<p>Error loading issues.</p>';
    console.error(error);
  }
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

  const filtered = allIssues.filter(issue =>
    issue.title.toLowerCase().includes(keyword) ||
    (issue.body && issue.body.toLowerCase().includes(keyword)) ||
    issue.labels.some(label => label.name.toLowerCase().includes(keyword))
  );

  renderIssues(filtered);
}

  } catch (error) {
    issueContainer.innerHTML = '<p>Error filtering issues.</p>';
    console.error(error);
  }
}


fetchAllIssues();
