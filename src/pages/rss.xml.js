import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const articles = await getCollection('articles', ({ data }) => !data.draft);

    return rss({
        title: 'Manuel Soberano',
        description: 'Artículos sobre desarrollo de software, arquitectura, .NET, Angular y más.',
        site: context.site,
        items: articles
            .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
            .map((article) => ({
                title: article.data.title,
                pubDate: article.data.pubDate,
                description: article.data.description,
                link: `/articulos/${article.slug}/`,
            })),
        customData: `<language>es</language>`,
    });
}
