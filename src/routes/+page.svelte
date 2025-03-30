<script lang="ts">
	import InvoiceCard from '$lib/components/InvoiceCard.svelte';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';

	let { data } = $props();
</script>

<h2>Invoices</h2>

<div class="invoice-list">
	{#each data.invoices as invoice}
		<InvoiceCard {...invoice} />
	{/each}
</div>

<h3>Create invoice</h3>

<section>
	<Input
		name="Test"
		label="Label"
		value=""
		errors={undefined}
		supportingText="Supporting text"
		width="400px"
		style="margin-right: 20px;"
	/>
	<Input name="Test" label="Label" value="" errors={undefined} />
</section>

<Button variant="elevated" iconPosition="icon-left" style="margin-right: 10px">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20px"
		viewBox="0 -960 960 960"
		width="20px"
		fill="currentColor"><path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" /></svg
	>
	Save Draft
</Button>
<Button variant="tonal" iconPosition="icon-left" style="margin-right: 10px">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20px"
		viewBox="0 -960 960 960"
		width="20px"
		fill="currentColor"><path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" /></svg
	>
	Save Draft
</Button>
<Button variant="text" iconPosition="icon-left" style="margin-right: 10px">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20px"
		viewBox="0 -960 960 960"
		width="20px"
		fill="currentColor"><path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" /></svg
	>
	Save Draft
</Button>
<Button variant="outlined" iconPosition="icon-left" style="margin-right: 10px">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20px"
		viewBox="0 -960 960 960"
		width="20px"
		fill="currentColor"><path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" /></svg
	>
	Save Draft
</Button>
<Button iconPosition="icon-left">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="20px"
		viewBox="0 -960 960 960"
		width="20px"
		fill="currentColor"><path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" /></svg
	>
	Submit
</Button>

<style>
	h2 {
		font-size: 36px;
		font-weight: 400;
		line-height: 44px;
		letter-spacing: 0px;
		margin-bottom: 36px;
	}

	.invoice-list {
		display: grid;
		grid-template-columns: 2fr 2fr 1fr max-content;
		row-gap: 14px;
		column-gap: 20px;
		margin-bottom: 36px;
	}

	h3 {
		font-size: 24px;
		font-weight: 400;
		line-height: 32px;
		letter-spacing: 0px;
		margin-bottom: 24px;
	}

	section {
		background-color: #ffffff;
		border-radius: 12px;
		padding: 30px;
		height: 200px;
		margin-bottom: 20px;
		display: flex;
	}
</style>
