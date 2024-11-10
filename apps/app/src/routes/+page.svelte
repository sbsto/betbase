<script lang="ts">
	import { createSIWE } from '$lib/siwe/client';
	import { createAppKit } from '@reown/appkit';
	import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
	import { arbitrum, mainnet, type AppKitNetwork } from '@reown/appkit/networks';

	const metadata = {
		name: 'AppKit SIWE',
		description: 'AppKit SIWE Example',
		url: 'https://reown.com',
		icons: ['https://avatars.githubusercontent.com/u/179229932']
	};

	export const chains: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, arbitrum];

	const wagmiAdapter = new WagmiAdapter({
		networks: chains,
		projectId: 'ed8346655314b06d8b88dfaea00e7a5a',
		ssr: false
	});

	const siweConfig = createSIWE(chains);

	createAppKit({
		adapters: [wagmiAdapter],
		networks: chains,
		projectId: 'ed8346655314b06d8b88dfaea00e7a5a',
		siweConfig,
		metadata,
		features: {
			email: true,
			socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
			emailShowWallets: true
		}
	});
</script>

<main class="flex h-full flex-col items-center justify-center gap-2 px-2">
	<h1 class="text-display-xl font-medium">betbase</h1>
	<w3m-button></w3m-button>
</main>
