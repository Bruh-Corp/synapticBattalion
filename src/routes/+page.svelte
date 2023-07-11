
<script>
    import '../fonts.css'
    import '../styles.css'
    import '../homepage.css'
    import { onMount } from 'svelte';

let time = new Date();

// these automatically update when `time`
// changes, because of the `$:` prefix
$: hours = time.getHours();
$: minutes = time.getMinutes();
$: seconds = time.getSeconds();

onMount(() => {
    const interval = setInterval(() => {
        time = new Date();
    }, 1000);

    return () => {
        clearInterval(interval);
    };
});
</script>

<style>
	svg {
		width: 20%;
		height: 20%;
	}

	.clock-face {
		stroke: white;
		fill: none;
	}

	.minor {
		stroke: white;
		stroke-width: 0.5;
	}

	.major {
		stroke: white;
		stroke-width: 1;
	}

	.hour {
		stroke: white;
	}

	.minute {
		stroke: white;
	}

	.second,
	.second-counterweight {
		stroke: darkmagenta;
	}

	.second-counterweight {
		stroke-width: 2;
	}
</style>


<div class="navbar">
    <img src="/images/sb.png" alt="Hi there">
    <a href="/"><h3>About Us</h3></a>
    <a href="/"><h3>Contact Us</h3></a>
    <a href="/"><h3>Bruh Corp.</h3></a>

</div>
<div class="introduction">
    <h1>Synaptic<br>Battalion</h1>
    <p>Synaptic Battalion (SB.) is an attribute of Bruh Corp. dedicated to editorial and journalistic content.</p>
    <p>Writers at Synaptic Battalion aim to provide the utmost quality of topical journalism</p>
</div>
<div class="flexbox">
    <div class="highlights">
        <h2>Recent Highlights</h2>
        <a href="/"><p>some article</p></a>
        <a href="/"><p>another article</p></a>
        <a href="/"><p>ww3</p></a>
    </div>
    

    <svg viewBox="-50 -50 100 100">
        <circle class="clock-face" r="48" />
    
        <!-- markers -->
        {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
            <line class="major" y1="35" y2="45" transform="rotate({30 * minute})" />
    
            {#each [1, 2, 3, 4] as offset}
                <line class="minor" y1="42" y2="45" transform="rotate({6 * (minute + offset)})" />
            {/each}
        {/each}
    
        <!-- hour hand -->
        <line class="hour" y1="2" y2="-20" transform="rotate({30 * hours + minutes / 2})" />
    
        <!-- minute hand -->
        <line class="minute" y1="4" y2="-30" transform="rotate({6 * minutes + seconds / 10})" />
    
        <!-- second hand -->
        <g transform="rotate({6 * seconds})">
            <line class="second" y1="10" y2="-38" />
            <line class="second-counterweight" y1="10" y2="2" />
        </g>
    </svg>
    
    

</div>
   
<div class="toggles">
    <a href="/"><h3>101</h3></a>
    <a href="/"><h3>Editorial</h3></a>
    <a href="/"><h3>Article</h3></a>
    <a href="/"><h3>report</h3></a>
    <a href="/"><h3>genre</h3></a>
</div>