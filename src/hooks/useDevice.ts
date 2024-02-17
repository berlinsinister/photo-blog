import theme from '../themes/theme';

export const useDevice = (device: string): number =>
  parseInt((theme.devices[device].match(/\d+/) as [string])[0], 10);
