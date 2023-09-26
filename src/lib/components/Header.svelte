<script lang="ts">
	import type { PersonalInfo } from '$lib/types';

	export let info: PersonalInfo;
</script>

<div id="header" class="flex flex-col gap-2">
	<div class="flex flex-row flex-wrap justify-between items-top">
		<h1 class="text-3xl font-bold uppercase">{info.name}</h1>
		<div class="h-8 rounded-lg badge badge-outline badge-lg badge-primary">
			{info.email}
		</div>
	</div>
	<h2 class="text-xl text-primary">{info.slogan}</h2>
	<div class="flex flex-row flex-wrap gap-2">
		{#each info.links || [] as link}
			<a href={link.url} target="_blank" class="lowercase btn btn-outline btn-sm">
				{link.name}
			</a>
		{/each}
	</div>
</div>
