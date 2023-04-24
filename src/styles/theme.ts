const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 360,
};

const media = {
  desktop: `screen and (min-width:${sizes.desktop}px)`,
  tablet: `screen and (min-width:${sizes.tablet}px) and (max-width:${sizes.desktop}px)`,
  mobile: `screen and (min-width:${sizes.mobile}px) and (max-width:${sizes.tablet}px)`,
};

const theme = {
  media,
};

export default theme;
