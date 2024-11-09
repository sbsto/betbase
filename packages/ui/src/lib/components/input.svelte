<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { fade } from 'svelte/transition';
	import { cva } from 'class-variance-authority';
	import Tooltip from './tooltip/tooltip.svelte';
	import HelpCircle from './icons/help-circle.svelte';
	import SlideFadeIn from './slide-fade-in.svelte';

	type InputState = 'default' | 'error';

	interface FieldProps extends HTMLInputAttributes {
		label?: string;
		value?: string;
		loading?: boolean;
		inputState?: InputState;
		hint?: string;
		tooltip?: string | { title: string; subtitle: string };
		focused?: boolean;
	}

	let tooltipVisible = $state(false);

	let {
		label = undefined,
		value = $bindable(''),
		loading = false,
		inputState = 'default',
		hint = '',
		tooltip = '',
		focused = true,
		...inputProps
	}: FieldProps = $props();

	const inputClasses = cva(
		'w-full rounded-md px-2 py-2 text-sm shadow-xs outline-none ring-1 transition duration-100 focus:outline-none focus:ring-2',
		{
			variants: {
				inputState: {
					default: '',
					error: ''
				},
				isEmpty: {
					true: 'text-text-placeholder',
					false: 'text-text-primary'
				},
				isFocused: {
					true: '',
					false: ''
				},
				isDisabled: {
					true: 'bg-bg-disabled text-text-disabled ring-border-disabled',
					false: ''
				}
			},
			compoundVariants: [
				{
					inputState: 'default',
					isFocused: false,
					isDisabled: false,
					class: 'bg-bg-primary ring-border-primary'
				},
				{
					inputState: 'default',
					isFocused: true,
					isDisabled: false,
					class: 'bg-bg-primary ring-border-brand'
				},
				{
					inputState: 'error',
					isFocused: false,
					isDisabled: false,
					class: 'bg-bg-primary ring-border-error-subtle'
				},
				{
					inputState: 'error',
					isFocused: true,
					isDisabled: false,
					class: 'bg-bg-primary ring-border-error'
				}
			],
			defaultVariants: {
				inputState: 'default',
				isEmpty: true,
				isFocused: false,
				isDisabled: false
			}
		}
	);

	const isEmpty = $derived(value.length === 0);
	const isDisabled = $derived(inputProps.disabled || loading);

	function handleFocus() {
		focused = true;
	}

	function handleBlur() {
		focused = false;
	}

	function focusAndSelect(node: HTMLInputElement) {
		if (focused) {
			node.focus();
			node.select();
		}
	}
</script>

<div class="w-full">
	{#if label !== undefined}
		<div class="pb-1.5">
			<label class="text-sm text-text-secondary" for={`input-{label}`}>
				{label}
				{#if inputState === 'error' && hint}
					<span class="text-text-error-primary">*</span>
				{/if}
			</label>
		</div>
	{/if}
	<div class="relative w-full">
		{#if loading}
			<div
				class="loading-gradient absolute inset-0 w-full rounded-md bg-gradient-to-r from-neutral-100/30 via-neutral-400/30 to-neutral-100/30"
				transition:fade={{ duration: 150 }}
			></div>
		{/if}
		<input
			id={`input-${label}`}
			disabled={isDisabled}
			class={inputClasses({ inputState, isEmpty, isFocused: focused, isDisabled })}
			bind:value
			onfocus={handleFocus}
			onblur={handleBlur}
			use:focusAndSelect
			{...inputProps}
		/>
		{#if tooltip}
			<div
				class="absolute right-3 top-1/2 -translate-y-1/2 py-2 {tooltipVisible ? 'pl-8' : ''}"
				role="tooltip"
				onmouseenter={() => (tooltipVisible = true)}
				onmouseleave={() => (tooltipVisible = false)}
			>
				<HelpCircle class="size-4 bg-white text-fg-quinary" />
				{#if tooltipVisible}
					<Tooltip content={tooltip} />
				{/if}
			</div>
		{/if}
	</div>
	{#if hint}
		<SlideFadeIn>
			<p
				class="pt-2 text-sm"
				class:text-text-error-primary={inputState === 'error'}
				class:text-text-secondary={inputState !== 'error'}
			>
				{hint}
			</p>
		</SlideFadeIn>
	{/if}
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
