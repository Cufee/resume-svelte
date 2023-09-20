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
			<h2 class="text-xl font-bold text-primary">{info.slogan}</h2>
		</div>
		<div class="flex flex-col gap-2">
			<button
				class="uppercase text-sm py-1 px-2 bg-accent rounded-lg text-right"
				title="Copy email to clipboard"
				on:click={() => {
					copyToClipboard(info.email);
				}}
			>
				{info.email}
			</button>
		</div>
	</div>
	<div>links</div>
</div>
