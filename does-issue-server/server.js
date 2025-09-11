console.log("👋 Starting Gerald's backend...");

require('dotenv').config();

if (!process.env.GITHUB_TOKEN) {
  console.error("❌ GitHub token not found. Check your .env file.");
  process.exit(1);
} else {
  console.log("✅ Token loaded:", process.env.GITHUB_TOKEN.slice(0, 10) + "...");
}

app.listen(PORT, '127.0.0.1', () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-issue', async (req, res) => {
  const {
    title,
    description,
    name,
    tool = [],
    room = [],
    system = [],
    other = []
  } = req.body;

  const issueBody = `
**Description:**  
${description}

**Reported by:** ${name || 'Anonymous'}

**🛠 Tools Involved:** ${tool.length ? tool.join(', ') : 'None'}  
**🏢 Rooms Affected:** ${room.length ? room.join(', ') : 'None'}  
**💻 Systems Involved:** ${system.length ? system.join(', ') : 'None'}  
**📦 Other Categories:** ${other.length ? other.join(', ') : 'None'}
`;

  try {
    console.log("✅ GitHub response:", response.data);

    const response = await axios.post(
      'https://api.github.com/repos/DoESLiverpool/somebody-should/issues',
      {
        title,
        body: issueBody
      },
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          'User-Agent': 'DoES-Issue-Form'
        }
      }
    );

    res.status(200).json({
      message: 'Issue created successfully!',
      issueUrl: response.data.html_url
    });
  } catch (error) {
    console.error("❌ GitHub error:", error.response?.data || error.message);

    console.error('GitHub API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to create issue on GitHub.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});






