# Zoe Callaghan Portfolio ✨

This repository powers zoecallaghan.com – a single‑page React application that doubles as my digital portfolio. It highlights who I am, what I do, and where I’m headed, wrapping a concise bio, skills matrix, downloadable CV, project showcase, and a living blog that chronicles my journey into tech and my experiences. I continue to update and add to this as time goes on.

The site is deployed on Render at https://zoecallaghan.com/ and automatically rebuilds whenever the main branch receives a new commit.

## Technology snapshot

The interface is built with React 18 (bundled by Vite) and styled with modular CSS. Routing is handled entirely client‑side with React Router, while animations such as the star‑field backdrop are rendered with JavaScript and CSS keyframes. Blog entries live alongside the source as Markdown and are transformed into JSX at build time. Continuous deployment is managed by Render; each push triggers npm run build, and the static bundle is served from Render’s CDN.

## Getting started

Clone the repository and run `npm install`. During development, run `npm start` to launch the local server at http://localhost:3000.


## Contributing

This portfolio is primarily a personal playground, but constructive feedback is welcome. Feel free to leave any comments where you think it could be improved :) 
