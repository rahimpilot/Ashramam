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
    slug: 'team-sensorium',
    title: 'Team Sensorium',
    image: '/images/team-sensorium.jpg',
    paragraphs: [
      'They called themselves Team Sensorium \u2014 three guys who lived together in some random galli of Thrissur, and were, to put it politely, completely non-predictable. Chilling, funny, and always up to something. Their flat was basically an open house \u2014 friends were welcomed in for all kinds of unusual activities. Shylock, as usual, appointed himself the accounting manager of the house, and somehow ended up managing the other two guys as well.',
      'The three of them had their own circle of good friends to hang out with and go on trips with, and the good times just kept rolling. Their friendship was ridiculously strong \u2014 built entirely on fun. And when it actually mattered, they stood by each other through everything, no matter the situation.',
      'Then came the incident that made them village-famous. One fine day, one of the guys went riding his Yamaha drunk, with his Mangalore partner in crime \u2014 and ended up literally smooching a stone. The whole village heard about it. Those were the days. The guys became too famous.',
      'Back at Sensorium, they played together, ate together, sang together \u2014 etcetera, etcetera, etcetera. One of the guys was smart enough to \u201cscore\u201d stuff whenever the situation demanded, and that story is famous in the village too. Jokes apart \u2014 they are true friends. They don\u2019t meet each other much these days, but they still cherish those naughty times from their younger, wilder days.',
    ],
  },
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
