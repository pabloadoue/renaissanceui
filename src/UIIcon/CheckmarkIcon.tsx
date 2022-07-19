/**
    * checkmark Definition
    **/
    import {Icon, useTheme} from "native-base";
    import {Path, G, Rect, Polygon} from "react-native-svg";
    //@ts-expect-error
    import find from "find-value";
    //@ts-expect-error
    import validator from "validator";

    export default function CheckmarkIcon(props: any) {
      const {colors} = useTheme();
      let fillColor = colors.primary["500"];
  
      if (typeof props.color === "string") {
          const value = find(colors, props.color);
          if (value) {
              fillColor = value;
          } else if (validator.isHexColor(props.color)) {
              fillColor = props.color;
          }
      }
  
      return <Icon viewBox="0 0 128 88" {...props}>
          <G id="checkmark" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><Path d="M55.245502,80 C57.0284388,80 58.4352873,79.2135752 59.4660476,77.6407256 L98.9553105,14.9514336 C99.3174695,14.361615 99.5821242,13.8209479 99.7492745,13.3294324 C99.9164248,12.8379169 100,12.3393798 100,11.8338209 C100,10.6822703 99.6517702,9.75541252 98.9553105,9.05324751 C98.2588508,8.3510825 97.3395241,8 96.1973302,8 C95.3615786,8 94.6790482,8.16149795 94.1497388,8.48449386 C93.6204295,8.80748976 93.1050493,9.36220012 92.6035984,10.1486249 L55.0783517,70.4365126 L35.6053395,44.7372733 C34.6024376,43.3610298 33.404527,42.6729081 32.0116077,42.6729081 C30.8415554,42.6729081 29.8804411,43.0450556 29.1282647,43.7893505 C28.3760882,44.5336454 28,45.4815682 28,46.6331188 C28,47.1386776 28.0975044,47.651258 28.2925131,48.1708602 C28.4875218,48.6904623 28.793964,49.2030427 29.2118398,49.7086015 L50.8995937,77.5564658 C52.1532211,79.1854886 53.6018572,80 55.245502,80 Z" id="Path" fill={fillColor} fillRule="nonzero"/></G>
      </Icon>
  }