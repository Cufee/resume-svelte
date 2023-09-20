<script lang="ts">
	import type { Position } from '$lib/types';

	export let position: Position;
</script>

<div class="flex flex-col gap-1">
	<div class="flex flex-row gap-2 items-center">
		<span class="text-xl">{position.title}</span>
		@
		<span class="bg-accent px-2 rounded-lg">{position.company}</span>
	</div>
	<span>{position.description}</span>
	<div class="flex flex-col gap-1">
		{#each position.achievements as point}
			<span>- {point}</span>
		{/each}
	</div>
</div>
