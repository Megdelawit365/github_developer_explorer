const searchButton = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-input')

import { fetchRepositoryData } from "./githubApi.js"
import { fetchUserData } from "./githubApi.js"
import { displayProfileError, displayProfileInfo, displayRepositoryInfo } from "./ui.js"

searchButton.addEventListener('click', async () => {
    const username = searchInput.value
    if (!username) {
        displayProfileError("Enter a username first.")
        return
    }
    const [profile, repository] = await Promise.all([
        fetchUserData(username),
        fetchRepositoryData(username)
    ])
    if (!profile.success) {
        displayProfileError(profile.error)
        return
    }
    console.log(profile)
    displayProfileInfo(profile.data)
    displayRepositoryInfo(repository.data)

})