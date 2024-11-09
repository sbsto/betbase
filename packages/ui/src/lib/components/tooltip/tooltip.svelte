<script lang="ts">
	import { fade } from 'svelte/transition';

	const { content }: { content: string | { title: string; subtitle: string } } = $props();
</script>

<div class="absolute -right-3 bottom-full w-xxs" transition:fade={{ duration: 50 }}>
	<div class="flex flex-1 flex-col gap-y-1 rounded bg-bg-primary-solid p-3 text-sm shadow-lg">
		{#if typeof content === 'string'}
			<span class="text-text-xs break-words font-semibold text-text-white">{content}</span>
		{:else}
			<span class="text-text-xs break-words font-semibold text-text-white">{content.title}</span>
			<span class="break-words text-tooltip-supporting-text">{content.subtitle}</span>
		{/if}
	</div>
</div>
