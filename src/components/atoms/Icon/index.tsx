import React, { memo } from 'react';

import CalendarIcon from './svgs/takeda-calendar';
import ClockIcon from './svgs/takeda-clock';
import GlobeIcon from './svgs/takeda-globe';
import LeafIcon from './svgs/takeda-leaf';
import MailLetterIcon from './svgs/mail-letter';
import RightArrowIcon from './svgs/takeda-right-arrow';
import SearchIcon from './svgs/takeda-search';
import ShareIcon from './svgs/takeda-share';
import GlobeOutlineIcon from './svgs/globe_outline';
import ChevronLeftIcon from './svgs/chevron_left';
import ChevronRightIcon from './svgs/chevron_right';
import PdfIcon from './svgs/takeda-file-icon';
import TakedaMicrophone from './svgs/takeda-microphone';
import TakedaMegaphone from './svgs/takeda-megaphone';
import TakedaPhone from './svgs/takeda-phone';
import HeartOutline from './svgs/heart-outline';
import Instagram from './svgs/instagram';
import LinkedIn from './svgs/linkedin';
import Twitter from './svgs/twitter';
import Close from './svgs/close';
import Hamburger from './svgs/hamburger';
import { ChevronRed } from './svgs/chevron-red';
import DoubleArrowDown from './svgs/takeda-double-arrow-down';
import DoubleArrowUp from './svgs/takeda-double-arrow-up';
import Apple from './svgs/apple';

export const IconMap = {
  apple: Apple,
  calendar: CalendarIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  leaf: LeafIcon,
  right_arrow: RightArrowIcon,
  search: SearchIcon,
  share: ShareIcon,
  pdf: PdfIcon,
  microphone: TakedaMicrophone,
  megaphone: TakedaMegaphone,
  mail_letter: MailLetterIcon,
  globe_outline: GlobeOutlineIcon,
  chevron_left: ChevronLeftIcon,
  chevron_right: ChevronRightIcon,
  phone: TakedaPhone,
  heart_outline: HeartOutline,
  instagram: Instagram,
  linkedin: LinkedIn,
  twitter: Twitter,
  close: Close,
  hamburger: Hamburger,
  chevron_red: ChevronRed,
  double_arrow_down: DoubleArrowDown,
  double_arrow_up: DoubleArrowUp,
};

export type IconVariant = keyof typeof IconMap;

export interface SvgProps {
  className?: string;
}

export interface IconProps extends SvgProps {
  variant: IconVariant;
}

export const Icon = memo<IconProps>(({ variant, className }) => {
  const IconComponent = IconMap[variant];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
});

Icon.displayName = 'Icon';
