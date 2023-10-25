<script lang="ts">
	import type { Position } from '$lib/types';

	export let position: Position;
</script>

<div class="flex flex-row items-center gap-1">
	<div class="h-1 bg-gray-200 rounded-full basis-1/12"/>
	<span class="text-white bg-gray-400 badge">
		{position.period.from}
	</span>
	<div class="flex-grow h-1 bg-gray-400 rounded-full "/>
	<span class="text-white bg-gray-400 badge">
		{position.period.to}
	</span>
	<div class="h-1 bg-gray-200 rounded-full basis-1/12"/>
</div>
