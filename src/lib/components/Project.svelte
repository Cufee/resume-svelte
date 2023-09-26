<script lang="ts">
	import type { Project } from '$lib/types';
	import LockIcon from './LockIcon.svelte';

	export let project: Project;
</script>

<div class="flex flex-col gap-1">
	<div class="flex flex-row items-start justify-between gap-2">
		<div class="flex flex-row flex-wrap items-center gap-2">
			<div class="flex flex-row items-center">
				{#if !project.link.url}
					<div class="w-4 h-4 text-black">
						<LockIcon />
					</div>
				{/if}
				<span class="text-xl font-bold text-primary">{project.name}</span>
			</div>
			<div class="flex flex-row gap-1">
				{#each project.tags || [] as tag}
					<span class="badge badge-ghost">{tag}</span>
				{/each}
			</div>
		</div>
		<div>
			{#if project.link.url}
				<a href={project.link.url}>
					<div class="w-20 font-bold uppercase rounded-md btn btn-sm btn-outline">
						{project.link.name}
					</div></a
				>
			{:else}
				<div class="w-20 py-4 font-bold uppercase rounded-md badge badge-md badge-outline">
					{project.link.name}
				</div>
			{/if}
		</div>
	</div>
	{#if project.description}
		<span class="prose text-black">{project.description}</span>
	{/if}
</div>
