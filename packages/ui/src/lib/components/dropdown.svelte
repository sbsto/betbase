<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import ChevronDownIcon from './icons/chevrons/chevron-down-icon.svelte';

	const {
		items,
		selectedItem,
		onSelect
	}: {
		items: Array<{ id: string; name: string }>;
		selectedItem: { id: string; name: string };
		onSelect: (item: { id: string; name: string }) => void;
	} = $props();

	let isOpen = $state(false);

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectItem(item: { id: string; name: string }) {
		onSelect(item);
		isOpen = false;
	}
</script>

<div class="relative w-full">
	<button
		onclick={toggleDropdown}
		class="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-neutral-50 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
	>
		<span>{selectedItem.name}</span>
		<ChevronDownIcon />
	</button>

	{#if isOpen}
		<div
			transition:slide={{ duration: 200 }}
			class="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
		>
			<div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
				{#each items as item}
					<button
						onclick={() => selectItem(item)}
						class="flex w-full items-center gap-x-2 px-4 py-2 text-start text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
						role="menuitem"
						transition:fade={{ duration: 150 }}
					>
						<div class="size-6 bg-neutral-100"></div>
						{item.name}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
