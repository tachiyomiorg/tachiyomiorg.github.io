module.exports = [
	'/',
	{
		title: 'Guides',
		path: '/help/guides/',
		sidebarDepth: 2,
		children: [
			{
				title: 'General',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/guides/getting-started',
					'/help/guides/reading-local-manga',
					'/help/guides/source-problems',
					'/help/guides/categories',
					'/help/guides/library-filters',
					'/help/guides/source-migration'
				]
			},
			{
				title: 'Menus',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/guides/my-library',
					'/help/guides/library-updates',
					'/help/guides/recently-read',
					'/help/guides/catalogues',
					'/help/guides/extensions',
					'/help/guides/download-queue'
				]
			},
			{
				title: 'Settings',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/guides/general',
					'/help/guides/reader',
					'/help/guides/downloads',
					'/help/guides/tracking',
					'/help/guides/backup',
					'/help/guides/advanced'
				]
			}
		]
	},
	{
		title: 'Frequently Asked Questions',
		path: '/help/faq/',
		sidebarDepth: 2,
		children: [
			{
				title: 'General',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/faq/application',
					'/help/faq/extensions'
				]
			},
			{
				title: 'Contribution',
				collapsable: false,
				sidebarDepth: 2,
				children: [
					'/help/faq/how-can-i-help'
				]
			}
		]
	},
	'/extensions/'
];
