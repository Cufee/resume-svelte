<script lang="ts">
	import type { PersonalInfo } from '$lib/types';

	export let info: PersonalInfo;

	const copyToClipboard = (text: string) => {
		window.navigator.clipboard.writeText(text);
	};
</script>

<div id="header" class="flex flex-col">
	<div class="flex flex-row justify-between items-top">
		<div>
			<h1 class="text-3xl font-bold uppercase">{info.name}</h1>
			<h2 class="text-xl text-primary">{info.slogan}</h2>
		</div>
		<div class="flex flex-col gap-2">
			<div class="h-8 rounded-lg badge badge-outline badge-lg badge-primary">
				{info.email}
			</div>
			{#if info.number}
				<div class="w-full h-8 rounded-lg badge badge-outline badge-lg badge-primary">
					{info.number}
				</div>
			{/if}
		</div>
	</div>
	<div class="flex flex-row gap-2">
		{#each info.links || [] as link}
			<a href={link.url} target="_blank" class="lowercase btn btn-outline btn-sm">
				{link.name}
			</a>
		{/each}
	</div>
</div>
