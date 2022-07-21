/**
    * sidebar Definition
    **/
   import React from "react";
    import {Icon, useTheme} from "native-base";
    import {G,Rect,Path} from "react-native-svg";
    import find from "@pabloadoue/find-value";
    import validator from "validator";

    export default function SidebarIcon(props: any) {
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
          <G id="sidebar" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><Path d="M30.3842239,80 L98.6157761,80 C102.770144,80 105.872774,78.9896795 107.923664,76.9690386 C109.974555,74.9483976 111,71.9174362 111,67.8761543 L111,20.1238457 C111,16.0825638 109.974555,13.0516024 107.923664,11.0309614 C105.872774,9.01032048 102.770144,8 98.6157761,8 L30.3842239,8 C26.2561493,8 23.1600933,9.01032048 21.096056,11.0309614 C19.0320187,13.0516024 18,16.0825638 18,20.1238457 L18,67.8761543 C18,71.9174362 19.0320187,74.9483976 21.096056,76.9690386 C23.1600933,78.9896795 26.2561493,80 30.3842239,80 Z M30.4631043,73.7034221 C28.4910941,73.7034221 26.9792197,73.1884845 25.9274809,72.1586095 C24.8757422,71.1287344 24.3498728,69.5969582 24.3498728,67.5632808 L24.3498728,20.4367192 C24.3498728,18.4030418 24.8757422,16.8712656 25.9274809,15.8413905 C26.9792197,14.8115155 28.4910941,14.2965779 30.4631043,14.2965779 L98.5368957,14.2965779 C100.482612,14.2965779 101.987913,14.8115155 103.052799,15.8413905 C104.117684,16.8712656 104.650127,18.4030418 104.650127,20.4367192 L104.650127,67.5632808 C104.650127,69.5969582 104.117684,71.1287344 103.052799,72.1586095 C101.987913,73.1884845 100.482612,73.7034221 98.5368957,73.7034221 L30.4631043,73.7034221 Z M48.0534351,74.9158066 L54.2455471,74.9158066 L54.2455471,13.1233026 L48.0534351,13.1233026 L48.0534351,74.9158066 Z M40.480916,28.8060837 C41.0593723,28.8060837 41.5786684,28.5779468 42.0388041,28.121673 C42.4989398,27.6653992 42.7290076,27.1634981 42.7290076,26.6159696 C42.7290076,26.0162955 42.4989398,25.501358 42.0388041,25.071157 C41.5786684,24.640956 41.0593723,24.4258555 40.480916,24.4258555 L32.0012723,24.4258555 C31.4228159,24.4258555 30.9100933,24.640956 30.4631043,25.071157 C30.0161154,25.501358 29.7926209,26.0162955 29.7926209,26.6159696 C29.7926209,27.1634981 30.0161154,27.6653992 30.4631043,28.121673 C30.9100933,28.5779468 31.4228159,28.8060837 32.0012723,28.8060837 L40.480916,28.8060837 Z M40.480916,38.9353612 C41.0593723,38.9353612 41.5786684,38.7137425 42.0388041,38.2705052 C42.4989398,37.8272678 42.7290076,37.3058121 42.7290076,36.706138 C42.7290076,36.1325367 42.4989398,35.6306355 42.0388041,35.2004345 C41.5786684,34.7702336 41.0593723,34.5551331 40.480916,34.5551331 L32.0012723,34.5551331 C31.4228159,34.5551331 30.9100933,34.7702336 30.4631043,35.2004345 C30.0161154,35.6306355 29.7926209,36.1325367 29.7926209,36.706138 C29.7926209,37.3058121 30.0161154,37.8272678 30.4631043,38.2705052 C30.9100933,38.7137425 31.4228159,38.9353612 32.0012723,38.9353612 L40.480916,38.9353612 Z M40.480916,49.0255296 C41.0593723,49.0255296 41.5786684,48.8104291 42.0388041,48.3802281 C42.4989398,47.9500272 42.7290076,47.448126 42.7290076,46.8745247 C42.7290076,46.2748506 42.4989398,45.7599131 42.0388041,45.3297121 C41.5786684,44.8995111 41.0593723,44.6844106 40.480916,44.6844106 L32.0012723,44.6844106 C31.4228159,44.6844106 30.9100933,44.8995111 30.4631043,45.3297121 C30.0161154,45.7599131 29.7926209,46.2748506 29.7926209,46.8745247 C29.7926209,47.448126 30.0161154,47.9500272 30.4631043,48.3802281 C30.9100933,48.8104291 31.4228159,49.0255296 32.0012723,49.0255296 L40.480916,49.0255296 Z" id="Shape" fill={fillColor} fillRule="nonzero"/></G>
      </Icon>
  }