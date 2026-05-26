# Non-Persistent Node, Express & EJS Blog Application

A responsive, lightweight server-side blogging web application built using Node.js, Express, and EJS templates. This project implements a full CRUD (Create, Read, Update, Delete) lifecycle using an in-memory data layer to manage application state natively without external database dependencies.

## Architectural & Engineering Highlights
- **Full CRUD Lifecycle Operations**: Supports complete creation tracking, variable route lookups, parameter-matched updates, and array collection filtering mutations.
- **In-Memory State Control**: Mimics database operations directly inside memory buffers (`let posts = []`), maintaining strict session bounds that reset cleanly on server restarts.
- **Modular Layout Partials**: Implements component isolation mechanics via EJS fragments (`header`/`footer`), reducing layout redundancy across page views.
- **Middleware Integration**: Harnesses URL-encoded payload parsers for structural form handling alongside static file routes for public assets.

## Technology Stack & Architecture
- **Runtime Environment**: Node.js
- **Backend Framework**: Express.js
- **Templating Engine**: EJS (Embedded JavaScript)
- **Styling Design**: Semantic HTML5 & Responsive CSS3 Variables
