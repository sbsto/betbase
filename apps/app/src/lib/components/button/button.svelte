<script lang="ts">
	import type { ButtonProps } from './types';
	import { cva } from 'class-variance-authority';

	const { label, variant, fluid, disabled, ...rest }: ButtonProps = $props();

	const classes = cva(
		'flex flex-row items-center justify-center rounded-2xl px-sm py-lg text-sm font-semibold',
		{
			variants: {
				variant: {
					primary:
						'bg-button-primary-bg text-button-primary-fg transition duration-200 active:bg-button-primary-bg-hover active:scale-[98%]',
					secondary:
						'border border-button-secondary-border text-button-secondary-fg duration-200 active:bg-button-secondary-bg-hover active:scale-[98%]'
				},
				fluid: {
					true: 'w-full',
					false: '',
					default: ''
				},
				disabled: {
					true: '',
					false: '',
					default: ''
				}
			},
			defaultVariants: {
				variant: 'primary'
			},
			compoundVariants: [
				{
					variant: 'primary',
					disabled: true,
					class: 'bg-bg-disabled text-fg-disabled'
				},
				{
					variant: 'secondary',
					disabled: true,
					class: 'bg-bg-primary text-fg-disabled'
				}
			]
		}
	);
</script>

<button aria-label={label} class={classes({ variant, fluid, disabled })} {disabled} {...rest}>
	{label}
</button>
