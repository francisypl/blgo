import React from 'react';
import keyMirror from 'keymirror';

import BookmarkSvg from '../../content/assets/bookmark.svg';
import HamburgerSvg from '../../content/assets/hamburger.svg';
import CoupleSvg from '../../content/assets/tag_couple.svg';
import GroupSvg from '../../content/assets/tag_group.svg';
import ClockSvg from '../../content/assets/tag_time.svg';

export const ICONS = keyMirror({
  bookMark: null,
  hamburger: null,
  couple: null,
  group: null,
  time: null
});

const ICON_MAP = {
  [ICONS.bookMark]: BookmarkSvg,
  [ICONS.hamburger]: HamburgerSvg,
  [ICONS.couple]: CoupleSvg,
  [ICONS.group]: GroupSvg,
  [ICONS.time]: ClockSvg
};

export default ({ name, ...props }) => {
  const SvgComp = ICON_MAP[name];
  return <SvgComp { ...props } />;
};
