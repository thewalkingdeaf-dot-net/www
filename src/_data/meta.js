module.exports = {
  url: process.env.URL || 'https://www.manchesterdeafcentre.org.uk',
  siteName: 'www.manchesterdeafcentre.org.uk',
  siteDescription:
    'Rumblings and fevered utterances from the dark recesses of my mind',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: {
    name: 'Steve Simons', // i.e. Lene Saile - page / blog author's name. Must be set.
    avatar: '/favicon.png',
    email: 'steve@thewalkingdeaf.net', // i.e. hola@lenesaile.com - email of the author
    website: 'https://www.manchesterdeafcentre.org.uk' // i.e. https.://www.lenesaile.com - the personal site of the author
  },
  creator: {
    name: 'Steve Simons', // i.e. Lene Saile - creator's (developer) name.
    email: 'steve@thewalkindgdeaf.net',
    website: 'https://www.manchesterdeafcentre.org.uk',
    social: 'https://thewalkingdeaf.social/@steve'
  },
  themeColor: '#114462', //  Manifest: defines the default theme color for the application
  themeBgColor: '#FBFBFB', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  opengraph_default: '/assets/images/template/opengraph-default.jpg', // fallback/default meta image
  opengraph_default_alt:
    'Visible content: Eleventy starter built around the CSS workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es', // alt text for default meta image
  blog: {
    // RSS feed
    name: 'manchesterdeafcentre.org.uk blog',
    description:
      'Tell the word what you are writing about in your blog. It will show up on feed readers.',
    // feed links are looped over in the head. You may add more to the array.
    feedLinks: [
      {
        title: 'Atom Feed',
        url: '/feed.xml',
        type: 'application/atom+xml'
      }
    ],
    // Tags
    tagSingle: 'Tag',
    tagPlural: 'Tags',
    tagMore: 'More tags:',
    // pagination
    paginationLabel: 'Blog',
    paginationPage: 'Page',
    paginationPrevious: 'Previous',
    paginationNext: 'Next',
    paginationNumbers: true
  },
  details: {
    aria: 'section controls',
    expand: 'expand all',
    collapse: 'collapse all'
  },
  navigation: {
    ariaTop: 'Main',
    ariaBottom: 'Complementary',
    ariaPlatforms: 'Platforms',
    // activate alternative mobile menu with drawer
    drawerNav: false,
    navLabel: '☰'
  },
  themeSwitch: {
    title: 'Theme',
    dark: 'dark',
    light: 'light',
    initial: 'dark'
  },
  greenweb: {
    // this goues into src/common/greenweb.njk
    providers: {
      // if you want to add more than one, edit the array directly.
      domain: 'netlify.com',
      service: 'cdn'
    },
    credentials: {
      // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
      domain: '',
      doctype: '',
      url: ''
    }
  },
  viewRepo: {
    // this is for the view/edit on github link. The value in the package.json will be pulled in.
    allow: false,
    infoText: 'View this page on GitHub'
  },
  easteregg: true
};
