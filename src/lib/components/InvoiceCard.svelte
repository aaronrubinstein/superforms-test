<script lang="ts">
	import Badge from './Badge.svelte';

	let { id, client, description, amount, status }: Invoice = $props();
</script>

<article>
	<div class="client">
		<div class="label">Client</div>
		<div class="value">{client}</div>
	</div>
	<div class="description">
		<div class="label">Description</div>
		<div class="value">{description}</div>
	</div>
	<div class="amount">
		<div class="label">Amount</div>
		<div class="value">
			${Number(amount).toLocaleString('en-US', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			})}
		</div>
	</div>
	<div class="status">
		<Badge {status} />
	</div>
</article>

<style>
	article {
		padding: 12px 20px;
		display: grid;
		grid-template-columns: subgrid;
		grid-column: span 4;
		align-items: center;
		border-radius: 12px;
		box-shadow:
			0px 1px 2px 0px rgba(0, 0, 0, 0.3),
			0px 2px 6px 2px rgba(0, 0, 0, 0.15);
		background-color: #ffffff;
	}

	.label {
		font-family: 'Google Sans Text';
		font-size: 12px;
		font-weight: 400;
		line-height: 20px;
		letter-spacing: 0px;
		color: hsla(0, 0%, 12%, 1);
		margin-bottom: 2px;
	}

	.value {
		font-family: 'Google Sans Text';
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0px;
		color: hsla(0, 0%, 12%, 1);
	}

	.status {
		margin-left: auto;
	}
</style>
