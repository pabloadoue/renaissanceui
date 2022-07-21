/**
    * exclamation-circle Definition
    **/
   import React from "react";
    import {Icon, useTheme} from "native-base";
    import {G,Rect,Path} from "react-native-svg";
    import find from "@pabloadoue/find-value";
    import validator from "validator";

    export default function ExclamationCircleIcon(props: any) {
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
          <G id="exclamation-circle" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><G id="􀁞" transform="translate(28.000000, 8.000000)" fill={fillColor} fillRule="nonzero"><Path d="M36,72 C40.9509713,72 45.5966698,71.0670986 49.9370953,69.2012957 C54.2775208,67.3354928 58.1017576,64.7533549 61.4098057,61.454882 C64.7178538,58.1564091 67.3098982,54.3304026 69.1859389,49.9768626 C71.0619796,45.6233225 72,40.9699213 72,36.016659 C72,31.0633966 71.0619796,26.4155484 69.1859389,22.0731143 C67.3098982,17.7306802 64.7178538,13.9046738 61.4098057,10.5950949 C58.1017576,7.28551596 54.2775208,4.6922721 49.9370953,2.81536326 C45.5966698,0.938454419 40.9398705,0 35.9666975,0 C31.0379278,0 26.3977798,0.938454419 22.0462535,2.81536326 C17.6947271,4.6922721 13.8649399,7.28551596 10.5568918,10.5950949 C7.24884366,13.9046738 4.66234968,17.7306802 2.79740981,22.0731143 C0.932469935,26.4155484 0,31.0633966 0,36.016659 C0,40.9699213 0.932469935,45.6233225 2.79740981,49.9768626 C4.66234968,54.3304026 7.25439408,58.1564091 10.573543,61.454882 C13.892692,64.7533549 17.7224792,67.3354928 22.0629047,69.2012957 C26.4033302,71.0670986 31.0490287,72 36,72 Z M36,61.1383619 C32.5143386,61.1383619 29.2562442,60.4886627 26.2257169,59.1892642 C23.1951896,57.8898658 20.5309898,56.0906988 18.2331175,53.7917631 C15.9352451,51.4928274 14.1369103,48.8218417 12.8381129,45.7788061 C11.5393154,42.7357705 10.8899167,39.4817214 10.8899167,36.016659 C10.8899167,32.5293845 11.5393154,29.2697825 12.8381129,26.2378528 C14.1369103,23.2059232 15.9352451,20.5404905 18.2331175,18.2415548 C20.5309898,15.9426192 23.1951896,14.1434521 26.2257169,12.8440537 C29.2562442,11.5446553 32.5032377,10.894956 35.9666975,10.894956 C39.4523589,10.894956 42.7104533,11.5446553 45.7409806,12.8440537 C48.7715079,14.1434521 51.4412581,15.9426192 53.7502313,18.2415548 C56.0592044,20.5404905 57.8630897,23.2059232 59.1618871,26.2378528 C60.4606846,29.2697825 61.1100833,32.5293845 61.1100833,36.016659 C61.1100833,39.4817214 60.4606846,42.7357705 59.1618871,45.7788061 C57.8630897,48.8218417 56.0647549,51.4928274 53.7668825,53.7917631 C51.4690102,56.0906988 48.7992599,57.8898658 45.7576318,59.1892642 C42.7160037,60.4886627 39.4634598,61.1383619 36,61.1383619 Z M36,39.8815363 C38.6641998,39.8815363 40.0629047,38.5266081 40.1961147,35.8167515 L40.7622572,24.8551596 C40.8510638,23.4558075 40.4514339,22.3285516 39.5633673,21.4733919 C38.6753006,20.6182323 37.4764107,20.1906525 35.9666975,20.1906525 C34.4791859,20.1906525 33.2913969,20.6126793 32.4033302,21.456733 C31.5152636,22.3007867 31.1156337,23.4335956 31.2044403,24.8551596 L31.7705828,35.9167052 C31.9037928,38.559926 33.3135985,39.8815363 36,39.8815363 Z M36,51.6760759 C37.4431082,51.6760759 38.6308973,51.2929199 39.5633673,50.5266081 C40.4958372,49.7602962 40.9620722,48.6996761 40.9620722,47.3447478 C40.9620722,45.9898195 40.5013876,44.9236465 39.5800185,44.1462286 C38.6586494,43.3688107 37.4653099,42.9801018 36,42.9801018 C34.5568918,42.9801018 33.3580019,43.3632578 32.4033302,44.1295696 C31.4486586,44.8958815 30.9713228,45.9676076 30.9713228,47.3447478 C30.9713228,48.6774641 31.4486586,49.7325312 32.4033302,50.5099491 C33.3580019,51.287367 34.5568918,51.6760759 36,51.6760759 Z" id="Shape"/></G></G>
      </Icon>
  }