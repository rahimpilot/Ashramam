/** Photo + story articles inside Some Moments.
 *
 * Curated pipeline, same as the videos: Ray sends the picture + title + story
 * text, Muse proofreads (keeping his voice and jokes) and publishes here.
 * Add one entry below per article — newest first.
 */

export interface MomentArticle {
  slug: string;
  title: string;
  /** Bundled photo — shown on the card and at the top of the article.
   *  Optional: an article can go live before its photo arrives (Ray sends
   *  the picture later); the card shows a "Photo coming soon" tile. */
  image?: string;
  /** Story paragraphs, in order. */
  paragraphs: string[];
}

export const MOMENT_ARTICLES: MomentArticle[] = [
  {
    slug: 'hyder-in-mosque',
    title: 'Hyder in Mosque',
    image: '/images/hyder-in-mosque.jpg',
    paragraphs: [
      'Nobody saw this coming. Not us, not Doha, and definitely not Hyder himself. There he was \u2014 Mohammed Hyder, of all people \u2014 walking towards a mosque in Doha, looking for all the world like a man on his way to pray. Accident? Mistake? A wrong turn on the way to somewhere far more Hyder? We may never know.',
      'To be fair, Hyder visits Doha often. Officially, it is business. Unofficially, it is also where his partners-in-crime live \u2014 his naughty Umrah friends, the ones who finish Umrah and immediately flee to Goa, Thailand, Colombo, and wherever else the fun is hiding. Some people collect air miles. This crew collects escapes.',
      'Ask them what they believe in and you will get a shrug. They are neither religious nor atheist \u2014 they simply have not decided yet, and they are in no hurry to. One thing they do know: they want fun, and they want naughtiness. Preferably both. Preferably soon.',
      'And now Hyder is off again \u2014 another Umrah trip, he says. Nobody is betting against the second half of that sentence: Umrah first, a leisure trip right after. For sure. With Hyder, the pilgrimage is real. The holiday after it is just\u2026 also real.',
    ],
  },
  {
    slug: 'roy-is-back-in-instagram',
    title: 'Roy Is Back in Instagram',
    image: '/images/roy-is-back-in-instagram.jpg',
    paragraphs: [
      'Riyaz Ummer is back on Instagram. After staying away from social media for a long, long time, the man himself has finally returned \u2014 and not quietly, either. Stories, reels, posts\u2026 the full comeback tour is officially on.',
      'For years, whenever anyone mentioned a video on Facebook, Riyaz had one answer ready, delivered with maximum sarcasm: \u201cSorry bro, I am not in FB anymore.\u201d Mehroof, Asif, Marzook, Nias \u2014 everyone who dared to ask the same question again got the same treatment. Riyaz would throw the question right back at them, repeating their own concern with a perfectly straight face, just to watch them squirm.',
      'And now? Now he is the one posting. The man who was \u201cnot in FB anymore\u201d is suddenly all over Instagram \u2014 stories every day, reels, posts, the works. The bullying has officially gone full circle: now the friends get to ask him, \u201cBro, did you see my story?\u201d \u2014 and wait for his answer.',
    ],
  },
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
