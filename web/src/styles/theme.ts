import { darken, lighten } from 'polished';

const black = '#000';
const white = '#fff';
const grey = '#4d4d4d';

const colors = {
    black,
    white,
    grey,
    lightGrey: lighten(0.6, grey),
    mediumGrey: lighten(0.64, grey),
    superLightGrey: lighten(0.68, grey),
};

export const theme = {
    colors,
};
