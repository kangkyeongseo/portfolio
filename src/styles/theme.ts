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
  blue: "#3f72af",
  green: "#2b9348",
  darkGreen: "#007f5f",
  lightGreen: "#55a630",
  orange: "#fb5607",
};

const theme = {
  media,
  color,
  shadow: "0 2px 4px 0 rgba(0, 0, 0, .13), 0 1px 1px 0 rgba(0, 0, 0, .11)",
};

export default theme;
