<script>
	import '../app.css'

	async function getQuote() {
		const url = 'https://zenquotes.io/api/random'
		const response = await fetch(url)
		const [quoteInfo] = await response.json()
		return quoteInfo
	}

	let promiseQuote = getQuote()

</script>

<h1 class="text-4xl mt-4">Personal Website</h1>
<p class="text-sm m-3">This is my website. Thank you for checking it out!</p>
<h4 class="text-xl mt-4">Daily Quote</h4>
{#await promiseQuote}
	<div class="text-sm ml-3">
		<p class="mt-1">Loading quote...</p>
	</div>	
{:then quoteInfo}
	<div class="text-sm ml-3">
		<p class="mt-1">{quoteInfo.q}</p>
		<p class="mt-1">&nbsp;-&nbsp;{quoteInfo.a}</p>
	</div>
{:catch error}
	<div class="text-sm ml-3">
		<p class="mt-1">Could not load quote</p>
	</div>
{/await}


