/**
    * unknown Definition
    **/
   import React from "react";
    import {Icon, useTheme} from "native-base";
    import {G,Rect,Path,Polygon} from "react-native-svg";
    import find from "@pabloadoue/find-value";
    import validator from "validator";

    export default function UnknownIcon(props: any) {
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
          <G id="unknown" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><Path d="M87,8 C94.1797017,8 100,13.8202983 100,21 L100,67 C100,74.1797017 94.1797017,80 87,80 L41,80 C33.8202983,80 28,74.1797017 28,67 L28,21 C28,13.8202983 33.8202983,8 41,8 L87,8 Z M87,15 L41,15 C37.7616031,15 35.1224282,17.5655749 35.0041385,20.7750617 L35,21 L35,67 C35,70.2383969 37.5655749,72.8775718 40.7750617,72.9958615 L41,73 L87,73 C90.2383969,73 92.8775718,70.4344251 92.9958615,67.2249383 L93,67 L93,21 C93,17.7616031 90.4344251,15.1224282 87.2249383,15.0041385 L87,15 Z" id="Rectangle" fill={fillColor} fillRule="nonzero"/><Polygon id="Line" fill={fillColor} points="30.5502525 16.5 35.5 11.5502525 95.4497475 71.5 90.5 76.4497475" fillRule="nonzero"/><Polygon id="Line" fill={fillColor} points="92.5 11.5502525 97.4497475 16.5 37.5 76.4497475 32.5502525 71.5" fillRule="nonzero"/></G>
      </Icon>
  }