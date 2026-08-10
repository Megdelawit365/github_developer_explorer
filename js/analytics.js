const totalRepositories = (repo) => {
    return repo.length
}
const totalStars = (repo) => {
    const total = repo.reduce((sum, curr) => {
        return sum + curr.stargazers_count
    }, 0)
    return total
}
const totalForks = (repo) => {
    const total = repo.reduce((sum, curr) => {
        return sum + curr.forks
    }, 0)
    return total
}
const mostStarredRepo = (repo) => {
    const mostStarred = repo.reduce((highest, current) => {
        return current.stargazers_count > highest.stargazers_count ? current : highest
    })
    return mostStarred
}
const mostFrequentLanguage = (repo) => {
    const freq = {}
    const mostFreq = repo[0].language
    for (const r of repo) {
        if (freq[r.language]) {
            freq[r.language] += 1
        } else {
            freq[r.language] = 1
        }
        if (freq[r.language] > freq[mostFreq]) {
            mostFreq = r.language
        }
    }
    return mostFreq

}
const allLanguages = (repo) => {
    const all = new Set(repo.map(r => r.language))
    return Array.from(all)
}

export { totalRepositories, totalForks, totalStars, mostFrequentLanguage, mostStarredRepo, allLanguages }