console.log("👋 Starting Gerald's backend...");
require('dotenv').config();
if (!process.env.GITHUB_TOKEN) {
  console.error("❌ GitHub token not found. Check your .env file.");
  process.exit(1);
} else {
  console.log("✅ Token loaded:", process.env.GITHUB_TOKEN.slice(0, 10) + "...");
}
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit-issue', async (req, res) => {
const { title, description, name, labels = [] } = req.body;

const tool = labels.filter(l => l.startsWith('Tool:')).map(l => l.replace('Tool:', ''));
const room = labels.filter(l => l.startsWith('Room:')).map(l => l.replace('Room:', ''));
const system = labels.filter(l => l.startsWith('System:')).map(l => l.replace('System:', ''));
const other = labels.filter(l => l.startsWith('Other:')).map(l => l.replace('Other:', ''));

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
    console.log("✅ GitHub response:", response.data);
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










