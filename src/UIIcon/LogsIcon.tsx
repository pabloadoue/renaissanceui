/**
    * logs Definition
    **/
   import React from "react";
    import {Icon, useTheme} from "native-base";
    import {G,Rect,Path} from "react-native-svg";
    import find from "@pabloadoue/find-value";
    import validator from "validator";

    export default function LogsIcon(props: any) {
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
          <G id="logs" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><G id="􀣔" transform="translate(24.000000, 8.000000)" fill={fillColor} fillRule="nonzero"><Path d="M41.5872735,15.3176471 C40.8093151,15.3176471 40.1433356,15.5882353 39.5893349,16.1294118 C39.0353343,16.6705882 38.7583339,17.3294118 38.7583339,18.1058824 L38.7583339,37.8 C38.7583339,38.2235294 38.8290574,38.6176471 38.9705044,38.9823529 C39.1119514,39.3470588 39.3241218,39.7176471 39.6070158,40.0941176 L48.3413669,51.6 C48.9307293,52.3529412 49.6084961,52.7941176 50.3746672,52.9235294 C51.1408384,53.0529412 51.8775414,52.8705882 52.5847763,52.3764706 C53.2448622,51.9294118 53.6043733,51.3235294 53.6633095,50.5588235 C53.7222458,49.7941176 53.4806072,49.0588235 52.9383938,48.3529412 L41.1629326,32.5058824 L44.3808514,42.3882353 L44.3808514,18.1058824 C44.3808514,17.3294118 44.1097447,16.6705882 43.5675313,16.1294118 C43.0253178,15.5882353 42.3652319,15.3176471 41.5872735,15.3176471 Z M42.9310199,72 C47.8580897,72 52.4963719,71.0588235 56.8458666,69.1764706 C61.1953613,67.2941176 65.0321106,64.6941176 68.3561147,61.3764706 C71.6801187,58.0588235 74.2851006,54.2294118 76.1710604,49.8882353 C78.0570201,45.5470588 79,40.9176471 79,36 C79,31.0823529 78.0570201,26.4529412 76.1710604,22.1117647 C74.2851006,17.7705882 71.6801187,13.9411765 68.3561147,10.6235294 C65.0321106,7.30588235 61.1953613,4.70588235 56.8458666,2.82352941 C52.4963719,0.941176471 47.8580897,0 42.9310199,0 C38.00395,0 33.3656678,0.941176471 29.0161731,2.82352941 C24.6666784,4.70588235 20.8299291,7.3 17.505925,10.6058824 C14.181921,13.9117647 11.5769391,17.7352941 9.69097934,22.0764706 C7.80501959,26.4176471 6.86203972,31.0470588 6.86203972,35.9647059 L12.8735364,35.9647059 C12.8735364,31.8 13.6456012,27.9058824 15.1897307,24.2823529 C16.7338603,20.6588235 18.8850331,17.4823529 21.6432492,14.7529412 C24.4014654,12.0235294 27.5958097,9.88823529 31.2262822,8.34705882 C34.8567547,6.80588235 38.7583339,6.03529412 42.9310199,6.03529412 C47.1037058,6.03529412 51.005285,6.80588235 54.6357575,8.34705882 C58.26623,9.88823529 61.4546807,12.0294118 64.2011096,14.7705882 C66.9475385,17.5117647 69.0987113,20.6941176 70.6546281,24.3176471 C72.2105449,27.9411765 72.9885033,31.8352941 72.9885033,36 C72.9885033,40.1647059 72.2105449,44.0647059 70.6546281,47.7 C69.0987113,51.3352941 66.9475385,54.5235294 64.2011096,57.2647059 C61.4546807,60.0058824 58.26623,62.1529412 54.6357575,63.7058824 C51.005285,65.2588235 47.1037058,66.0235294 42.9310199,66 C39.5598668,65.9764706 36.3655225,65.4529412 33.3479869,64.4294118 C30.3304513,63.4058824 27.5663416,61.9647059 25.0556576,60.1058824 C22.5449737,58.2470588 20.3938009,56.0705882 18.6021391,53.5764706 C18.0599257,52.8470588 17.4057334,52.3823529 16.6395623,52.1823529 C15.8733911,51.9823529 15.1131136,52.1058824 14.3587297,52.5529412 C13.6514948,53 13.2212602,53.6470588 13.068026,54.4941176 C12.9147918,55.3411765 13.1446431,56.1529412 13.75758,56.9294118 C15.9971572,59.9176471 18.6257136,62.5470588 21.6432492,64.8176471 C24.6607848,67.0882353 27.9730016,68.8529412 31.5798996,70.1117647 C35.1867977,71.3705882 38.9705044,72 42.9310199,72 Z M2.51254506,29.1882353 C1.66386317,29.1882353 1.02735176,29.3588235 0.603010813,29.7 C0.178669871,30.0411765 -0.0217133523,30.4941176 0.00186114449,31.0588235 C0.0254356413,31.6235294 0.26118061,32.2352941 0.709096049,32.8941176 L8.63012698,44.1176471 C9.2194894,44.9411765 9.89136256,45.3470588 10.6457465,45.3352941 C11.4001304,45.3235294 12.0602163,44.9176471 12.6260042,44.1176471 L20.5470351,32.8588235 C20.9949506,32.2 21.2248019,31.5941176 21.2365892,31.0411765 C21.2483764,30.4882353 21.0420996,30.0411765 20.6177586,29.7 C20.1934177,29.3588235 19.5686935,29.1882353 18.7435861,29.1882353 L2.51254506,29.1882353 Z" id="Shape"/></G></G>
      </Icon>
  }