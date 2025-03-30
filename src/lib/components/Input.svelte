<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	interface Props {
		type?: HTMLInputTypeAttribute;
		name: string;
		label: string;
		supportingText?: string;
		value: any;
		disabled?: boolean;
		errors: string[] | undefined;
		width?: string;
		style?: string;
	}

	let {
		type = 'text',
		name,
		label,
		supportingText,
		value = $bindable(),
		disabled = false,
		errors,
		width = '100%',
		style = ''
	}: Props = $props();
</script>

<div class="wrapper" style={`width: ${width}; ${style}`}>
	<div class="input-container">
		<input
			id={name}
			{type}
			{name}
			aria-invalid={errors ? 'true' : undefined}
			class={[errors && 'invalid', disabled && 'disabled', value && 'populated']}
			bind:value
		/>
		<label for={name}>
			<div>{label}</div>
		</label>
		{#if errors}
			<div class="error-icon">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_6639_754)">
						<path
							d="M12 17C12.2833 17 12.5167 16.9083 12.7 16.725C12.9 16.525 13 16.2833 13 16C13 15.7167 12.9 15.4833 12.7 15.3C12.5167 15.1 12.2833 15 12 15C11.7167 15 11.475 15.1 11.275 15.3C11.0917 15.4833 11 15.7167 11 16C11 16.2833 11.0917 16.525 11.275 16.725C11.475 16.9083 11.7167 17 12 17ZM11 13H13V7H11V13ZM12 22C10.6167 22 9.31667 21.7417 8.1 21.225C6.88333 20.6917 5.825 19.975 4.925 19.075C4.025 18.175 3.30833 17.1167 2.775 15.9C2.25833 14.6833 2 13.3833 2 12C2 10.6167 2.25833 9.31667 2.775 8.1C3.30833 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31667 8.1 2.8C9.31667 2.26667 10.6167 2 12 2C13.3833 2 14.6833 2.26667 15.9 2.8C17.1167 3.31667 18.175 4.025 19.075 4.925C19.975 5.825 20.6833 6.88333 21.2 8.1C21.7333 9.31667 22 10.6167 22 12C22 13.3833 21.7333 14.6833 21.2 15.9C20.6833 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6917 15.9 21.225C14.6833 21.7417 13.3833 22 12 22Z"
							fill="#B3261E"
						/>
					</g>
				</svg>
			</div>
		{/if}
	</div>
	<div class="supporting-text">
		{#if errors}
			{errors}
		{:else}
			{supportingText}
		{/if}
	</div>
</div>

<style>
	.input-container {
		position: relative;
	}

	input {
		height: 56px;
		width: 100%;
		border-radius: 4px;
		border: 1px solid #747775;
		padding: 4px 16px;
	}

	label {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 16px;
		display: flex;
		align-items: center;
		pointer-events: none;
	}

	input,
	label div {
		font-family: 'Google Sans Text';
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0px;
		color: #1f1f1f;
	}

	label div {
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	input:hover {
		border: 1px solid #1f1f1f;
	}

	input:hover + label div {
		color: #1f1f1f;
	}

	input:focus {
		outline: none;
		border: 1px solid #0b57d0;
		box-shadow: 0 0 0 2px #0b57d0;
	}

	input:focus + label div,
	input.populated + label div {
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.1px;
		transform: translate(0, -173%);
		padding: 0 4px;
		background-color: #ffffff;
	}

	input:focus + label div {
		color: #0b57d0;
	}

	.supporting-text {
		font-family: 'Google Sans Text';
		font-size: 12px;
		font-weight: 400;
		line-height: 16px;
		letter-spacing: 0.1px;
		color: #444746;
		padding: 4px 16px 0 16px;
		text-wrap: wrap;
	}

	input.invalid {
		border: 1px solid #b3261e;
		padding: 4px 40px 4px 16px;
	}

	input.invalid:focus {
		border: 1px solid #b3261e;
		box-shadow: 0 0 0 2px #b3261e;
	}

	input.invalid + label div {
		color: #b3261e;
	}

	.wrapper:has(input.invalid) .supporting-text {
		color: #b3261e;
	}

	.error-icon {
		position: absolute;
		display: flex;
		align-items: center;
		top: 0;
		bottom: 0;
		right: 12px;
	}
</style>
