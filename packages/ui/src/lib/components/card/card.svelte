<script lang="ts">
	import ModemLogo from '$lib/components/icons/modem-logo.svelte';
	import type { Snippet } from 'svelte';

	const { children, title, subtitle }: { children: Snippet<[]>; title: string; subtitle: string } =
		$props();
</script>

<div class="size-full w-80 space-y-4xl">
	<div class="flex flex-col items-center">
		<div class="mb-3xl rounded-xl bg-white p-xxs shadow-lg drop-shadow-lg">
			<ModemLogo />
		</div>
		<div class="space-y-lg text-center">
			<h1 class="mb-2 text-display-sm font-semibold text-text-primary">{title}</h1>
			<p class="text-center text-md font-regular text-text-tertiary">{subtitle}</p>
		</div>
	</div>
	<div class="relative w-full">
		{@render children()}
	</div>
</div>
