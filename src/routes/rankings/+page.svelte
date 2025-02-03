<script lang="ts">
    import { calculateRating } from "$lib/api";
	import { onMount } from "svelte";
    
    const ranges: number[][] = $state([]);
    
    onMount(() => {
        let currentChange = 0;
        let currentRanking = 0;
        while (currentChange < 30) {
            const change = calculateRating(0, currentRanking).newWinnerRating;
            if (change != currentChange) {
                ranges.push([change, currentRanking]);
                currentChange = change;
            }

            currentRanking++;
            console.log(currentRanking, currentChange)
        }

        console.log(ranges);
    })

</script>

<a class="text-white absolute top-10 right-10 z-10 underline text-2xl" href="/">Matchup Calculator</a>

<div class="fixed inset-0 bg-[url(/background.svg)] bg-cover">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-7
                text-center text-white">
        <h1 class="text-5xl font-bold w-max">Point Difference → Rating Change</h1>
        <table class="text-3xl bg-[url(/howtobacks.svg)] px-4 py-8 bg-cover bg-center bg-no-repeat table-fixed w-max mx-auto border-spacing-x-3 border-separate">
            <tbody>
                {#each ranges as range, i}
                    <tr>
                        {#if ranges.length <= i + 1}
                            <td class="text-right w-max">{range[1]}+:</td>
                        {:else}
                            <td class="text-right w-max">{range[1]}-{ranges[i+1][1]-1}:</td>
                        {/if}
                        <td class="text-left">±{range[0]} ranking</td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <!-- <div class="flex flex-col gap-3 text-left">
            {#each ranges as range}
            
                {range[0]}
            {/each}
        </div> -->
        <p class="text-2xl">Curious about what this is? Check out the <a href="https://github.com/gusruben/doubloon-dynamics/blob/main/README.md" class="underline text-[#b16284]">README</a>.</p>
    </div>
</div>