
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
				// Linghua Custom Colors - Ru Ware Palette
				azure: {
					50: '#f1f6fa',
					100: '#e1ecf5',
					200: '#c9dcec',
					300: '#9fc4de',
					400: '#6ea3ca',
					500: '#4d87b7',
					600: '#3b6d9c',
					700: '#325980',
					800: '#2d4a6b',
					900: '#284059',
					950: '#1c2a3c',
				},
				moon: {
					50: '#f8f8f0',
					100: '#f2f2e3',
					200: '#e7e6cd',
					300: '#d8d5ae',
					400: '#c3be87',
					500: '#b1a96b',
					600: '#9e9457',
					700: '#847a49',
					800: '#6d6540',
					900: '#5b533a',
					950: '#302c1d',
				},
				beige: {
					50: '#f9f8f6',
					100: '#f0eeeb',
					200: '#e0dbd4',
					300: '#cec4b8',
					400: '#b9a898',
					500: '#a99180',
					600: '#9c7f6e',
					700: '#876c5c',
					800: '#71594f',
					900: '#5e4b41',
					950: '#322721',
				},
				seal: {
					50: '#fff1f2',
					100: '#ffe0e2',
					200: '#ffc6cb',
					300: '#ff9da5',
					400: '#ff6672',
					500: '#fa3548',
					600: '#e51a30',
					700: '#c11029',
					800: '#a01228',
					900: '#851327',
					950: '#480512',
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
