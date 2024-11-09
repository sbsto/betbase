<script lang="ts">
	import { client } from '$lib/api';

	let greeting = $state('');

	async function handleSayHello() {
		const res = await client.user.hello({ name: 'Sam' });
		greeting = res.message;
	}
</script>

<main class="px-2">
	<h1>BetBase</h1>
	<button onclick={handleSayHello}>Say hello to Sam</button>
	<p>{greeting}</p>
</main>
