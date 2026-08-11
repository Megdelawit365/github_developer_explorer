import { allLanguages, mostFrequentLanguage, topFiveRepo, totalForks, totalRepositories, totalStars } from "./analytics.js"

const profileError = document.querySelector('.profile-error')
const profileInfo = document.querySelector('.profile-info')
const profilePic = document.querySelector('.profile-pic')
const repoInfo = document.querySelector('.repo-info')
const loadingProfile = document.querySelector('.loading-profile')
const loadingRepo = document.querySelector('.loading-repo')
const allRepos = document.querySelector('.all-repo')

const displayProfileError = (error) => {
    profileError.textContent = error
}
const displayLoadingMessage = (info) => {
    profileInfo.innerHTML = ""
    repoInfo.innerHTML = ""
    if (info === "profile") {
        loadingProfile.textContent = "LOADING PROFILE..."
    }
    else if (info === "repo") {
        loadingRepo.textContent = "LOADING REPOSITORY..."
    }
}
const removeLoadingMessage = (info) => {
    if (info === "profile") {
        loadingProfile.textContent = ""
    }
    else if (info === "repo") {
        loadingRepo.textContent = ""
    }
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

    const date = new Date(profile.created_at)
    const today = new Date()
    const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: "numeric", year: "numeric" })
    const yearDiff = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 365))

    name.textContent = `NAME: ${profile.name || "Not provided."}`
    bio.textContent = `BIO: ${profile.bio || "Not provided."}`
    company.textContent = `COMPANY: ${profile.company || "Not provided."}`
    location.textContent = `LOCATION: ${profile.location || "Not provided."}`
    followers.textContent = `FOLLOWERS: ${profile.followers}`
    following.textContent = `FOLLOWING: ${profile.following}`
    publicRepo.textContent = `PUBLIC REPOSITORIES: ${profile.public_repos}`
    profileLink.textContent = `PROFILE LINK: ${profile.html_url}`
    createdAt.textContent = `CREATED AT: ${formattedDate}`
    accountAge.textContent = `ACCOUNT AGE: ${yearDiff} years.`

    profilePic.style.backgroundImage = `url(${profile.avatar_url})`
    profilePic.style.display = "block"

    profileInfo.append(name, bio, company, location, followers, following, publicRepo, profileLink, createdAt, accountAge)
}

const displayRepositoryInfo = (repo) => {
    const totalRepo = document.createElement('p')
    const totalStar = document.createElement('p')
    const totalFork = document.createElement('p')
    const freqLanguage = document.createElement('p')
    const allLang = document.createElement('p')
    const top5Repo = document.createElement('ol')

    totalRepo.textContent = `TOTAL REPOSITORIES : ${totalRepositories(repo)}`
    totalStar.textContent = `TOTAL STARS : ${totalStars(repo)}`
    totalFork.textContent = `TOTAL FORKS : ${totalForks(repo)}`
    freqLanguage.textContent = `MOST FREQUENT LANGUAGE : ${mostFrequentLanguage(repo)}`
    allLang.textContent = `ALL LANGUAGES : ${allLanguages(repo).join(", ")}`

    const repos = topFiveRepo(repo)
    if (repos.length == 0) {
        top5Repo.textContent = "No repositories found."
    } else {
        for (const r of repos) {
            const newR = document.createElement('li')
            newR.textContent = `${r.name} (${r.stargazers_count} stars)`
            top5Repo.append(newR)
        }

    }

    repoInfo.append(totalRepo, totalStar, totalFork, freqLanguage, allLang, top5Repo)
}

const displayAllRepositories = (repo) => {
    allRepos.innerHTML = ""

    for (const r of repo) {
        const newR = document.createElement('li')
        newR.textContent = r.name
        allRepos.append(newR)
    }
}


export { displayProfileError, displayProfileInfo, displayRepositoryInfo, displayLoadingMessage, removeLoadingMessage, displayAllRepositories }