import { horizonTheme } from '..';
import { deepmerge } from '@mui/utils';
import { ThemeOptions, createTheme } from '@mui/material/styles';
import { Theme } from '@emotion/react';

export const overrideTheme = (theme?: ThemeOptions): Theme =>
  createTheme(deepmerge(horizonTheme, createTheme(theme)));
