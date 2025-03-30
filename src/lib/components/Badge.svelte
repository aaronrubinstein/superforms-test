<script lang="ts">
	let { status }: { status: Status } = $props();
</script>

<div class="badge {status}">
	{#if status === 'draft'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="16px"
			viewBox="0 -960 960 960"
			width="16px"
			fill="currentColor"
			><path
				d="m511-311 326-325-57-57-325 326 56 56ZM239-192q-91-3-141-40T48-333q0-63 50-101t139-44q35-2 55-12.5t20-26.5q0-27-27-40t-96-19l6-72q96 6 142.5 38.5T384-517q0 48-37 77t-105 34q-61 5-91.5 23T120-333q0 33 29 49.5t93 19.5l-3 72Zm287-32L368-383l367-366q19-19 45.5-19t45.5 19l67 67q19 19 19 45.5T893-591L526-224Zm-153 32q-17 4-29-8t-8-29l32-154 158 159-153 32Z"
			/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="20px"
			viewBox="0 -960 960 960"
			width="20px"
			fill="currentColor"
			><path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z" />
		</svg>
	{/if}
	<span>{status}</span>
</div>

<style>
	.badge {
		height: 20px;
		padding: 0 8px 0 4px;
		border-radius: 4px;
		display: flex;
		align-items: center;
		gap: 4px;
		font-family: 'Google Sans Text';
		font-size: 12px;
		font-weight: 500;
		line-height: 16px;
		letter-spacing: 0.1px;
		text-transform: capitalize;
	}

	.badge.draft {
		background-color: #fff2b4;
		color: #6d3a01;
		padding-left: 8px;
	}

	.badge.submitted {
		background-color: #beefbb;
		color: #006c35;
	}
</style>
