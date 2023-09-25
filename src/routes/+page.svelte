<script>
	import Resume from '$lib/components/Resume.svelte';
</script>

<div class="flex flex-col gap-8">
	<div class="flex items-center justify-center gap-4">
		<a href="/resume.pdf" download="VladKouzinResume.pdf" class="px-4 py-2 bg-blue-400 rounded-lg"
			>Download as PDF</a
		>
	</div>
	<Resume />
</div>
