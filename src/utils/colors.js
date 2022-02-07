export function hex2rgb(hexString) {
  if (hexString.lastIndexOf('#') > -1) {
    hexString = hexString.replace('#', '0x');
  } else {
    hexString = '0x' + hexString;
  }
  const red = hexString >> 16;
  const green = (hexString & 0x00ff00) >> 8;
  const blue = hexString & 0x0000ff;
  return [red, green, blue];
}

export function rgb2hex(red, green, blue) {
  return (
    '#' +
    ('0' + red.toString(16)).slice(-2) +
    ('0' + green.toString(16)).slice(-2) +
    ('0' + blue.toString(16)).slice(-2)
  );
}
