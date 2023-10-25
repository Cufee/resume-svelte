<script lang="ts">
	import type { Position } from '$lib/types';
	import Description from './Position.svelte';
	import PositionTimeBar from './PositionTimeBar.svelte';

	export let experience: Position[];
</script>

<div class="flex flex-col gap-8">
	{#each experience as position, i}
		<div class="flex flex-col gap-2">
			<Description {position} />
			<PositionTimeBar {position} />
		</div>
	{/each}
</div>
