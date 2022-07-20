/**
    * branches Definition
    **/
    import {Icon, useTheme} from "native-base";
    import {Path, G, Rect, Polygon} from "react-native-svg";
    //@ts-expect-error
    import find from "find-value";
    import validator from "validator";

    export default function BranchesIcon(props: any) {
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
          <G id="branches" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><Rect id="Rectangle" fill={fillColor} x="18" y="8" width="31" height="31" rx="7"/><Rect id="Rectangle" fill={fillColor} x="49" y="49" width="31" height="31" rx="7"/><Rect id="Rectangle" fill={fillColor} x="79" y="8" width="31" height="31" rx="7"/><Polygon id="Line-2" fill={fillColor} points="28.5895465 23.8775481 34.1224519 19.5895465 69.4104535 65.1224519 63.8775481 69.4104535" fillRule="nonzero"/><Polygon id="Line-2" fill={fillColor} points="98 21 98 28 30 28 30 21" fillRule="nonzero"/></G>
      </Icon>
  }