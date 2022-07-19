/**
    * add Definition
    **/
    import {Icon, useTheme} from "native-base";
    import {Path, G, Rect, Polygon} from "react-native-svg";
    //@ts-expect-error
    import find from "find-value";
    //@ts-expect-error
    import validator from "validator";

    export default function AddIcon(props: any) {
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
          <G id="add" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><Path d="M64,8 C65.9645558,8 67.5615711,9.57362773 67.5993168,11.5291541 L67.6,11.6 L67.6,40.4 L96.4,40.4 C98.3882251,40.4 100,42.0117749 100,44 C100,45.9645558 98.4263723,47.5615711 96.4708459,47.5993168 L96.4,47.6 L67.6,47.6 L67.6,76.4 C67.6,78.3882251 65.9882251,80 64,80 C62.0354442,80 60.4384289,78.4263723 60.4006832,76.4708459 L60.4,76.4 L60.4,47.6 L31.6,47.6 C29.6117749,47.6 28,45.9882251 28,44 C28,42.0354442 29.5736277,40.4384289 31.5291541,40.4006832 L31.6,40.4 L60.4,40.4 L60.4,11.6 C60.4,9.6117749 62.0117749,8 64,8 Z" id="Shape" fill={fillColor} fillRule="nonzero"/></G>
      </Icon>
  }