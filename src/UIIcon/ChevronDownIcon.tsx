/**
    * chevron-down Definition
    **/
    import {Icon, useTheme} from "native-base";
    import {Path, G, Rect, Polygon} from "react-native-svg";
    //@ts-expect-error
    import find from "find-value";
    //@ts-expect-error
    import validator from "validator";

    export default function ChevronDownIcon(props: any) {
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
          <G id="chevron-down" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><G id="􀆉" transform="translate(64.000000, 44.000000) rotate(90.000000) translate(-64.000000, -44.000000) translate(32.000000, -12.000000)" fill={fillColor} fillRule="nonzero"><Path d="M0,56 C0,56.8172043 0.15269257,57.5806452 0.45807771,58.2903226 C0.763462849,59 1.22154056,59.655914 1.83231084,60.2580645 L53.7259714,110.258065 C54.9038855,111.419355 56.3217451,112 57.9795501,112 C59.1138378,112 60.1281527,111.741935 61.0224949,111.225806 C61.9168371,110.709677 62.6366735,110.010753 63.1820041,109.129032 C63.7273347,108.247312 64,107.247312 64,106.129032 C64,104.537634 63.4110429,103.139785 62.2331288,101.935484 L14.593047,56 L62.2331288,10.0645161 C63.4110429,8.86021505 64,7.46236559 64,5.87096774 C64,4.75268817 63.7273347,3.75268817 63.1820041,2.87096774 C62.6366735,1.98924731 61.9168371,1.29032258 61.0224949,0.774193548 C60.1281527,0.258064516 59.1138378,2.72483913e-14 57.9795501,2.72483913e-14 C56.3217451,2.72483913e-14 54.9038855,0.559139785 53.7259714,1.67741935 L1.83231084,51.7419355 C1.22154056,52.344086 0.763462849,53 0.45807771,53.7096774 C0.15269257,54.4193548 0,55.1827957 0,56 Z" id="Path"/></G></G>
      </Icon>
  }