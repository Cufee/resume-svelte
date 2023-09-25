<script lang="ts">
	import type { Position } from '$lib/types';

	export let highlight: number;
	export let positions: Position[];

	let trimmedPositions = positions.slice(1);

	const shouldHighlightBubble = (i: number) => {
		return [positions.length - i - 1, positions.length - i - 2].includes(highlight);
	};
	const shouldHighlightLine = (i: number) => {
		return positions.length - i - 1 === highlight;
	};
</script>

<div class="flex flex-row items-center gap-1">
	{#each trimmedPositions.reverse() as position, i}
		<div
			class={`flex-grow h-1 ${
				shouldHighlightLine(i) ? 'bg-primary opacity-50' : 'bg-gray-200'
			} rounded-full`}
		/>
		<span class={`badge ${shouldHighlightBubble(i) ? 'badge-primary opacity-50' : 'badge-ghost'}`}>
			{position.period.to}
		</span>
	{/each}
	<div
		class={`flex-grow h-1 ${
			highlight === 0 ? 'bg-primary opacity-50' : 'bg-gray-200'
		} rounded-full`}
	/>
</div>
