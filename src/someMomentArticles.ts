/** Photo + story articles inside Some Moments.
 *
 * Curated pipeline, same as the videos: Ray sends the picture + title + story
 * text, Muse proofreads (keeping his voice and jokes) and publishes here.
 * Add one entry below per article — newest first.
 */

export interface MomentArticle {
  slug: string;
  title: string;
  /** Bundled photo — shown on the card and at the top of the article. */
  image: string;
  /** Story paragraphs, in order. */
  paragraphs: string[];
}

export const MOMENT_ARTICLES: MomentArticle[] = [
  {
    slug: 'soccer-players',
    title: 'Foot Ball Players',
    image: '/images/soccer-players.jpg',
    paragraphs: [
      'Those were the days \u2014 Ashramam used to play football hard until late into the night, all in the name of fun and health. And on the way back home, there was always the mandatory pit stop at Eepan and the Kadavu restaurant. This went on for quite a while, and we kept calling the whole thing \u201chealthy\u201d \u2014 because, hey, we were playing soccer every now and then\u2026 even though we broke Bruno\u2019s leg and split Hyder\u2019s lip along the way. No big deal.',
      'The court itself was not exactly friendly either. Maharoof and the Barsha boys suggested a concrete court \u2014 the kind of surface no sane person would risk playing on. But Ashramam, ever the optimists, decided that concrete was the perfect place for soccer. At one point we finally admitted to ourselves that this was going to end badly, so we stopped playing\u2026 and decided to spend more time at the Eepan stop and Kadavu instead.',
    ],
  },
];
