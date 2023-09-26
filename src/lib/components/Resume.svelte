<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import SkillList from '$lib/components/SkillList.svelte';
	import type { Resume } from '$lib/types';

	import resume from '../resume.json';
	import Experience from './Experience.svelte';
	import Project from './Project.svelte';
	import SectionTitle from './SectionTitle.svelte';
	import Separator from './Separator.svelte';

	const { positions, summary, skills, info, projects, expandPositionsUrl } =
		resume as any as Resume;
</script>

<div id="page" class="flex flex-col gap-8 cursor-default">
	<Header {info} />
	<div id="content" class="flex flex-col gap-8 md:flex-row">
		<div id="primary" class="flex flex-col gap-4 basis-2/3">
			<div class="flex flex-col gap-1">
				<div>
					<SectionTitle>Summary</SectionTitle>
					<Separator />
				</div>
				<span class="prose text-black">
					{summary}
				</span>
			</div>
			<div class="flex flex-col">
				<div>
					<SectionTitle>Experience</SectionTitle>
					<Separator />
				</div>
				<div class="flex flex-col gap-4">
					<Experience experience={positions} />
					<div class="flex flex-row justify-center gap-2">
						<a class="px-8 btn btn-ghost btn-sm" href={expandPositionsUrl}>
							<div class="w-2 h-2 bg-gray-400 rounded-full" />
							<div class="w-2 h-2 bg-gray-400 rounded-full" />
							<div class="w-2 h-2 bg-gray-400 rounded-full" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div id="sidebar" class="flex flex-col gap-4 basis-1/3">
			<div class="flex flex-col gap-1">
				<div>
					<SectionTitle>Skills</SectionTitle>
					<Separator />
				</div>
				<div class="flex flex-col gap-2">
					{#each skills as skillSet, i}
						<SkillList header={skillSet.header} skills={skillSet.items} />
						{#if i !== skills.length - 1}
							<Separator />
						{/if}
					{/each}
				</div>
			</div>
			<div id="projects">
				<SectionTitle>Projects</SectionTitle>
				<Separator />
				<div class="flex flex-col gap-4">
					{#each projects as project}
						<Project {project} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
