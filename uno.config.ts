import {
	defineConfig,
	presetIcons,
	presetAttributify,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	presets: [presetAttributify(), presetIcons(), presetWebFonts()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	extractors: [extractorSvelte()],
	theme: {
		breakpoints: {
			xs: '340px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1366px'
		}
	}
});
