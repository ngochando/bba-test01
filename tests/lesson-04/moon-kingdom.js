//Bai 1:
function createCharacters() {
    const characters = [
        { name: "Mario", level: 4, health: 150 },
        { name: "Princess", level: 2, health: 400 },
        { name: "Peach", level: 7, health: 500 },
        { name: "Yoshi", level: 1, health: 50 }
    ];

    const charactersPowerUp = characters.map(char => ({
        name: char.name.toUpperCase(),
        level: char.level * 2,
        health: char.health * 3
    }));

    const possibleWinners = charactersPowerUp.filter(char => char.health > 1000);
    console.log(possibleWinners);
}

createCharacters();

//Bai 2:
function printLeaderboard(players) {
    players.sort((a, b) => b.score - a.score)

    console.log(players);

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            console.log(`🥇 ${i + 1}. ${players[i].name} - ${players[i].score} pts`);
        } else if (i === 1) {
            console.log(`🥈 ${i + 1}. ${players[i].name} - ${players[i].score} pts`);
        } else {
            console.log(`🥉 ${i + 1}. ${players[i].name} - ${players[i].score} pts`);
        }
    }

    for (let i = 3 ; i < players.length ; i++){
        console.log(`   ${i + 1}. ${players[i].name} - ${players[i].score} pts`);
    }
};

const players = [
    { name: "Peach", score: 850 },
    { name: "Han", score: 500 },
    { name: "Luigi", score: 900 },
    { name: "Yoshi", score: 800 },
    { name: "Mario", score: 1000 }
]

printLeaderboard(players);



