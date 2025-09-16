const axios = require('axios');

async function createIssue(data) {
  const { title, body, labels } = formatIssue(data);

  const response = await axios.post(
    'https://api.github.com/repos/DoESLiverpool/somebody-should/issues',
    { title, body, labels },
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'DoES-Issue-Form'
      }
    }
  );

  return response.data;
}

function formatIssue(data) {
  // Convert form data into GitHub issue format
  return {
    title: data.summary,
    body: `Submitted by: ${data.name}\n\n${data.description}`,
    labels: [...data.tools, ...data.rooms, ...data.systems]
  };
}

module.exports = { createIssue };
