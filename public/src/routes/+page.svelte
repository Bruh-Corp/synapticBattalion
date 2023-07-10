

<script>
    import '../fonts.css'
    import '../styles.css'

    let name = '';

</script>

<center>
    <img src="/images/sb.png" alt="Hi there">
</center>

<h1>Synaptic Battalion</h1>

<center>
    <p>Synaptic Battalion is an attribute of Bruh Corp. dedicated to editorial and journalistic content.</p>
</center>

<h2>
    Welcome to SvelteKit
</h2>

<p>Enter your name to be greeted</p>

<input bind:value={name} placeholder="enter your name" />

<p>Hi there {name || 'stranger'}.</p>

