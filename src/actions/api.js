function getGames() {
    return Promise.resolve({
        CSGO: {
            id: 'CSGO',
            shortName: 'CS:GO',
            name: 'Counter-Strike: Global Offensive',
            coverImageUrl: 'https://www.kichukkhon.com/content/images/thumbs/0000881_counter-strike-global-offensive_450.jpeg'
        },
        LOL: {
            id: 'LOL',
            shortName: 'LoL',
            name: 'League of Legends',
            coverImageUrl: 'http://i.imgur.com/UzQQvFS.jpg'
        }
    });
}

function getTournaments() {
    return Promise.resolve({
        DHOPENTOUR2018: {
            id: 'DHOPENTOURS2018',
            name: 'DreamHack Open Tours 2018',
            gameId: 'CSGO'
        }
    });
}

function getMatches() {
    return Promise.resolve({
        MATCH1: {
            id: 'MATCH1',
            tournament: 'DHOPENTOUR2018',
            team1: 'ENVYUS',
            team2: 'GODSENT'
        },
        MATCH2: {
            id: 'MATCH2',
            tournament: 'DHOPENTOUR2018',
            team1: 'TORQUED',
            team2: 'NORTH'
        }
    });
}

function getTeams() {
    return Promise.resolve({
        ENVYUS: {
            id: 'ENVYUS',
            name: 'EnVyUs'
        },
        HELLRAISERS: {
            id: 'HELLRAISERS',
            name: 'HellRaisers'
        },
        NORTH: {
            id: 'NORTH',
            name: 'North'
        },
        TORQUED: {
            id: 'TORQUED',
            name: 'Torqued'
        },
        GODSENT: {
            id: 'GODSENT',
            name: 'GODSENT'
        }
    });
}

export default { getGames, getMatches, getTeams, getTournaments };