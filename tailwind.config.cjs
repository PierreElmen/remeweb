/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
			},
			colors: {
				reme: {
					cream: '#FFFDF8',
					charcoal: '#1F2326',
					olive: '#59633F',
					sage: '#BAC78A',
					muted: '#686A67',
					peach: '#F5E6DC',
					border: '#7D8467',
					destructive: '#D4183D'
				}
			},
			spacing: {
				18: '4.5rem'
			},
			borderRadius: {
				'reme-sm': '12px',
				reme: '16px',
				'reme-lg': '20px'
			},
			boxShadow: {
				reme: '0 20px 50px rgba(31, 35, 38, 0.08)'
			}
		}
	},
	plugins: []
};
