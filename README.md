# Github Developer Explorer

A simple web app that lets you search for a GitHub user. It gets the user's profile and repository information from the GitHub API.

## Features

- Search for a GitHub username
- Display profile information
- Display profile picture
- Show followers and following
- Show public repositories
- Calculate total stars
- Calculate total forks
- Show the most frequently used language
- Show all languages used
- Show the top 5 repositories by stars
- Filter repositories by language
- Sort repositories by name
- Sort repositories by stars
- Sort repositories by recently updated
- Show loading messages
- Handle GitHub API errors
- Handle empty username input

## API Endpoints

- Get user profile
- Get user repositories

## Technologies Used

- HTML
- CSS
- Vanilla JavaScript
- GitHub REST API
- Fetch API

## Project Structure

```bash
github-developer-explorer/
│
├── index.html
├── style.css
├── README.md
│
└── js/
    ├── app.js
    ├── githubApi.js
    ├── analytics.js
    └── ui.js
```

## JavaScript Concepts Used

- fetch()
- async/await
- Promise.all()
- try...catch
- response.ok
- response.json()
- map()
- filter()
- reduce()
- sort()

## Setup instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/Megdelawit365/github_developer_explorer
    cd github_developer_explorer
    ```

2. Run it using a local server such as Live Server.
3. Enter a GitHub username.
4. Click SEARCH.
