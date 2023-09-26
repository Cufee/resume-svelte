<script lang="ts">
	import type { Position } from '$lib/types';

	export let position: Position;
</script>

<div class="flex flex-col gap-2">
	<div class="flex flex-row flex-wrap items-start justify-between gap-2 md:items-center">
		<div class="flex flex-col flex-wrap gap-2 md:items-center md:flex-row">
			<span class="text-2xl font-bold text-primary">{position.title}</span>
			<div class="flex flex-row gap-1">
				{#each position.tags || [] as tag}
					<span class="badge badge-ghost">{tag}</span>
				{/each}
			</div>
		</div>

		<div class="flex flex-row items-center gap-1">
			{#if position.website}
				<div>
					<a href={position.website} target="_blank" class="btn-sm btn btn-outline"
						>@{position.company}</a
					>
				</div>
			{:else}
				<span>@{position.company}</span>
			{/if}
		</div>
	</div>

	{#if position.description}
		<span class="prose">{position.description}</span>
	{/if}
	<ul class="gap-0 prose text-black list-disc">
		{#each position.achievements as point}
			<li>{point}</li>
		{/each}
	</ul>
</div>
