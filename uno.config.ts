import {
	defineConfig,
	presetIcons,
	presetUno,
	presetAttributify,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';
import { presetForms } from '@julr/unocss-preset-forms';

export default defineConfig({
	presets: [presetUno(), presetAttributify(), presetIcons(), presetWebFonts(), presetForms()],
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
