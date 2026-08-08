const fetchUserData = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (!response.ok) {
            let message = ""
            switch (response.status) {
                case 404:
                    message = "Github user not found."
                    break
                case 403 || 429:
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