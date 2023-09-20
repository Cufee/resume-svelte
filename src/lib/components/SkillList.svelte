<script lang="ts">
	export let header: string;
	export let skills: string[];
</script>

<div>
	<h2 class="text-xl">{header}</h2>
	<div class="flex flex-row flex-wrap gap-2">
		{#each skills as skill}
			<span class="bg-accent rounded-lg py-1 px-2 border-t-2 border-secondary">{skill}</span>
		{/each}
	</div>
</div>
