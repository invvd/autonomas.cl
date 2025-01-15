// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Autónomas',
		logo: {
			src: '/logo.png',
			alt: 'Autónomas',
			text: 'Autónomas'
		}
	},
	footerColumns: [
		{
			category: 'Redes Sociales',
			subCategories: [
				{
					subCategory: 'Instagram',
					subCategoryLink: 'https://www.instagram.com/autonomascl/'
				},
				{
					subCategory: 'TikTok',
					subCategoryLink: 'https://www.tiktok.com/@autonomas'
				},
				{
					subCategory: 'Facebook',
					subCategoryLink: 'https://www.facebook.com/AutonomasCL/?locale=es_LA'
				}
			]
		},
		{
			category: 'Contacto',
			subCategories: [
				{
					subCategory: 'WhatsApp',
					subCategoryLink: 'https://wa.me/56952043000'
				},
				{
					subCategory: 'Email',
					subCategoryLink: 'mailto:info@autonomas.cl'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Autónomas 2025'
	}
}
