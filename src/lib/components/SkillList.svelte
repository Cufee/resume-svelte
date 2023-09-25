<script lang="ts">
	export let header: string | undefined;
	export let skills: string[];
</script>

<div>
	{#if header}
		<h2 class="text-xl">{header}</h2>
	{/if}
	<div class="flex flex-col gap-2">
		{#each skills as skill}
			<div class="flex flex-row items-center gap-1">
				<span class="w-2 h-2 bg-gray-400 rounded-full" />
				<span class="font-bold">{skill}</span>
			</div>
		{/each}
	</div>
</div>
