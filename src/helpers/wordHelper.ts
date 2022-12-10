
export const generateWord = async (type : string, value : number|string) => {

    if(type === 'word'){
        const json = await import(`../wordlists/english.json`)
        const words = json.words
        const shuffledWord = words.sort(() => Math.random() - 0.5)
        return shuffledWord.slice(0, value as number).join(' ')
    }
    else if(type === 'quote'){
        const json = await import(`../wordlists/quotes.json`)
        const groups = json.groups
        const mapping : any = {
            short: 0,
            medium: 1,
            long: 2,
            thicc: 3
        }
        const range : number[] = groups[mapping[value]]
        const quotes = json.quotes.filter((val) => {
            return val.length >= range[0] && val.length <= range[1]
        })
        const selectedQuotes = quotes[Math.floor(Math.random() * quotes.length)]

        return selectedQuotes.text
    }
    else if(type === 'time'){
        const json = await import(`../wordlists/english.json`)
        const words = json.words
        const shuffledWord = words.sort(() => Math.random() - 0.5)
        return shuffledWord.slice(0, 30).join(' ')    }

    return "test"
}