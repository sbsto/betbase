<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		left: {
			title: string;
			subtitle?: string;
		};
		right?: Snippet<[]>;
		icon?: Snippet<[]>;
		onclick?: () => void;
	}
	const { left, right, icon, onclick }: Props = $props();
</script>

<svelte:element
	this={onclick ? 'button' : 'li'}
	role="button"
	tabindex={onclick ? 0 : undefined}
	{onclick}
	onkeydown={(e: KeyboardEvent) => (e.key === 'Enter' || e.key === 'Space') && onclick?.()}
	class="flex w-full items-center justify-between rounded-md bg-bg-primary p-2 {onclick
		? 'cursor-pointer transition duration-100 hover:bg-bg-primary-hover'
		: 'cursor-default'}"
>
	<div class="flex items-center gap-x-2.5">
		{#if icon}
			{@render icon()}
		{/if}
		<div class="flex flex-col items-start">
			<h3 class="text-sm font-semibold text-text-secondary">{left.title}</h3>
			{#if left.subtitle}
				<p class="text-xs text-text-tertiary">{left.subtitle}</p>
			{/if}
		</div>
	</div>
	{#if right}
		{@render right()}
	{/if}
</svelte:element>
