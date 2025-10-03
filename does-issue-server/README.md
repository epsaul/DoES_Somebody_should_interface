# does-issue-server

Backend Express server for the DoES Liverpool “somebody-should” issue submission interface. Receives form submissions from the frontend and creates GitHub issues in the DoESLiverpool/somebody-should repository.

## Overview
- Accepts form submissions via POST
- Creates GitHub issues using the GitHub API
- Applies labels based on selected categories (tools, rooms, systems)
- Serves static frontend files from `/public`

## Requirements
- Node.js (v14+ recommended)
- GitHub personal access token (for issue creation)
- `.env` file with token and repository details

## Setup
1. Clone the repository:  
   `git clone https://github.com/epsaul/DoES_Somebody_should_interface.git`  
   `cd DoES_Somebody_should_interface/does-issue-server`  
2. Install dependencies:  
   `npm install`  
3. Create a `.env` file based on `.env.example`  
4. Start the server:  
   `node server.js`  
5. Access the interface at `http://localhost:8080/`

## Project Structure
does-issue-server/  
├── server.js — Entry point  
├── routes/ — Form submission logic  
├── utils/ — GitHub API interaction  
├── public/ — Static frontend files  
├── .env.example — Environment variable template  
├── .gitignore — Excludes `.env` and node_modules  
└── README.md — Project documentation

## Notes
- Designed for kiosk deployment and public use  
- Rate-limited if unauthenticated  
- Labels applied based on form input  
- No database required

## License
MIT License. See `LICENSE` for details.

## Contributing
Pull requests welcome. Fork the repository and submit changes.

## Future Plans
- Add submission validation and sanitisation  
- Improve error handling and logging  
- Secure token storage  
- Add support for issue comments and updates  
- Integrate with unified DoES dashboard
