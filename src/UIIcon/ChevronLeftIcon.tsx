/**
    * chevron-left Definition
    **/
   import React from "react";
    import {Icon, useTheme} from "native-base";
    import {G,Rect,Path} from "react-native-svg";
    import find from "@pabloadoue/find-value";
    import validator from "validator";

    export default function ChevronLeftIcon(props: any) {
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
  
      return <Icon viewBox="0 0 57 88" {...props}>
          <G id="chevron-left" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="-8" width="57" height="88"/><G id="􀆉" transform="translate(8.000000, 8.000000)" fill={fillColor} fillRule="nonzero"><Path d="M0,36 C0,36.5253456 0.0978186776,37.016129 0.293456033,37.4723502 C0.489093388,37.9285714 0.782549421,38.3502304 1.17382413,38.7373272 L34.4182004,70.8801843 C35.1728016,71.6267281 36.0811179,72 37.1431493,72 C37.8698023,72 38.5195978,71.8341014 39.0925358,71.5023041 C39.6654738,71.1705069 40.126619,70.7211982 40.4759714,70.1543779 C40.8253238,69.5875576 41,68.9447005 41,68.2258065 C41,67.202765 40.6226994,66.3041475 39.8680982,65.5299539 L9.34867076,36 L39.8680982,6.47004608 C40.6226994,5.69585253 41,4.79723502 41,3.77419355 C41,3.05529954 40.8253238,2.4124424 40.4759714,1.84562212 C40.126619,1.27880184 39.6654738,0.829493088 39.0925358,0.497695853 C38.5195978,0.165898618 37.8698023,0 37.1431493,0 C36.0811179,0 35.1728016,0.359447005 34.4182004,1.07834101 L1.17382413,33.2626728 C0.782549421,33.6497696 0.489093388,34.0714286 0.293456033,34.5276498 C0.0978186776,34.983871 0,35.4746544 0,36 Z" id="Path"/></G></G>
      </Icon>
  }