const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 360,
};

const media = {
  desktop: `screen and (min-width:${sizes.desktop}px)`,
  tablet: `screen and (min-width:${sizes.tablet}px) and (max-width:${
    sizes.desktop - 1
  }px)`,
  mobile: `screen and (min-width:${sizes.mobile}px) and (max-width:${
    sizes.tablet - 1
  }px)`,
};

const color = {
  green: "#2b9348",
  darkGreen: "#007f5f",
  lightGreen: "#55a630",
  orange: "#fb5607",
};

const theme = {
  media,
  color,
};

export default theme;
