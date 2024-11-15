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

<a class="text-white absolute top-5 right-5 z-10 underline" href="/">Matchup Calculator</a>

<div class="fixed inset-0 bg-[url(/background.svg)] bg-cover">
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-7
                text-center text-white">
        <h1 class="text-5xl font-bold w-max">Point Difference → Rating Change</h1>
        <table class="text-3xl bg-[url(/howtobacks.svg)] p-4 bg-cover bg-center bg-no-repeat table-fixed w-max mx-auto border-spacing-x-3 border-separate">
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
    </div>
</div>