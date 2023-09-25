<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;
</script>

<div class="flex flex-col gap-1">
	<div class="flex flex-row items-center justify-between gap-2">
		<div class="flex flex-row items-center gap-2">
			<span class="text-xl font-bold text-primary">{project.name}</span>
			<div class="flex flex-row gap-1">
				{#each project.tags || [] as tag}
					<span class="badge badge-ghost">{tag}</span>
				{/each}
			</div>
		</div>
	</div>
	{#if project.description}
		<span class="prose">{project.description}</span>
	{/if}
</div>
