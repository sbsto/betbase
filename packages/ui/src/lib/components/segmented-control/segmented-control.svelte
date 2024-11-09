<script lang="ts" generics="T = string">
	import { tweened } from 'svelte/motion';
	import type { SegmentedControlProps } from './types';
	import { cubicInOut } from 'svelte/easing';

	// eslint-disable-next-line no-undef -- Waiting on Svelte eslint plugin to support generics
	let { options, value = $bindable<T>() }: SegmentedControlProps<T> = $props();

	const xTranslation = tweened(0);

	const selectedIndex = $derived(options.findIndex((option) => option.value === value));

	let containerWidth = $state(0);

	const optionWidth = $derived(containerWidth / options.length);

	$effect(() => {
		xTranslation.set(selectedIndex * optionWidth, { duration: 200, easing: cubicInOut });
	});
</script>

<div
	class="border-secondary relative flex w-full rounded border bg-bg-secondary-alt"
	bind:clientWidth={containerWidth}
>
	{#each options as option}
		<div
			class="bg-primary-alt absolute inset-y-0 rounded border border-border-primary bg-bg-primary-alt"
			style="width: {optionWidth}px; transform: translateX({$xTranslation}px); z-index: 1;"
		></div>
		<button
			onclick={() => (value = option.value)}
			class="relative z-10 flex-1 py-md transition duration-200 {option.value === value
				? 'text-text-primary'
				: 'text-text-quaternary'}"
		>
			{option.label}
		</button>
	{/each}
</div>
