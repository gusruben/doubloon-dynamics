// algorithm constant, maximum gain/loss
// K/2 is the gain/loss for an even matchup
const K = 30;

export function calculateRating(
	winnerRating: number,
	loserRating: number
) {
	const expectedScoreWinner =
		1 / (1 + Math.pow(10, (loserRating - winnerRating) / 400));
	const expectedScoreLoser = 1 - expectedScoreWinner;

	const newWinnerRating = Math.round(winnerRating + K * (1 - expectedScoreWinner));
	const newLoserRating = Math.round(loserRating + K * (0 - expectedScoreLoser));

    return { newWinnerRating, newLoserRating }
}
