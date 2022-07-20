/**
    * lightbulb Definition
    **/
    import {Icon, useTheme} from "native-base";
    import {Path, G, Rect, Polygon} from "react-native-svg";
    //@ts-expect-error
    import find from "find-value";
    import validator from "validator";

    export default function LightbulbIcon(props: any) {
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
  
      return <Icon viewBox="0 0 64 88" {...props}>
          <G id="lightbulb" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><G id="􀛭" transform="translate(8.000000, 8.000000)" fill={fillColor} fillRule="nonzero"><Path d="M24.0071334,72 C26.4347951,72 28.4468463,71.4685982 30.0432868,70.4057946 C31.6397273,69.342991 32.5258541,67.9434313 32.7016672,66.2071154 L15.2979005,66.2071154 C15.4693903,67.9434313 16.3463662,69.342991 17.9288281,70.4057946 C19.51129,71.4685982 21.5373918,72 24.0071334,72 Z M13.1120538,64.0205615 L34.8875138,64.0205615 C35.7864664,64.0205615 36.5496681,63.6884538 37.1771191,63.0242385 C37.8045701,62.3600231 38.1182955,61.594353 38.1182955,60.727228 C38.1182955,59.8601031 37.8045701,59.0944329 37.1771191,58.4302175 C36.5496681,57.7660022 35.7864664,57.4338945 34.8875138,57.4338945 L13.1120538,57.4338945 C12.208778,57.4338945 11.4444955,57.7660022 10.8192061,58.4302175 C10.1939168,59.0944329 9.88127212,59.8601031 9.88127212,60.727228 C9.88127212,61.594353 10.1939168,62.3600231 10.8192061,63.0242385 C11.4444955,63.6884538 12.208778,64.0205615 13.1120538,64.0205615 Z M13.0787646,55.2190071 L34.9143181,55.2190071 C35.789925,55.2190071 36.5075162,54.9398035 37.0670918,54.3813963 C37.6266674,53.822989 37.9064552,53.1049104 37.9064552,52.2271604 L37.9064552,48.5628343 C37.9064552,47.1883616 38.2444631,45.8922489 38.9204788,44.6744961 C39.5964945,43.4567434 40.4352815,42.2081484 41.4368397,40.9287111 C42.4383979,39.6492738 43.4410369,38.2334075 44.4447567,36.6811122 C45.4484765,35.1288169 46.291947,33.3466065 46.9751682,31.3344811 C47.6583894,29.3223557 48,26.9654316 48,24.2637087 C48,20.676267 47.4219784,17.3973954 46.2659353,14.427094 C45.1098922,11.4567926 43.4684896,8.89681124 41.3417277,6.74715004 C39.2149657,4.59748884 36.6839057,2.93554853 33.7485477,1.76132912 C30.8131896,0.587109706 27.5660515,0 24.0071334,0 C20.4384159,0 17.1863781,0.587109706 14.25102,1.76132912 C11.315662,2.93554853 8.78460194,4.59748884 6.65783998,6.74715004 C4.53107803,8.89681124 2.88974754,11.4567926 1.73384852,14.427094 C0.577949508,17.3973954 0,20.676267 0,24.2637087 C0,26.9654316 0.341538545,29.3223557 1.02461563,31.3344811 C1.70769272,33.3466065 2.55109118,35.1288169 3.55481099,36.6811122 C4.55853081,38.2334075 5.56124186,39.6492738 6.56294415,40.9287111 C7.56464644,42.2081484 8.40703613,43.4567434 9.09011322,44.6744961 C9.77319031,45.8922489 10.1147288,47.1883616 10.1147288,48.5628343 L10.1147288,52.2271604 C10.1147288,53.1049104 10.3909139,53.822989 10.9432841,54.3813963 C11.4956542,54.9398035 12.2074811,55.2190071 13.0787646,55.2190071 Z M17.2494258,53.8722776 C17.2494258,53.0426356 17.2494258,52.3395354 17.2494258,51.762977 C17.2494258,51.1864186 17.2494258,50.6135494 17.2494258,50.0443696 C17.2494258,49.4751897 17.2494258,48.7974716 17.2494258,48.0112154 C17.2494258,46.0883702 16.9124988,44.3643027 16.2386447,42.8390128 C15.5647905,41.3137228 14.7270844,39.8710725 13.7255262,38.5110616 C12.723968,37.1510508 11.7258685,35.7763567 10.7312275,34.3869794 C9.7365866,32.997602 8.90125825,31.4880283 8.22524251,29.8582584 C7.54922676,28.2284885 7.21121889,26.3658522 7.21121889,24.2703494 C7.21121889,20.8862599 7.9072658,17.9328554 9.29935962,15.4101356 C10.6914534,12.8874159 12.6482387,10.9227345 15.1697155,9.51609135 C17.6911922,8.10944821 20.6369982,7.40612664 24.0071334,7.40612664 C27.3674692,7.40612664 30.3073667,8.10944821 32.8268259,9.51609135 C35.3462851,10.9227345 37.3030704,12.8874159 38.6971818,15.4101356 C40.0912931,17.9328554 40.7883488,20.8862599 40.7883488,24.2703494 C40.7883488,26.3658522 40.4503409,28.2284885 39.7743252,29.8582584 C39.0983094,31.4880283 38.2630531,32.997602 37.2685563,34.3869794 C36.2740595,35.7763567 35.2759599,37.1510508 34.2742576,38.5110616 C33.2725553,39.8710725 32.4347771,41.3137228 31.760923,42.8390128 C31.0870689,44.3643027 30.7501419,46.0883702 30.7501419,48.0112154 C30.7501419,49.255826 30.7501419,50.2942066 30.7501419,51.1263573 C30.7501419,51.9585081 30.7501419,52.8738148 30.7501419,53.8722776 L35.6363047,48.2471808 L12.363263,48.2471808 L17.2494258,53.8722776 Z" id="Shape"/></G></G>
      </Icon>
  }