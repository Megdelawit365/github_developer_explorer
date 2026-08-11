const searchButton = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-input')

import { fetchRepositoryData } from "./githubApi.js"
import { fetchUserData } from "./githubApi.js"
import { displayLoadingMessage, displayProfileError, displayProfileInfo, displayRepositoryInfo, removeLoadingMessage } from "./ui.js"

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

    displayProfileInfo(profile.data)
    displayRepositoryInfo(repository.data)

})