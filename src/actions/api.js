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
        DHOPENTOURS2018: {
            id: 'DHOPENTOURS2018',
            name: 'DreamHack Open Tours 2018',
            gameId: 'CSGO'
        },
        LCD2018: {
            id: 'LCD2018',
            name: 'League Championship Denmark 2018',
            gameId: 'LOL'
        }
    });
}

function getMatches() {
    return Promise.resolve({
        MATCH1: {
            id: 'MATCH1',
            tournament: 'DHOPENTOURS2018',
            team1: 'ENVYUS',
            team2: 'GODSENT'
        },
        MATCH2: {
            id: 'MATCH2',
            tournament: 'DHOPENTOURS2018',
            team1: 'TORQUED',
            team2: 'NORTH'
        },
        MATCH3: {
            id: 'MATCH1',
            tournament: 'LCD2018',
            team1: 'HORSEN',
            team2: 'SOLIDARITY'
        },
        MATCH4: {
            id: 'MATCH2',
            tournament: 'LCD2018',
            team1: 'SORBY',
            team2: 'TRICKEDACADEMY'
        },
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
        },

        HORSEN: {
            id: 'ENVYUS',
            name: 'Horsens Esport Yellow'
        },
        SOLIDARITY: {
            id: 'SOLIDARITY',
            name: 'Solidarity eSports'
        },
        SORBY: {
            id: 'SORBY',
            name: 'Sørby eSport'
        },
        TRICKEDACADEMY: {
            id: 'TRICKEDACADEMY',
            name: 'Tricked Academy'
        }
    });
}

export default { getGames, getMatches, getTeams, getTournaments };