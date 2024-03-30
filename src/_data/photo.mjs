import EleventyFetch from '@11ty/eleventy-fetch';
import Parser from 'rss-parser';

export default async function () {
	const url = 'https://pix.thewalkingdeaf.social/users/steve.atom';

	try {
		const text = await EleventyFetch(url, {
			duration: '0s',
			type: 'text',
		});

		const parser = new Parser({
			customFields: {
				item: [['media:content', 'image']],
			},
		});

		const feed = await parser.parseString(text);

		const photos = [];

		feed.items?.forEach((item) => {
			photos.push({
				label: 'View image on Pixelfed',
				link: item.id,
				image: item.image['$']['url'],
			});
		});

		return {
			link: feed.link,
			gallery: photos.slice(0, 5),
		};
	} catch (error) {
		console.log('Error: Failed to parse Pixelfed', error);

		return {
			link: '',
			gallery: [],
		};
	}
}