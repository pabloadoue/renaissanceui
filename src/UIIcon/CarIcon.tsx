/**
    * car Definition
    **/
    import {Icon, useTheme} from "native-base";
    import {Path, G, Rect, Polygon} from "react-native-svg";
    //@ts-expect-error
    import find from "find-value";
    import validator from "validator";

    export default function CarIcon(props: any) {
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
          <G id="car" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><Path d="M35.1027738,30.1430447 C35.3873246,28.7869512 35.7753483,27.3429627 36.2668449,25.8110792 C36.7583416,24.2791957 37.2627724,22.8540419 37.7801374,21.5356176 C38.2975023,20.2171933 38.7631308,19.1938449 39.1770227,18.4655724 C39.6943876,17.5866229 40.2764232,16.933689 40.9231294,16.5067706 C41.5698355,16.0798523 42.4105535,15.7910546 43.4452834,15.6403775 C44.9197735,15.4394748 47.3772569,15.2825195 50.8177337,15.1695117 C54.2582105,15.0565039 58.9791656,15 64.9805988,15 C70.9820321,15 75.7094541,15.0502257 79.1628651,15.1506771 C82.616276,15.2511284 85.0672924,15.4143619 86.5159142,15.6403775 C87.5765123,15.7910546 88.4172303,16.0798523 89.0380683,16.5067706 C89.6589062,16.933689 90.2409417,17.5866229 90.7841749,18.4655724 C91.2239351,19.168732 91.6960306,20.179524 92.2004614,21.4979483 C92.7048922,22.8163726 93.1963889,24.2478047 93.6749515,25.7922446 C94.1535141,27.3366844 94.5609389,28.7869512 94.8972262,30.1430447 C95.0783039,30.8462043 95.0201003,31.342183 94.7226155,31.6309807 C94.4251307,31.9197784 93.9012987,32.0390644 93.1511195,31.9888387 C91.004055,31.8632745 88.6435775,31.7377103 86.069687,31.6121461 C83.4957964,31.4865819 80.5080139,31.3861305 77.1063395,31.310792 C73.704665,31.2354534 69.6627515,31.1977842 64.9805988,31.1977842 C60.2984462,31.1977842 56.2565326,31.2354534 52.8548582,31.310792 C49.4531837,31.3861305 46.4718683,31.4865819 43.9109119,31.6121461 C41.3499554,31.7377103 38.995945,31.8632745 36.8488805,31.9888387 C36.0987013,32.0390644 35.5748693,31.9197784 35.2773845,31.6309807 C34.9798997,31.342183 34.9216961,30.8462043 35.1027738,30.1430447 Z M36,58 C34.2857143,58 32.8571429,57.4223602 31.7142857,56.2670807 C30.5714286,55.1118012 30,53.689441 30,52 C30,50.2857143 30.5714286,48.8571429 31.7142857,47.7142857 C32.8571429,46.5714286 34.2857143,46 36,46 C37.7142857,46 39.1428571,46.5714286 40.2857143,47.7142857 C41.4285714,48.8571429 42,50.2857143 42,52 C42,53.689441 41.4285714,55.1118012 40.2857143,56.2670807 C39.1428571,57.4223602 37.7142857,58 36,58 Z M54.4263158,57 C53.1035088,57 52.0350877,56.5844156 51.2210526,55.7532468 C50.4070175,54.9220779 50,53.8311688 50,52.4805195 C50,51.1558442 50.4070175,50.0779221 51.2210526,49.2467532 C52.0350877,48.4155844 53.1035088,48 54.4263158,48 L74.6118421,48 C75.9092105,48 76.9649123,48.4155844 77.7789474,49.2467532 C78.5929825,50.0779221 79,51.1558442 79,52.4805195 C79,53.8311688 78.5929825,54.9220779 77.7789474,55.7532468 C76.9649123,56.5844156 75.9092105,57 74.6118421,57 L54.4263158,57 Z M91.9813084,58 C90.2866044,58 88.8660436,57.4223602 87.7196262,56.2670807 C86.5732087,55.1118012 86,53.689441 86,52 C86,50.2857143 86.5732087,48.8571429 87.7196262,47.7142857 C88.8660436,46.5714286 90.2866044,46 91.9813084,46 C93.7009346,46 95.1339564,46.5714286 96.2803738,47.7142857 C97.4267913,48.8571429 98,50.2857143 98,52 C98,53.689441 97.4267913,55.1118012 96.2803738,56.2670807 C95.1339564,57.4223602 93.7009346,58 91.9813084,58 Z M64,69 C67.2662722,69 70.7140039,68.9613924 74.3431953,68.8841772 C77.9723866,68.806962 81.5367709,68.6975738 85.0363483,68.5560127 C88.5359256,68.4144515 91.7438715,68.2535865 94.660186,68.0734177 C97.5765004,67.8932489 99.9549169,67.700211 101.795435,67.4943038 C104.43956,67.185443 106.468019,66.3232068 107.880811,64.9075949 C109.293604,63.4919831 110,61.5487342 110,59.0778481 L110,52.2829114 C110,50.0951477 109.844463,48.1840717 109.53339,46.5496835 C109.222316,44.9152954 108.70386,43.3838608 107.978022,41.9553797 C107.252184,40.5268987 106.29304,39.0405063 105.100592,37.4962025 L101.795435,33.2879747 C101.328825,30.971519 100.765004,28.6808017 100.103973,26.4158228 C99.4429417,24.1508439 98.7819104,22.1175105 98.1208791,20.3158228 C97.4598478,18.514135 96.9089884,17.1371308 96.4683009,16.1848101 C95.4313891,13.9970464 93.9343477,12.2597046 91.9771767,10.9727848 C90.0200056,9.68586498 87.7582418,8.87510549 85.191885,8.54050633 C84.31051,8.41181435 82.8393914,8.30886076 80.7785292,8.23164557 C78.7176669,8.15443038 76.24204,8.09651899 73.3516484,8.05791139 C70.4612567,8.0193038 67.3440406,8 64,8 C60.6559594,8 57.5387433,8.0257384 54.6483516,8.07721519 C51.75796,8.12869198 49.2823331,8.19303797 47.2214708,8.27025316 C45.1606086,8.34746835 43.7024514,8.43755274 42.8469992,8.54050633 C40.2547196,8.84936709 37.9864751,9.65369198 36.0422654,10.953481 C34.0980558,12.25327 32.6074951,13.9970464 31.5705833,16.1848101 C31.103973,17.1371308 30.5466329,18.514135 29.898563,20.3158228 C29.2504931,22.1175105 28.5894618,24.1508439 27.9154691,26.4158228 C27.2414765,28.6808017 26.671175,30.971519 26.2045647,33.2879747 L22.9382925,37.4962025 C21.7199211,39.0405063 20.754297,40.5268987 20.0414201,41.9553797 C19.3285433,43.3838608 18.8100873,44.9152954 18.4860524,46.5496835 C18.1620175,48.1840717 18,50.0951477 18,52.2829114 L18,59.0778481 C18,61.5487342 18.7128769,63.4919831 20.1386306,64.9075949 C21.5643843,66.3232068 23.5863624,67.185443 26.2045647,67.4943038 C28.0450831,67.700211 30.4234996,67.8932489 33.339814,68.0734177 C36.2561285,68.2535865 39.4640744,68.4144515 42.9636517,68.5560127 C46.4632291,68.6975738 50.0276134,68.806962 53.6568047,68.8841772 C57.2859961,68.9613924 60.7337278,69 64,69 Z M24.2088773,80 L28.7911227,80 C30.2532637,80 31.4869452,79.5050326 32.4921671,78.5150977 C33.497389,77.5251628 34,76.3007697 34,74.8419183 L34,65.1119005 L19,58 L19,74.8419183 C19,76.3007697 19.4960836,77.5251628 20.4882507,78.5150977 C21.4804178,79.5050326 22.7206266,80 24.2088773,80 Z M100.183246,80 L104.816754,80 C106.282723,80 107.513089,79.5050326 108.507853,78.5150977 C109.502618,77.5251628 110,76.3007697 110,74.8419183 L110,58 L95,65.1119005 L95,74.8419183 C95,76.3007697 95.4973822,77.5251628 96.4921466,78.5150977 C97.486911,79.5050326 98.7172775,80 100.183246,80 Z" id="Shape" fill={fillColor} fillRule="nonzero"/></G>
      </Icon>
  }