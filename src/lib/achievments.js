export const achievmentsList = [
	function (e) {
		return {
			id: 0,
			name: 'Beginnings',
			desc: 'Play your first game',
			type: 'gamesplayed',
			isUnlocked: e >= 1,
            isNew: e == 1,
		};
	},
	function (e) {
		return {
			id: 1,
			name: 'New Player',
			desc: 'Play 10 games',
			type: 'gamesplayed',
			isUnlocked: e >= 10,
            isNew: e == 10,
		};
	},
	function (e) {
		return {
			id: 2,
			name: 'Returning Player',
			desc: 'Play 50 games',
			type: 'gamesplayed',
			isUnlocked: e >= 50,
            isNew: e == 50,
		};
	},
	function (e) {
		return {
			id: 3,
			name: 'A real player',
			desc: 'Play 100 games',
			type: 'gamesplayed',
			isUnlocked: e >= 100,
            isNew: e == 100,
		};
	}
];

export function getUnlockedBadges(gamesPlayed, highscore) {
    var unlockedAchievments = [];
    for (let badge of achievmentsList) {
        var badgeType = badge(0).type;
        var badgeData;

        if (badgeType == 'gamesplayed') {
            badgeData = badge(gamesPlayed);
        }
        if (badgeData) {
            if (badgeData.isUnlocked === true) {
                unlockedAchievments.push(badgeData);
                /* badgeData.isNew = gamesPlayed<badgeData.threshold+1; */
            }
        }
    }
    return unlockedAchievments;
}

export function getNewBadges(gamesPlayed, highscore) {
    var unlockedAchievments = [];
    for (let badge of achievmentsList) {
        var badgeType = badge(0).type;
        var badgeData;

        if (badgeType == 'gamesplayed') {
            badgeData = badge(gamesPlayed);
        }
        if (badgeData) {
            if (badgeData.isNew === true) {
                unlockedAchievments.push(badgeData);
                /* badgeData.isNew = gamesPlayed<badgeData.threshold+1; */
            }
        }
    }
    return unlockedAchievments;
}
