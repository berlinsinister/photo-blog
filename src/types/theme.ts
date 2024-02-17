type TBreakpointsKeys = 'mobile' | 'tablet' | 'laptop' | 'desktop';
type TBreakpointsValues = '375px' | '768px' | '1024px' | '1170px';

type BreakpointsMap = {
  [key in TBreakpointsKeys]: TBreakpointsValues;
};

export interface IBreakpoints extends BreakpointsMap {}

export interface ITheme {
  colors: {
    primary: { [key: string]: string };
    secondary: { [key: string]: string };
    neutral: { [key: string]: string };
    action: { [key: string]: string };
  };

  devices: { [key: string]: string };

  layout: {
    sizes: {
      width: { [key: string]: string };
      height: { [key: string]: string };
    };
    offsets: {
      margin: { [key: string]: string };
      padding: { [key: string]: string };
    };
  };
}
