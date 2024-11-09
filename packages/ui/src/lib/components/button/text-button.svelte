<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		label: string;
		onclick: () => void | Promise<void>;
	}

	const { label, onclick, ...props }: Props = $props();
</script>

<button
	class="font-medium transition duration-200 {props.disabled
		? 'text-text-secondary'
		: 'text-text-primary'}"
	{onclick}
	{...props}>{label}</button
>
