# DoES Somebody Should Interface

A static front-end for browsing, searching, and submitting issues to the DoESLiverpool/somebody-should GitHub repository. Designed to make community participation accessible to those unfamiliar with GitHub’s developer-centric interface.

## Overview
- Browse open issues
- Search by keyword or label
- Submit new issues via a simple form
- No GitHub account required for viewing
- Designed for public kiosks and community governance

## Requirements
- Web browser (desktop or kiosk)
- Internet connection
- GitHub repository: DoESLiverpool/somebody-should

## Deployment
This is a static site. To deploy:

1. Clone the repository:  
   `git clone https://github.com/epsaul/DoES_Somebody_should_interface.git`  
2. Serve via GitHub Pages or any static host  
3. Ensure GitHub API access is permitted (rate-limited for unauthenticated users)

## Project Structure
DoES_Somebody_should_interface/  
├── index.html — Main interface  
├── issueForm.html — Issue submission form  
├── style.css — Layout and styling  
├── script.js — Fetching and rendering logic  
├── .gitignore — Ignores `.env` and other local files  
└── .nojekyll — Enables GitHub Pages compatibility

## Notes
- Designed for non-coders and public use  
- Uses GitHub’s REST API for issue data  
- No server-side components  
- Can be embedded in Raspberry Pi kiosk setups

## License
MIT License. See `LICENSE` for details.

## Contributing
Pull requests welcome. Fork the repository and submit changes.

## Legacy Deployment · Pi 1B

Tag: `pi1b-working-v1`  
Preserves functional backend for Raspberry Pi 1B.  
Includes locked dependencies, legacy-compatible modules, and corrected form routing.  
Form action targets LAN IP or hostname.  
Backend confirmed active on port `3000`.

> “One token. One push. One voice preserved.”

Use this tag to replicate Gerald’s working state on constrained hardware.

## Future Plans
- Add label-based filtering  
- Improve mobile responsiveness  
- Secure API token via `.env` (if needed)  
- Add visual feedback for submission success/failure  
- Integrate with DoES dashboard for unified governance tools
