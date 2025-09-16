# does-issue-server

This is the backend Express server for the DoES Liverpool "somebody-should" issue submission interface. It receives form submissions from the frontend and creates GitHub issues in the [DoESLiverpool/somebody-should](https://github.com/DoESLiverpool/somebody-should) repository.

## 🚀 Features

- Accepts form submissions via POST
- Creates GitHub issues using the GitHub API
- Applies labels based on selected categories (tools, rooms, systems, etc.)
- Serves static frontend files from `/public`

## 🛠 Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/epsaul/DoES_Somebody_should_interface.git
   cd DoES_Somebody_should_interface/does-issue-server
