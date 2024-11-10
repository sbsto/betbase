<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cva } from 'class-variance-authority';

	let {
		label = '',
		value = $bindable(''),
		inputState = 'active',
		loading = false,
		disabled = false,
		error = ''
	}: {
		label: string;
		value: string;
		loading: boolean;
		inputState: 'active' | 'error';
		disabled: boolean;
		error: string;
	} = $props();

	let inputElement: HTMLInputElement;
	let isFocused = $state(false);

	const values = $derived.by(() => {
		const valueArr = value.split('').filter((l) => !Number.isNaN(Number(l)));
		if (valueArr.length > 6) {
			return valueArr.slice(0, 6);
		}
		while (valueArr.length < 6) {
			valueArr.push('');
		}
		return valueArr;
	});

	function handleFocus() {
		inputElement.focus();
	}

	function handleInput() {
		const sanitizedValue = inputElement.value.replace(/\D/g, '').slice(0, 6);
		value = sanitizedValue;
	}

	const selectedIndex = $derived(values.findIndex((l) => l == ''));
	const focusedIndex = $derived(selectedIndex === -1 ? 5 : selectedIndex);

	$effect(() => {
		handleFocus();
	});

	const fieldClasses = cva(
		'z-10 flex w-full cursor-text items-center justify-center rounded-lg border px-md py-xxs text-display-lg font-medium text-text-primary outline-none ring-0 transition focus:outline-none focus:ring-0',
		{
			variants: {
				state: {
					error: 'bg-fill-critical-faded text-critical border-critical-faded',
					active: 'bg-fill-tertiary text-primary border-neutral-primary'
				},
				isSelected: {
					true: '',
					false: ''
				},
				isFocused: {
					true: 'border-black',
					false: ''
				},
				isEmpty: {
					true: 'text-text-placeholder-subtle',
					false: 'text-text-primary'
				}
			},
			defaultVariants: {
				state: 'active',
				isEmpty: true
			},
			compoundVariants: [
				{
					state: 'error',
					isSelected: true,
					className: 'border-critical-faded'
				},
				{
					state: 'active',
					isSelected: true,
					isFocused: true,
					className: 'border-black'
				},
				{
					state: 'active',
					isSelected: true,
					isFocused: false,
					className: 'border-neutral-primary'
				}
			]
		}
	);
</script>

{#snippet field(value: string, isSelected: boolean, index: number)}
	<div
		class={fieldClasses({
			state: inputState,
			isSelected,
			isFocused: isFocused && focusedIndex === index,
			isEmpty: !value
		})}
	>
		{#if value}
			{value}
		{:else}
			<span class="text-text-placeholder-subtle">0</span>
		{/if}
	</div>
{/snippet}

<div class="space-y-2.5">
	{#if label !== undefined}
		<label
			class="font-md pb-3 text-sm {inputState === 'active'
				? 'text-text-secondary'
				: 'text-text-error-primary'}"
			for={`input-{label}`}
		>
			{#if error}
				{error}
			{:else}
				{label}
			{/if}
		</label>
	{/if}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		role="textbox"
		tabindex="-1"
		onclick={handleFocus}
		onfocus={handleFocus}
		class="relative flex flex-row gap-x-4"
	>
		{#if loading}
			<div
				class="loading-gradient absolute inset-0 w-full rounded-lg bg-gradient-to-r from-neutral-100/30 via-neutral-400/30 to-neutral-100/30"
				transition:fade={{ duration: 150 }}
			></div>
		{/if}
		{#each values as value, i}
			{@render field(value, isFocused, i)}
		{/each}

		<input
			autocomplete="one-time-code"
			class="absolute size-0 opacity-0"
			onfocus={() => (isFocused = true)}
			onblur={() => (isFocused = false)}
			oninput={handleInput}
			bind:this={inputElement}
			type="text"
			inputmode="numeric"
			pattern="[0-9]*"
			bind:value
			disabled={loading || disabled}
		/>
	</div>
</div>

<style>
	.loading-gradient {
		animation: cycle-gradient 1.5s linear infinite;
		background-size: 200% 200%;
	}
	@keyframes cycle-gradient {
		0% {
			background-position: 100% 50%;
		}
		100% {
			background-position: -100% 50%;
		}
	}
</style>
