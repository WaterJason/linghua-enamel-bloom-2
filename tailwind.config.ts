
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// 宋代传统色彩系统
				'tianqing': {
					50: '#f0f5f9',
					100: '#dde8f0',
					200: '#c0d4e4',
					300: '#95b8d4',
					400: '#6395c0',
					500: '#4277aa',
					600: '#345f8f',
					700: '#2d4f75',
					800: '#294362',
					900: '#253953',
					950: '#1a2536',
				},
				'ruyao': {
					50: '#f5f8fa',
					100: '#e8f0f3',
					200: '#d6e4ea',
					300: '#b8d0db',
					400: '#94b5c7',
					500: '#769ab6',
					600: '#6182a5',
					700: '#536d95',
					800: '#485c7b',
					900: '#3e4d64',
					950: '#29323f',
				},
				'guanyao': {
					50: '#f6f7f8',
					100: '#eaecef',
					200: '#d9dde2',
					300: '#bec6ce',
					400: '#9ea9b6',
					500: '#8391a2',
					600: '#707b8f',
					700: '#606a7a',
					800: '#525966',
					900: '#454a55',
					950: '#2c2f36',
				},
				'geyao': {
					50: '#fbf9f5',
					100: '#f5f1e8',
					200: '#ebe2d0',
					300: '#dcccb0',
					400: '#cab18e',
					500: '#bb9a74',
					600: '#ae8968',
					700: '#917258',
					800: '#765e4c',
					900: '#614e40',
					950: '#332821',
				},
				'molin': {
					50: '#f8f8f8',
					100: '#efefef',
					200: '#dcdcdc',
					300: '#bdbdbd',
					400: '#989898',
					500: '#7c7c7c',
					600: '#676767',
					700: '#575757',
					800: '#4a4a4a',
					900: '#404040',
					950: '#262626',
				},
				'songci': {
					50: '#f0f9f4',
					100: '#dcf2e4',
					200: '#bce5cc',
					300: '#8bd1a8',
					400: '#54b67e',
					500: '#2f9b5f',
					600: '#227d4b',
					700: '#1d643e',
					800: '#1a5034',
					900: '#17422d',
					950: '#0b2417',
				},
				// 更新原有的配色以符合宋代美学
				azure: {
					50: '#f0f5f9',
					100: '#dde8f0',
					200: '#c0d4e4',
					300: '#95b8d4',
					400: '#6395c0',
					500: '#4277aa',
					600: '#345f8f',
					700: '#2d4f75',
					800: '#294362',
					900: '#253953',
					950: '#1a2536',
				},
				moon: {
					50: '#fbf9f5',
					100: '#f5f1e8',
					200: '#ebe2d0',
					300: '#dcccb0',
					400: '#cab18e',
					500: '#bb9a74',
					600: '#ae8968',
					700: '#917258',
					800: '#765e4c',
					900: '#614e40',
					950: '#332821',
				},
				beige: {
					50: '#f9f8f6',
					100: '#f2f0ec',
					200: '#e5e0d8',
					300: '#d3cbbe',
					400: '#beb19f',
					500: '#ab9d8a',
					600: '#998b79',
					700: '#807567',
					800: '#6a6157',
					900: '#565049',
					950: '#2e2a26',
				},
				seal: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
					950: '#450a0a',
				},
			},
			fontFamily: {
				'noto-serif-sc': ['"Noto Serif SC"', 'serif'],
				'noto-sans-sc': ['"Noto Sans SC"', 'sans-serif'],
				'playfair': ['"Playfair Display"', 'serif'],
				'garamond': ['"EB Garamond"', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'ink-spread': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out forwards',
				'fade-in-delayed': 'fade-in 0.7s ease-out 0.2s forwards',
				'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
				'ink-spread': 'ink-spread 1.2s ease-out forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
