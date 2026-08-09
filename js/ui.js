const profileError = document.querySelector('.profile-error')
const profileInfo = document.querySelector('.profile-info')
const displayProfileError = (error) => {
    profileError.textContent = error
}

const displayProfileInfo = (profile) => {
    const name = document.createElement('p')
    const bio = document.createElement('p')
    const company = document.createElement('p')
    const location = document.createElement('p')
    const followers = document.createElement('p')
    const following = document.createElement('p')
    const publicRepo = document.createElement('p')
    const profileLink = document.createElement('p')
    const createdAt = document.createElement('p')
    const accountAge = document.createElement('p')

    const date = new Date(profile.createdAt)
    const today = new Date()
    const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: "numeric", year: "numeric" })
    const timeDiff = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

    name.textContent = `NAME: ${profile.name || "Not provided."}`
    bio.textContent = `BIO: ${profile.bio || "Not provided."}`
    company.textContent = `COMPANY: ${profile.company || "Not provided."}`
    location.textContent = `LOCATION: ${profile.location || "Not provided."}`
    followers.textContent = `FOLLOWERS: ${profile.followers || "Not provided."}`
    following.textContent = `FOLLOWING: ${profile.following || "Not provided."}`
    publicRepo.textContent = `PUBLIC REPOSITORIES: ${profile.public_repo || "Not provided."}`
    profileLink.textContent = `PROFILE LINK: ${profile.url || "Not provided."}`
    createdAt.textContent = `CREATED AT: ${formattedDate || "Not provided."}`
    accountAge.textContent = `ACCOUNT AGE: ${timeDiff} days.`

    profileInfo.append(name, bio, company, location, followers, following, publicRepo, profileLink, createdAt, accountAge)
}




export { displayProfileError, displayProfileInfo }