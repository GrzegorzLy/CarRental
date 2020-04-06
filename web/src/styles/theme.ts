import { darken } from 'polished';

const black = '#000';
const white = '#fff';

const colors = {
    black,
    white,
    whiteOne: darken(0.2, white),
};

export const theme = {
    colors,
};
