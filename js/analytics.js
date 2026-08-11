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
const topFiveRepo = (repo) => {
    let copyRepo = [...repo]
    copyRepo.sort((a, b) => b.stargazers_count - a.stargazers_count)

    if (copyRepo.length <= 5) {
        return copyRepo
    }
    return copyRepo.slice(0, 5)
}
const mostFrequentLanguage = (repo) => {
    const freq = {}
    let mostFreq = repo[0].language
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

export { totalRepositories, totalForks, totalStars, mostFrequentLanguage, topFiveRepo, allLanguages }