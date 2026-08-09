const fetchData = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            let message = ""
            switch (response.status) {
                case 404:
                    message = "Github user not found."
                    break
                case 403:
                case 429:
                    message = "GitHub API rate limit reached. Please stop making unnecessary retries."
                    break
                default:
                    message = "Unknown Github API error."
            }
            throw new Error(message)
        }
        const data = await response.json()
        return {
            success: true,
            data: data
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

const fetchUserData = async (username) => {
    return await fetchData(`https://api.github.com/users/${username}`)
}


const fetchRepositoryData = async (username) => {
    return await fetchData(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
}

export { fetchRepositoryData, fetchUserData }