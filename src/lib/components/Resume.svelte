<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Position from '$lib/components/Position.svelte';
	import SkillList from '$lib/components/SkillList.svelte';
	import type { Resume } from '$lib/types';

	import resume from '../resume.json';
	import Separator from './Separator.svelte';

	const { positions, summary, skills, info } = resume as any as Resume;
</script>

<div id="page" class="flex flex-col gap-8 cursor-default">
	<Header {info} />
	<div id="content" class="flex flex-row gap-8">
		<div id="primary" class="basis-2/3 flex flex-col gap-4">
			<div class="flex flex-col gap-1">
				<div>
					<h1 class="text-xl font-bold uppercase">Summary</h1>
					<Separator />
				</div>
				<span>
					{summary}
				</span>
			</div>
			<div class="flex flex-col gap-1">
				<div>
					<h1 class="text-xl font-bold uppercase">Experience</h1>
					<Separator />
				</div>
				<div class="flex flex-col gap-2">
					{#each positions as position}
						<Position {position} />
					{/each}
				</div>
			</div>
			<div class="flex flex-col gap-1">
				<div>
					<h1 class="text-xl font-bold uppercase">Skills</h1>
					<Separator />
				</div>
				<div class="flex flex-col gap-2">
					{#each Object.keys(skills) as header}
						<SkillList {header} skills={skills[header]} />
					{/each}
				</div>
			</div>
		</div>
		<div id="sidebar" class="basis-1/3">
			<div id="projects">
				<h1 class="text-xl font-bold">Projects</h1>
				<Separator />
			</div>
		</div>
	</div>
</div>
