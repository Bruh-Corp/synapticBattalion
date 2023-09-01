<script>
	import '../fonts.css';
	import '../styles.css';
	import '../homepage.css';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Synaptic Battalion</title>
	<link rel="icon" href="{base}/favicon.png" />
	<meta name="msvalidate.01" content="01B7668062C073ECB07E97793BDD4B56" />
	<meta
		name="description"
		content="Synaptic Battalion (SB.) is an attribute of Bruh Corp. dedicated to editorial and journalistic content."
	/>
</svelte:head>

<div class="introduction">
	<h1>Synaptic<br />Battalion</h1>
</div>
<p>
	Synaptic Battalion (SB.) is an attribute of Bruh Corp. dedicated to editorial and journalistic
	content.
</p>

<!-- <div class="flexbox">
    <div class="highlights">
        <h2>Publishes</h2>
        <a href="{base}/"><p>some article</p></a>
        <a href="{base}/"><p>another article</p></a>
        <a href="{base}/"><p>ww3</p></a>
    </div> 

</div>
-->

<h2>Recent<br />Publishes</h2>

<!-- <div class="toggles">
    <a href="{base}/"><h3>101</h3></a>
    <a href="{base}/"><h3>Editorial</h3></a>
    <a href="{base}/"><h3>Article</h3></a>
    <a href="{base}/"><h3>report</h3></a>
    <a href="{base}/"><h3>genre</h3></a>
</div> -->

<div class="content">
	<div class="contentCard">
		<a href="{base}/writings/journey-to-the-stars">
			<img src="{base}/images/articleaayan1.jpg" alt="Hi there" />
		</a>
		<h4>Journey to the stars</h4>
		<p>Unveiling the Enigma of Potential Habitable Exoplanets.</p>
		<div class="date"><span>Aayan</span>13th August, 2023</div>
	</div>
	<div class="contentCard">
		<a href="{base}/writings/infinity">
			<img src="{base}/images/articlefasam1.jpeg" alt="Hi there" />
		</a>
		<h4>Infinity</h4>
		<p>
			Infinity, A cruel mathematical concept, a philosopher's worse nightmare and the possible
			explanation of our universe.
		</p>
		<div class="date"><span>Fasam</span>7th August, 2023</div>
	</div>
	<div class="contentCard">
		<a href="{base}/writings/encyclopedia-disinformatica">
			<img src="{base}/images/articleaasil1.png" alt="Hi there" />
		</a>
		<h4>Encyclopedia Disinformatica</h4>
		<p>The Challenges and Choices of Protecting Information on the Internet.</p>
		<div class="date"><span>A++</span>6th August, 2023</div>
	</div>
	<div class="contentCard">
		<a href="{base}/writings/technology-in-warfare">
			<img src="{base}/images/articletal1.png" alt="Hi there" />
		</a>
		<h4>Role of Modern technology in warfare & peacekeeping</h4>
		<p>Do emerging technologies in modern warfare have an absolute role in peacekeeping?</p>
		<div class="date"><span>tal</span>14th January, 2022</div>
	</div>
</div>
