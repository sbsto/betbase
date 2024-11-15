import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			width: {
				xxs: '20rem', // 320px
				xs: '24rem', // 384px
				sm: '30rem', // 480px
				md: '35rem', // 560px
				lg: '40rem', // 640px
				xl: '48rem', // 768px
				'2xl': '64rem', // 1024px
				'3xl': '80rem', // 1280px
				'4xl': '90rem', // 1440px
				'5xl': '100rem', // 1600px
				'6xl': '120rem' // 1920px
			},
			boxShadow: {
				xs: 'var(--shadow-xs)',
				'sm-01': 'var(--shadow-sm-01)',
				'sm-02': 'var(--shadow-sm-02)',
				'md-01': 'var(--shadow-md-01)',
				'md-02': 'var(--shadow-md-02)',
				'lg-01': 'var(--shadow-lg-01)',
				'lg-02': 'var(--shadow-lg-02)',
				'xl-01': 'var(--shadow-xl-01)',
				'xl-02': 'var(--shadow-xl-02)',
				'2xl': 'var(--shadow-2xl)',
				'3xl': 'var(--shadow-3xl)',
				'skeumorphic-inner': 'var(--shadow-skeumorphic-inner)',
				'skeumorphic-inner-border': 'var(--shadow-skeumorphic-inner-border)',

				// Portfolio Mockups
				'main-centre-md': 'var(--shadow-main-centre-md)',
				'main-centre-lg': 'var(--shadow-main-centre-lg)',
				'overlay-lg': 'var(--shadow-overlay-lg)',
				'grid-md': 'var(--shadow-grid-md)'
			},
			maxWidth: {
				xxs: '20rem', // 320px
				xs: '24rem', // 384px
				sm: '30rem', // 480px
				md: '35rem', // 560px
				lg: '40rem', // 640px
				xl: '48rem', // 768px
				'2xl': '64rem', // 1024px
				'3xl': '80rem', // 1280px
				'4xl': '90rem', // 1440px
				'5xl': '100rem', // 1600px
				'6xl': '120rem' // 1920px
			},
			spacing: {
				0: 'var(--spacing-0)',
				0.5: 'var(--spacing-0-5)',
				1: 'var(--spacing-1)',
				1.5: 'var(--spacing-1-5)',
				2: 'var(--spacing-2)',
				3: 'var(--spacing-3)',
				4: 'var(--spacing-4)',
				5: 'var(--spacing-5)',
				6: 'var(--spacing-6)',
				8: 'var(--spacing-8)',
				10: 'var(--spacing-10)',
				12: 'var(--spacing-12)',
				16: 'var(--spacing-16)',
				20: 'var(--spacing-20)',
				24: 'var(--spacing-24)',
				32: 'var(--spacing-32)',
				40: 'var(--spacing-40)',
				48: 'var(--spacing-48)',
				56: 'var(--spacing-56)',
				64: 'var(--spacing-64)',
				80: 'var(--spacing-80)',
				96: 'var(--spacing-96)',
				120: 'var(--spacing-120)',
				140: 'var(--spacing-140)',
				160: 'var(--spacing-160)',
				180: 'var(--spacing-180)',
				192: 'var(--spacing-192)',
				256: 'var(--spacing-256)',
				320: 'var(--spacing-320)',
				360: 'var(--spacing-360)',
				400: 'var(--spacing-400)',
				480: 'var(--spacing-480)',
				// Aliases
				none: 'var(--spacing-0)',
				xxs: 'var(--spacing-0-5)',
				xs: 'var(--spacing-1)',
				sm: 'var(--spacing-1-5)',
				md: 'var(--spacing-2)',
				lg: 'var(--spacing-3)',
				xl: 'var(--spacing-4)',
				'2xl': 'var(--spacing-5)',
				'3xl': 'var(--spacing-6)',
				'4xl': 'var(--spacing-8)',
				'5xl': 'var(--spacing-10)',
				'6xl': 'var(--spacing-12)',
				'7xl': 'var(--spacing-16)',
				'8xl': 'var(--spacing-20)',
				'9xl': 'var(--spacing-24)',
				'10xl': 'var(--spacing-32)',
				'11xl': 'var(--spacing-40)'
			},
			colors: {
				'text-primary': 'var(--text-primary)',
				'text-primary-on-brand': 'var(--text-primary-on-brand)',
				'text-secondary': 'var(--text-secondary)',
				'text-secondary-hover': 'var(--text-secondary-hover)',
				'text-secondary-on-brand': 'var(--text-secondary-on-brand)',
				'text-tertiary': 'var(--text-tertiary)',
				'text-tertiary-hover': 'var(--text-tertiary-hover)',
				'text-tertiary-on-brand': 'var(--text-tertiary-on-brand)',
				'text-quaternary': 'var(--text-quaternary)',
				'text-quaternary-on-brand': 'var(--text-quaternary-on-brand)',
				'text-white': 'var(--text-white)',
				'text-disabled': 'var(--text-disabled)',
				'text-placeholder': 'var(--text-placeholder)',
				'text-placeholder-subtle': 'var(--text-placeholder-subtle)',
				'text-brand-primary': 'var(--text-brand-primary)',
				'text-brand-secondary': 'var(--text-brand-secondary)',
				'text-brand-tertiary': 'var(--text-brand-tertiary)',
				'text-brand-tertiary-alt': 'var(--text-brand-tertiary-alt)',
				'text-error-primary': 'var(--text-error-primary)',
				'text-warning-primary': 'var(--text-warning-primary)',
				'text-success-primary': 'var(--text-success-primary)',

				// Border Colors
				'border-primary': 'var(--border-primary)',
				'border-secondary': 'var(--border-secondary)',
				'border-tertiary': 'var(--border-tertiary)',
				'border-disabled': 'var(--border-disabled)',
				'border-disabled-subtle': 'var(--border-disabled-subtle)',
				'border-brand': 'var(--border-brand)',
				'border-brand-alt': 'var(--border-brand-alt)',
				'border-error': 'var(--border-error)',
				'border-error-subtle': 'var(--border-error-subtle)',

				// Foreground Colors
				'fg-primary': 'var(--fg-primary)',
				'fg-secondary': 'var(--fg-secondary)',
				'fg-secondary-hover': 'var(--fg-secondary-hover)',
				'fg-tertiary': 'var(--fg-tertiary)',
				'fg-tertiary-hover': 'var(--fg-tertiary-hover)',
				'fg-quaternary': 'var(--fg-quaternary)',
				'fg-quaternary-hover': 'var(--fg-quaternary-hover)',
				'fg-quinary': 'var(--fg-quinary)',
				'fg-quinary-hover': 'var(--fg-quinary-hover)',
				'fg-senary': 'var(--fg-senary)',
				'fg-white': 'var(--fg-white)',
				'fg-disabled': 'var(--fg-disabled)',
				'fg-disabled-subtle': 'var(--fg-disabled-subtle)',
				'fg-brand-primary': 'var(--fg-brand-primary)',
				'fg-brand-primary-alt': 'var(--fg-brand-primary-alt)',
				'fg-brand-secondary': 'var(--fg-brand-secondary)',
				'fg-error-primary': 'var(--fg-error-primary)',
				'fg-error-secondary': 'var(--fg-error-secondary)',
				'fg-warning-primary': 'var(--fg-warning-primary)',
				'fg-warning-secondary': 'var(--fg-warning-secondary)',
				'fg-success-primary': 'var(--fg-success-primary)',
				'fg-success-secondary': 'var(--fg-success-secondary)',

				// Background Colors
				'bg-primary': 'var(--bg-primary)',
				'bg-primary-alt': 'var(--bg-primary-alt)',
				'bg-primary-hover': 'var(--bg-primary-hover)',
				'bg-primary-solid': 'var(--bg-primary-solid)',
				'bg-secondary': 'var(--bg-secondary)',
				'bg-secondary-alt': 'var(--bg-secondary-alt)',
				'bg-secondary-hover': 'var(--bg-secondary-hover)',
				'bg-secondary-subtle': 'var(--bg-secondary-subtle)',
				'bg-secondary-solid': 'var(--bg-secondary-solid)',
				'bg-tertiary': 'var(--bg-tertiary)',
				'bg-quaternary': 'var(--bg-quaternary)',
				'bg-active': 'var(--bg-active)',
				'bg-disabled': 'var(--bg-disabled)',
				'bg-disabled-subtle': 'var(--bg-disabled-subtle)',
				'bg-overlay': 'var(--bg-overlay)',
				'bg-brand-primary': 'var(--bg-brand-primary)',
				'bg-brand-primary-alt': 'var(--bg-brand-primary-alt)',
				'bg-brand-secondary': 'var(--bg-brand-secondary)',
				'bg-brand-solid': 'var(--bg-brand-solid)',
				'bg-brand-solid-hover': 'var(--bg-brand-solid-hover)',
				'bg-brand-section': 'var(--bg-brand-section)',
				'bg-brand-section-subtle': 'var(--bg-brand-section-subtle)',
				'bg-error-primary': 'var(--bg-error-primary)',
				'bg-error-secondary': 'var(--bg-error-secondary)',
				'bg-error-solid': 'var(--bg-error-solid)',
				'bg-warning-primary': 'var(--bg-warning-primary)',
				'bg-warning-secondary': 'var(--bg-warning-secondary)',
				'bg-warning-solid': 'var(--bg-warning-solid)',
				'bg-success-primary': 'var(--bg-success-primary)',
				'bg-success-secondary': 'var(--bg-success-secondary)',
				'bg-success-solid': 'var(--bg-success-solid)',

				// Effects
				'focus-ring': 'var(--focus-ring)',
				'focus-ring-error': 'var(--focus-ring-error)',

				// Alpha Colors
				'alpha-white-10': 'var(--alpha-white-10)',
				'alpha-white-20': 'var(--alpha-white-20)',
				'alpha-white-30': 'var(--alpha-white-30)',
				'alpha-white-40': 'var(--alpha-white-40)',
				'alpha-white-50': 'var(--alpha-white-50)',
				'alpha-white-60': 'var(--alpha-white-60)',
				'alpha-white-70': 'var(--alpha-white-70)',
				'alpha-white-80': 'var(--alpha-white-80)',
				'alpha-white-90': 'var(--alpha-white-90)',
				'alpha-white-100': 'var(--alpha-white-100)',
				'alpha-black-10': 'var(--alpha-black-10)',
				'alpha-black-20': 'var(--alpha-black-20)',
				'alpha-black-30': 'var(--alpha-black-30)',
				'alpha-black-40': 'var(--alpha-black-40)',
				'alpha-black-50': 'var(--alpha-black-50)',
				'alpha-black-60': 'var(--alpha-black-60)',
				'alpha-black-70': 'var(--alpha-black-70)',
				'alpha-black-80': 'var(--alpha-black-80)',
				'alpha-black-90': 'var(--alpha-black-90)',
				'alpha-black-100': 'var(--alpha-black-100)',

				// Component-specific colors
				'app-store-badge-border': 'var(--app-store-badge-border)',
				'nav-item-button-icon-fg': 'var(--nav-item-button-icon-fg)',
				'nav-item-button-icon-fg-active': 'var(--nav-item-button-icon-fg-active)',
				'nav-item-icon-fg': 'var(--nav-item-icon-fg)',
				'nav-item-icon-fg-active': 'var(--nav-item-icon-fg-active)',
				'avatar-bg': 'var(--avatar-bg)',
				'avatar-profile-photo-border': 'var(--avatar-profile-photo-border)',
				'avatar-contrast-border': 'var(--avatar-contrast-border)',
				'avatar-styles-bg-neutral': 'var(--avatar-styles-bg-neutral)',
				'breadcrumb-fg': 'var(--breadcrumb-fg)',
				'breadcrumb-fg-hover': 'var(--breadcrumb-fg-hover)',
				'breadcrumb-bg-hover': 'var(--breadcrumb-bg-hover)',
				'breadcrumb-brand-fg-hover': 'var(--breadcrumb-brand-fg-hover)',
				'breadcrumb-brand-bg-hover': 'var(--breadcrumb-brand-bg-hover)',
				'breadcrumb-icon-fg': 'var(--breadcrumb-icon-fg)',
				'breadcrumb-icon-fg-hover': 'var(--breadcrumb-icon-fg-hover)',
				'breadcrumb-brand-icon-fg-hover': 'var(--breadcrumb-brand-icon-fg-hover)',
				'button-primary-fg': 'var(--button-primary-fg)',
				'button-primary-fg-hover': 'var(--button-primary-fg-hover)',
				'button-primary-bg': 'var(--button-primary-bg)',
				'button-primary-bg-hover': 'var(--button-primary-bg-hover)',
				'button-secondary-fg': 'var(--button-secondary-fg)',
				'button-secondary-fg-hover': 'var(--button-secondary-fg-hover)',
				'button-secondary-bg': 'var(--button-secondary-bg)',
				'button-secondary-bg-hover': 'var(--button-secondary-bg-hover)',
				'button-secondary-border': 'var(--button-secondary-border)',
				'button-secondary-border-hover': 'var(--button-secondary-border-hover)',
				'button-secondary-color-fg': 'var(--button-secondary-color-fg)',
				'button-secondary-color-fg-hover': 'var(--button-secondary-color-fg-hover)',
				'button-secondary-color-bg': 'var(--button-secondary-color-bg)',
				'button-secondary-color-bg-hover': 'var(--button-secondary-color-bg-hover)',
				'button-secondary-color-border': 'var(--button-secondary-color-border)',
				'button-secondary-color-border-hover': 'var(--button-secondary-color-border-hover)',
				'button-tertiary-fg': 'var(--button-tertiary-fg)',
				'button-tertiary-fg-hover': 'var(--button-tertiary-fg-hover)',
				'button-tertiary-bg-hover': 'var(--button-tertiary-bg-hover)',
				'button-tertiary-color-fg': 'var(--button-tertiary-color-fg)',
				'button-tertiary-color-fg-hover': 'var(--button-tertiary-color-fg-hover)',
				'button-tertiary-color-bg-hover': 'var(--button-tertiary-color-bg-hover)',
				'button-primary-error-fg': 'var(--button-primary-error-fg)',
				'button-primary-error-fg-hover': 'var(--button-primary-error-fg-hover)',
				'button-primary-error-bg': 'var(--button-primary-error-bg)',
				'button-primary-error-bg-hover': 'var(--button-primary-error-bg-hover)',
				'button-secondary-error-fg': 'var(--button-secondary-error-fg)',
				'button-secondary-error-fg-hover': 'var(--button-secondary-error-fg-hover)',
				'button-secondary-error-bg': 'var(--button-secondary-error-bg)',
				'button-secondary-error-bg-hover': 'var(--button-secondary-error-bg-hover)',
				'button-secondary-error-border': 'var(--button-secondary-error-border)',
				'button-secondary-error-border-hover': 'var(--button-secondary-error-border-hover)',
				'button-tertiary-error-fg': 'var(--button-tertiary-error-fg)',
				'button-tertiary-error-fg-hover': 'var(--button-tertiary-error-fg-hover)',
				'button-tertiary-error-bg-hover': 'var(--button-tertiary-error-bg-hover)',
				'footer-button-fg': 'var(--footer-button-fg)',
				'footer-button-fg-hover': 'var(--footer-button-fg-hover)',
				'footer-badge-fg': 'var(--footer-badge-fg)',
				'footer-badge-bg': 'var(--footer-badge-bg)',
				'footer-badge-border': 'var(--footer-badge-border)',
				'header-abstract-50-bg': 'var(--header-abstract-50-bg)',
				'header-abstract-100-bg': 'var(--header-abstract-100-bg)',
				'header-abstract-200-bg': 'var(--header-abstract-200-bg)',
				'header-abstract-300-bg': 'var(--header-abstract-300-bg)',
				'icon-fg-brand': 'var(--icon-fg-brand)',
				'icon-fg-brand-on-brand': 'var(--icon-fg-brand-on-brand)',
				'featured-icon-light-fg-brand': 'var(--featured-icon-light-fg-brand)',
				'featured-icon-light-fg-gray': 'var(--featured-icon-light-fg-gray)',
				'featured-icon-light-fg-error': 'var(--featured-icon-light-fg-error)',
				'featured-icon-light-fg-warning': 'var(--featured-icon-light-fg-warning)',
				'featured-icon-light-fg-success': 'var(--featured-icon-light-fg-success)',
				'featured-icon-dark-fg-brand': 'var(--featured-icon-dark-fg-brand)',
				'featured-icon-dark-fg-gray': 'var(--featured-icon-dark-fg-gray)',
				'featured-icon-dark-fg-error': 'var(--featured-icon-dark-fg-error)',
				'featured-icon-dark-fg-warning': 'var(--featured-icon-dark-fg-warning)',
				'featured-icon-dark-fg-success': 'var(--featured-icon-dark-fg-success)',
				'featured-icon-modern-border': 'var(--featured-icon-modern-border)',
				'social-icon-fg-x': 'var(--social-icon-fg-x)',
				'social-icon-fg-instagram': 'var(--social-icon-fg-instagram)',
				'social-icon-fg-apple': 'var(--social-icon-fg-apple)',
				'social-icon-fg-github': 'var(--social-icon-fg-github)',
				'social-icon-fg-angellist': 'var(--social-icon-fg-angellist)',
				'social-icon-fg-tumblr': 'var(--social-icon-fg-tumblr)',
				'screen-mockup-border': 'var(--screen-mockup-border)',
				'slider-handle-bg': 'var(--slider-handle-bg)',
				'slider-handle-border': 'var(--slider-handle-border)',
				'thumbnail-badge-brand-fg': 'var(--thumbnail-badge-brand-fg)',
				'thumbnail-badge-success-fg': 'var(--thumbnail-badge-success-fg)',
				'toggle-button-fg-disabled': 'var(--toggle-button-fg-disabled)',
				'tooltip-supporting-text': 'var(--tooltip-supporting-text)',
				'wysiwyg-editor-icon-fg': 'var(--wysiwyg-editor-icon-fg)',
				'wysiwyg-editor-icon-fg-active': 'var(--wysiwyg-editor-icon-fg-active)',

				// Utility colors
				'utility-gray-50': 'var(--utility-gray-50)',
				'utility-gray-100': 'var(--utility-gray-100)',
				'utility-gray-200': 'var(--utility-gray-200)',
				'utility-gray-300': 'var(--utility-gray-300)',
				'utility-gray-400': 'var(--utility-gray-400)',
				'utility-gray-500': 'var(--utility-gray-500)',
				'utility-gray-600': 'var(--utility-gray-600)',
				'utility-gray-700': 'var(--utility-gray-700)',
				'utility-gray-800': 'var(--utility-gray-800)',
				'utility-gray-900': 'var(--utility-gray-900)',

				'utility-brand-50': 'var(--utility-brand-50)',
				'utility-brand-50-alt': 'var(--utility-brand-50-alt)',
				'utility-brand-100': 'var(--utility-brand-100)',
				'utility-brand-100-alt': 'var(--utility-brand-100-alt)',
				'utility-brand-200': 'var(--utility-brand-200)',
				'utility-brand-200-alt': 'var(--utility-brand-200-alt)',
				'utility-brand-300': 'var(--utility-brand-300)',
				'utility-brand-300-alt': 'var(--utility-brand-300-alt)',
				'utility-brand-400': 'var(--utility-brand-400)',
				'utility-brand-400-alt': 'var(--utility-brand-400-alt)',
				'utility-brand-500': 'var(--utility-brand-500)',
				'utility-brand-500-alt': 'var(--utility-brand-500-alt)',
				'utility-brand-600': 'var(--utility-brand-600)',
				'utility-brand-600-alt': 'var(--utility-brand-600-alt)',
				'utility-brand-700': 'var(--utility-brand-700)',
				'utility-brand-700-alt': 'var(--utility-brand-700-alt)',
				'utility-brand-800': 'var(--utility-brand-800)',
				'utility-brand-800-alt': 'var(--utility-brand-800-alt)',
				'utility-brand-900': 'var(--utility-brand-900)',
				'utility-brand-900-alt': 'var(--utility-brand-900-alt)',

				'utility-error-50': 'var(--utility-error-50)',
				'utility-error-100': 'var(--utility-error-100)',
				'utility-error-200': 'var(--utility-error-200)',
				'utility-error-300': 'var(--utility-error-300)',
				'utility-error-400': 'var(--utility-error-400)',
				'utility-error-500': 'var(--utility-error-500)',
				'utility-error-600': 'var(--utility-error-600)',
				'utility-error-700': 'var(--utility-error-700)',

				'utility-warning-50': 'var(--utility-warning-50)',
				'utility-warning-100': 'var(--utility-warning-100)',
				'utility-warning-200': 'var(--utility-warning-200)',
				'utility-warning-300': 'var(--utility-warning-300)',
				'utility-warning-400': 'var(--utility-warning-400)',
				'utility-warning-500': 'var(--utility-warning-500)',
				'utility-warning-600': 'var(--utility-warning-600)',
				'utility-warning-700': 'var(--utility-warning-700)',

				'utility-success-50': 'var(--utility-success-50)',
				'utility-success-100': 'var(--utility-success-100)',
				'utility-success-200': 'var(--utility-success-200)',
				'utility-success-300': 'var(--utility-success-300)',
				'utility-success-400': 'var(--utility-success-400)',
				'utility-success-500': 'var(--utility-success-500)',
				'utility-success-600': 'var(--utility-success-600)',
				'utility-success-700': 'var(--utility-success-700)',

				'utility-gray-blue-50': 'var(--utility-gray-blue-50)',
				'utility-gray-blue-100': 'var(--utility-gray-blue-100)',
				'utility-gray-blue-200': 'var(--utility-gray-blue-200)',
				'utility-gray-blue-300': 'var(--utility-gray-blue-300)',
				'utility-gray-blue-400': 'var(--utility-gray-blue-400)',
				'utility-gray-blue-500': 'var(--utility-gray-blue-500)',
				'utility-gray-blue-600': 'var(--utility-gray-blue-600)',
				'utility-gray-blue-700': 'var(--utility-gray-blue-700)',

				'utility-blue-light-50': 'var(--utility-blue-light-50)',
				'utility-blue-light-100': 'var(--utility-blue-light-100)',
				'utility-blue-light-200': 'var(--utility-blue-light-200)',
				'utility-blue-light-300': 'var(--utility-blue-light-300)',
				'utility-blue-light-400': 'var(--utility-blue-light-400)',
				'utility-blue-light-500': 'var(--utility-blue-light-500)',
				'utility-blue-light-600': 'var(--utility-blue-light-600)',
				'utility-blue-light-700': 'var(--utility-blue-light-700)',

				'utility-blue-50': 'var(--utility-blue-50)',
				'utility-blue-100': 'var(--utility-blue-100)',
				'utility-blue-200': 'var(--utility-blue-200)',
				'utility-blue-300': 'var(--utility-blue-300)',
				'utility-blue-400': 'var(--utility-blue-400)',
				'utility-blue-500': 'var(--utility-blue-500)',
				'utility-blue-600': 'var(--utility-blue-600)',
				'utility-blue-700': 'var(--utility-blue-700)',

				'utility-blue-dark-50': 'var(--utility-blue-dark-50)',
				'utility-blue-dark-100': 'var(--utility-blue-dark-100)',
				'utility-blue-dark-200': 'var(--utility-blue-dark-200)',
				'utility-blue-dark-300': 'var(--utility-blue-dark-300)',
				'utility-blue-dark-400': 'var(--utility-blue-dark-400)',
				'utility-blue-dark-500': 'var(--utility-blue-dark-500)',
				'utility-blue-dark-600': 'var(--utility-blue-dark-600)',
				'utility-blue-dark-700': 'var(--utility-blue-dark-700)',

				'utility-indigo-50': 'var(--utility-indigo-50)',
				'utility-indigo-100': 'var(--utility-indigo-100)',
				'utility-indigo-200': 'var(--utility-indigo-200)',
				'utility-indigo-300': 'var(--utility-indigo-300)',
				'utility-indigo-400': 'var(--utility-indigo-400)',
				'utility-indigo-500': 'var(--utility-indigo-500)',
				'utility-indigo-600': 'var(--utility-indigo-600)',
				'utility-indigo-700': 'var(--utility-indigo-700)',

				'utility-purple-50': 'var(--utility-purple-50)',
				'utility-purple-100': 'var(--utility-purple-100)',
				'utility-purple-200': 'var(--utility-purple-200)',
				'utility-purple-300': 'var(--utility-purple-300)',
				'utility-purple-400': 'var(--utility-purple-400)',
				'utility-purple-500': 'var(--utility-purple-500)',
				'utility-purple-600': 'var(--utility-purple-600)',
				'utility-purple-700': 'var(--utility-purple-700)',

				'utility-fuchsia-50': 'var(--utility-fuchsia-50)',
				'utility-fuchsia-100': 'var(--utility-fuchsia-100)',
				'utility-fuchsia-200': 'var(--utility-fuchsia-200)',
				'utility-fuchsia-300': 'var(--utility-fuchsia-300)',
				'utility-fuchsia-400': 'var(--utility-fuchsia-400)',
				'utility-fuchsia-500': 'var(--utility-fuchsia-500)',
				'utility-fuchsia-600': 'var(--utility-fuchsia-600)',
				'utility-fuchsia-700': 'var(--utility-fuchsia-700)',

				'utility-pink-50': 'var(--utility-pink-50)',
				'utility-pink-100': 'var(--utility-pink-100)',
				'utility-pink-200': 'var(--utility-pink-200)',
				'utility-pink-300': 'var(--utility-pink-300)',
				'utility-pink-400': 'var(--utility-pink-400)',
				'utility-pink-500': 'var(--utility-pink-500)',
				'utility-pink-600': 'var(--utility-pink-600)',
				'utility-pink-700': 'var(--utility-pink-700)',

				'utility-orange-dark-50': 'var(--utility-orange-dark-50)',
				'utility-orange-dark-100': 'var(--utility-orange-dark-100)',
				'utility-orange-dark-200': 'var(--utility-orange-dark-200)',
				'utility-orange-dark-300': 'var(--utility-orange-dark-300)',
				'utility-orange-dark-400': 'var(--utility-orange-dark-400)',
				'utility-orange-dark-500': 'var(--utility-orange-dark-500)',
				'utility-orange-dark-600': 'var(--utility-orange-dark-600)',
				'utility-orange-dark-700': 'var(--utility-orange-dark-700)',

				'utility-orange-50': 'var(--utility-orange-50)',
				'utility-orange-100': 'var(--utility-orange-100)',
				'utility-orange-200': 'var(--utility-orange-200)',
				'utility-orange-300': 'var(--utility-orange-300)',
				'utility-orange-400': 'var(--utility-orange-400)',
				'utility-orange-500': 'var(--utility-orange-500)',
				'utility-orange-600': 'var(--utility-orange-600)',
				'utility-orange-700': 'var(--utility-orange-700)'
			},
			borderRadius: {
				DEFAULT: '8px',
				xxs: '2px',
				xs: '4px',
				sm: '6px',
				md: '8px',
				lg: '10px',
				xl: '12px',
				'2xl': '16px',
				'3xl': '20px',
				'4xl': '24px',
				full: '9999px'
			},
			fontWeight: {
				regular: '400',
				medium: '500',
				semibold: '600',
				bold: '700'
			},
			fontSize: {
				xs: [
					'12px',
					{
						lineHeight: '18px',
						letterSpacing: '-0.02em'
					}
				],
				sm: [
					'14px',
					{
						lineHeight: '20px',
						letterSpacing: '-0.02em'
					}
				],
				md: [
					'16px',
					{
						lineHeight: '24px',
						letterSpacing: '-0.02em'
					}
				],
				lg: [
					'18px',
					{
						lineHeight: '28px',
						letterSpacing: '-0.02em'
					}
				],
				xl: [
					'20px',
					{
						lineHeight: '30px',
						letterSpacing: '-0.02em'
					}
				],
				'display-xs': [
					'24px',
					{
						lineHeight: '32px',
						letterSpacing: '-0.02em'
					}
				],
				'display-sm': [
					'30px',
					{
						lineHeight: '38px',
						letterSpacing: '-0.02em'
					}
				],
				'display-md': [
					'36px',
					{
						lineHeight: '44px',
						letterSpacing: '-0.02em'
					}
				],
				'display-lg': [
					'48px',
					{
						lineHeight: '60px',
						letterSpacing: '-0.02em'
					}
				],
				'display-xl': [
					'60px',
					{
						lineHeight: '72px',
						letterSpacing: '-0.02em'
					}
				],
				'display-2xl': [
					'72px',
					{
						lineHeight: '90px',
						letterSpacing: '-0.02em'
					}
				]
			}
		}
	}
} satisfies Config;
