<script lang="ts">
	import { fade, slide } from 'svelte/transition';

	export let delayOut: number = 0;
	export let delayIn: number = 0;
	export let duration: number = 200;
</script>

<div out:fade={{ delay: delayOut, duration: 100 }}>
	<div out:slide={{ duration, delay: delayOut + 100 }}>
		<div in:slide={{ duration, delay: delayIn }}>
			<div in:fade={{ delay: duration + delayIn, duration: 100 }}>
				<slot />
			</div>
		</div>
	</div>
</div>
