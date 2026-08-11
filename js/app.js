const searchButton = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-input')
const filterButton = document.querySelector('.filter-btn')
const langFilter = document.querySelector('.lang-filter')
const sortFilter = document.querySelector('.sort-filter')


import { filterRepos } from "./analytics.js"
import { fetchRepositoryData } from "./githubApi.js"
import { fetchUserData } from "./githubApi.js"
import { displayAllRepositories, displayLoadingMessage, displayProfileError, displayProfileInfo, displayRepositoryInfo, removeLoadingMessage } from "./ui.js"

let repositories = []

searchButton.addEventListener('click', async () => {
    const username = searchInput.value
    if (!username) {
        displayProfileError("Enter a username first.")
        return
    }
    displayLoadingMessage("profile")
    displayLoadingMessage("repo")

    const [profile, repository] = await Promise.all([
        fetchUserData(username),
        fetchRepositoryData(username)
    ])

    removeLoadingMessage("profile")
    removeLoadingMessage("repo")

    if (!profile.success) {
        displayProfileError(profile.error)
        return
    }

    repositories = repository.data

    displayProfileInfo(profile.data)
    displayRepositoryInfo(repository.data)
    displayAllRepositories(repository.data)
})

filterButton.addEventListener('click', () => {
    const filtered = filterRepos(repositories, langFilter.value, sortFilter.value)
    displayAllRepositories(filtered)
})