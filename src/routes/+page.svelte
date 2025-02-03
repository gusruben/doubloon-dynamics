<script lang="ts">
    import { calculateRating } from "$lib/api";

    let projectOneRating: string;
    let projectTwoRating: string;

    let winnerRating: number | undefined;
    let loserRating: number | undefined;
    let winnerChange: number | undefined;
    let loserChange: number | undefined;

    let winningProject: 1 | 2;
    
    function runMatchup(winner: 1 | 2) {
        winningProject = winner;

        const projects: [number, number] = winner == 1 ?
                            [Number.parseInt(projectOneRating), Number.parseInt(projectTwoRating)] :
                            [Number.parseInt(projectTwoRating), Number.parseInt(projectOneRating)];

        ({ newWinnerRating: winnerRating, newLoserRating: loserRating } = calculateRating(...projects))

        winnerChange = winnerRating - projects[0];
        loserChange = loserRating - projects[1];
    }
</script>

<a class="text-white absolute top-10 right-10 z-10 underline text-2xl" href="/rankings">Rating Change Table</a>

<div class="fixed inset-0 bg-[url(/background.svg)] bg-cover">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-7
                text-center text-white">
        <h1 class="text-5xl font-bold">Matchup Calculator</h1>
        <div class="flex flex-row gap-5 text-xl">
            <div>
                <p class="mb-2">Project 1</p>
                <input type="text" name="project1" placeholder="Project 1 Rating" class="p-3 rounded-md text-black" bind:value={projectOneRating}>
            </div>
            <div>
                <p class="mb-2">Project 2</p>
                <input type="text" name="project2" placeholder="Project 2 Rating" class="p-3 rounded-md text-black" bind:value={projectTwoRating}>
            </div>
        </div>
        <div class="flex flex-row gap-5">
            <button class="text-2xl bg-[#3852CD] py-3 px-6 w-max mx-auto rounded-md" on:click={() => runMatchup(1)}>Project 1 Wins</button>
            <button class="text-2xl bg-[#3852CD] py-3 px-6 w-max mx-auto rounded-md" on:click={() => runMatchup(2)}>Project 2 Wins</button>
        </div>

        {#if winnerRating || loserRating}
            <table class="text-3xl bg-[url(/howtobacks.svg)] p-4 bg-cover bg-center bg-no-repeat table-fixed w-max mx-auto border-spacing-x-3 border-separate">
                <tbody>
                    <tr>
                        <td class="text-right w-max">Project {winningProject} Rating:</td>
                        <td>{winnerRating}</td>
                        <td class="text-left">(+{winnerChange})</td>
                    </tr>
                    <tr>
                        <td class="text-right w-max">Project {3 - winningProject} Rating:</td>
                        <td>{loserRating}</td>
                        <td class="text-left">({loserChange})</td>
                    </tr>
                </tbody>
            </table>
            <!-- <p class="mt-5 text-3xl">Winner Rating: <span class="bg-[#834037] p-3">{rating}</span></p> -->
            <!-- <p class="mt-5 text-3xl">Loser Rating: <span class="bg-[#834037] p-3">{rating}</span></p> -->
        {/if}
    </div>
</div>