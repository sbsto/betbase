import type { HTMLButtonAttributes } from 'svelte/elements';

type ButtonType = 'primary' | 'secondary';

export interface ButtonProps extends HTMLButtonAttributes {
	label: string;
	variant: ButtonType;
	fluid?: boolean;
}
