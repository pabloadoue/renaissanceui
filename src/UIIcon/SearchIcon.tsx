/**
    * search Definition
    **/
    import {Icon, useTheme} from "native-base";
    import {Path, G, Rect, Polygon} from "react-native-svg";
    //@ts-expect-error
    import find from "find-value";
    import validator from "validator";

    export default function SearchIcon(props: any) {
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
          <G id="search" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><G id="search-outline" transform="translate(28.000000, 8.000000)" fill={fillColor} fillRule="nonzero"><Path d="M30,0 C13.4314575,0 0,13.4314575 0,30 C0,46.5685425 13.4314575,60 30,60 C46.5685425,60 60,46.5685425 60,30 C59.9989454,13.4318153 46.5681847,0.00105458747 30,0 Z M29.5956125,5.54952372 L29.9998267,5.5460743 C43.5049994,5.54710724 54.4528928,16.4950006 54.4537524,30.0001765 C54.4537524,43.5054345 43.5054345,54.4537524 30,54.4537524 C16.4945655,54.4537524 5.54624762,43.5054345 5.54624762,30 C5.54624762,16.6296198 16.276694,5.76546969 29.5956125,5.54952372 Z" id="Path"/><Path d="M48.7936701,48.7936701 C49.8371994,47.7501409 51.5200895,47.7356474 52.5813788,48.7501898 L52.6258486,48.7936701 L71.2063299,67.3741514 C72.2645567,68.4323783 72.2645567,70.148103 71.2063299,71.2063299 C70.1628006,72.2498591 68.4799105,72.2643526 67.4186212,71.2498102 L67.3741514,71.2063299 L48.7936701,52.6258486 C47.7354433,51.5676217 47.7354433,49.851897 48.7936701,48.7936701 Z" id="Path"/></G></G>
      </Icon>
  }