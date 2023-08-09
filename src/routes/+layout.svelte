<script>
	import '../fonts.css';
	import '../styles.css';
	import { base } from '$app/paths';
</script>

<div class="navbar">
	<img class="imgLogo" src="{base}/images/sb.png" alt="Hi there" />
		<div class="navItem" id="navItem">
		<img class="imgArray" src="{base}/images/neuron.png" alt="Hi there" />
		<a href="{base}/"><h3>Home</h3></a>
		<img class="imgArray" src="{base}/images/neuron3.png" alt="Hi there" />
		<a href="{base}/join"><h3>Join SB.</h3></a>
		<img class="imgArray" src="{base}/images/neuron2.png" alt="Hi there" />
		<a href="{base}/about"><h3>About Us</h3></a>
		<img class="imgArray" src="{base}/images/bcsb.png" alt="Hi there" />
		<a href="https://bruh-corp.github.io/" target="_blank"><h3>Bruh Corp.</h3></a>
	</div>
</div>
<slot />
<footer>
	<div class="footerItem one">
		<h4>Synaptic Battalion - 2023</h4>
		<p>A service of Bruh Corp.</p>
		<p class="dalleBanner">SB. uses DALL·E's generated images.</p>
		<p class="dalleBanner">SB. uses GitHub's Mona Sans Font.</p>
		<div class="sveltebox">
			<h3>SvelteKit</h3><img src="{base}/images/svelte-logo.png" alt="">
		</div>
	</div>
	<div class="footerItem">
		<h2>@</h2>
		<a href="https://github.com/Talha-Ijaz-Qureshi/synapticBattalion"><h3>Github</h3></a>
		<a href="mailto:synapticbattalion@gmail.com?subject=I visited Synaptic Battalion!"
			><h3>Email</h3></a
		>
		<a href="https://www.instagram.com/synapticbattalion/"><h3>Instagram</h3></a>
		<a href="https://bruh-corp.github.io/"><h3>Bruh Corp.</h3></a>
	</div>
</footer>
<div class="footerFlex">
	<img class="footerImg" src="{base}/images/sbfooter.png" alt="Hi there" />
	<img class="footerImg" src="{base}/images/sbfooter2.png" alt="Hi there" />
</div>
