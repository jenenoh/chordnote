import { getHomePermalink, getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink()
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Meet the Team',
      href: getPermalink('meet-the-team'),
    },
    {
      text: 'Try Out Chordnote',
      href: getPermalink('try-out-chordnote'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Resources',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Meet the Team', href: 'meet-the-team' },
        { text: 'Try Out Chordnote', href: 'try-out-chordnote' },
        { text: 'Download', href: getHomePermalink() + '#download' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="text-default">
      Copyright IN4MATX172 Team 2; 2025; Designed by Jenny
    </span>
  `,
};
