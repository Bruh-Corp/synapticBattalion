<svelte:head>
	<title>Synaptic Battalion</title>
	<meta name="description" content="Synaptic Battalion (SB.) is an attribute of Bruh Corp. dedicated to editorial and journalistic content.">
</svelte:head>

<script>
	import '../fonts.css';
	import '../styles.css';
	import '../homepage.css';
	import { base } from '$app/paths';
</script>

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
		<a href="{base}/">
			<img src="{base}/images/neuron.png" alt="Hi there" />
		</a>
		<h4>Today's Topic: Slavery</h4>
		<p>In today's topic we will be explaining why racism is scientific</p>
		<div class="date"><span>Wednesday</span>9th March, 2005</div>
	</div>

	<div class="contentCard">
		<a href="{base}/">
			<img src="{base}/images/neuron.png" alt="Hi there" />
		</a>
		<h4>Today's Topic: Slavery</h4>
		<p>In today's topic we will be explaining why racism is scientific</p>
		<div class="date"><span>Wednesday</span>9th March, 2005</div>
	</div>
	
	<div class="contentCard">
		<a href="{base}/">
			<img src="{base}/images/neuron.png" alt="Hi there" />
		</a>
		<h4>Today's Topic: Slavery</h4>
		<p>In today's topic we will be explaining why racism is scientific</p>
		<div class="date"><span>Wednesday</span>9th March, 2005</div>
	</div>

	<div class="contentCard">
		<a href="{base}/writings/content-tal-1">
			<img src="{base}/images/articletal1.png" alt="Hi there" />
		</a>
		<h4>Role of modern technology in warfare & peacekeeping</h4>
		<p>Do emerging technologies in modern warfare have an absolute role in peacekeeping?</p>
		<div class="date"><span>Friday</span>14th January, 2022</div>
	</div>
</div>

