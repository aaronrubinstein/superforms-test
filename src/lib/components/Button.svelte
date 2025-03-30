<script lang="ts">
	import ripplet from 'ripplet.js';
	import type { Snippet } from 'svelte';

	interface Props {
		type?: 'button' | 'submit' | 'reset' | null | undefined;
		variant?: 'filled' | 'outlined' | 'elevated' | 'tonal' | 'text';
		iconPosition?: 'icon-left' | 'icon-right';
		disabled?: boolean;
		onclick?: () => void;
		style?: string;
		children: Snippet;
	}

	let {
		type = 'button',
		variant = 'filled',
		iconPosition,
		disabled = false,
		onclick,
		style = '',
		children
	}: Props = $props();
</script>

<button
	{type}
	{onclick}
	class={[variant, iconPosition, disabled && 'disabled']}
	{style}
	onpointerdown={(e) => ripplet(e, { spreadingDuration: '.2s', appendTo: 'parent' })}
>
	{@render children()}
</button>

<style>
	button {
		height: 40px;
		border-radius: 999px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		gap: 8px;
		padding: 0 24px;
		font-family: 'Google Sans Text';
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: 0px;
		transition:
			opacity 75ms linear,
			background-color 0.15s linear,
			box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.disabled {
		cursor: default;
		pointer-events: none;
	}

	.icon-left {
		padding: 0 24px 0 16px;
	}

	.icon-right {
		padding: 0 16px 0 24px;
	}

	.filled {
		background-color: #0b57d0;
		color: #ffffff;

		&:hover {
			opacity: 0.96;
			box-shadow:
				0px 1px 2px 0px rgba(0, 0, 0, 0.3),
				0px 1px 3px 1px rgba(0, 0, 0, 0.15);
		}

		&:active {
			opacity: 0.9;
			box-shadow: none;
		}

		&.disabled {
			background-color: rgba(31, 31, 31, 0.12);
			color: rgba(31, 31, 31, 0.38);

			&:hover,
			&:active {
				box-shadow: none;
				opacity: none;
			}
		}
	}

	.outlined {
		background-color: #ffffff;
		color: #0b57d0;
		border: 1px solid #747775;

		&:hover {
			background-color: rgba(11, 87, 208, 0.08);
			border: 1px solid #0b57d0;
		}

		&:active {
			background-color: rgba(11, 87, 208, 0.1);
		}

		&.disabled {
			color: rgba(31, 31, 31, 0.38);
			border: 1px solid rgba(31, 31, 31, 0.12);

			&:hover,
			&:focus {
				background-color: #ffffff;
			}
		}
	}

	.elevated {
		background-color: #ffffff;
		color: #0b57d0;
		box-shadow:
			0px 1px 2px 0px rgba(0, 0, 0, 0.3),
			0px 1px 3px 1px rgba(0, 0, 0, 0.15);

		&:hover {
			background-color: rgba(11, 87, 208, 0.08);
		}

		&:active {
			background-color: rgba(11, 87, 208, 0.1);
			box-shadow: none;
		}

		&.disabled {
			background-color: rgba(31, 31, 31, 0.12);
			color: rgba(31, 31, 31, 0.38);
			box-shadow: none;

			&:hover {
				box-shadow: none;
				opacity: none;
			}
		}
	}

	.tonal {
		background-color: #c2e7ff;
		color: #004a77;

		&:hover {
			opacity: 0.92;
			box-shadow:
				0px 1px 2px 0px rgba(0, 0, 0, 0.3),
				0px 1px 3px 1px rgba(0, 0, 0, 0.15);
		}

		&:active {
			opacity: 0.9;
			box-shadow: none;
		}

		&.disabled {
			background-color: rgba(31, 31, 31, 0.12);
			color: rgba(31, 31, 31, 0.38);
			box-shadow: none;

			&:hover {
				box-shadow: none;
				opacity: none;
			}
		}
	}

	.text {
		background-color: transparent;
		color: #0b57d0;

		&:hover {
			background-color: rgba(11, 87, 208, 0.08);
		}

		&:active {
			background-color: rgba(11, 87, 208, 0.1);
		}

		&.disabled {
			background-color: transparent;
			color: rgba(31, 31, 31, 0.38);
		}
	}
</style>
