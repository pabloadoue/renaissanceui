/**
    * all Definition
    **/
    import {Icon, useTheme} from "native-base";
    import {Path, G, Rect, Polygon} from "react-native-svg";
    //@ts-expect-error
    import find from "find-value";
    import validator from "validator";

    export default function AllIcon(props: any) {
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
          <G id="all" stroke="none" fill="none" strokeWidth="1" fillRule="evenodd"><Rect id="Rectangle" x="0" y="0" width="128" height="88"/><Path d="M38.0067578,68.3067642 L90.9865791,68.3067642 C92.1116103,68.3067642 93.0617716,67.8877205 93.837063,67.0496331 C94.6123543,66.2115458 95,65.2439143 95,64.1467388 C95,63.025057 94.6160561,62.0535134 93.8481682,61.232108 C93.0802803,60.4107027 92.1264173,60 90.9865791,60 L38.0067578,60 C36.8959412,60 35.9504441,60.4179365 35.1702665,61.2538094 C34.3900888,62.0896824 34,63.0539922 34,64.1467388 C34,65.2149791 34.3937165,66.1753768 35.1811496,67.0279317 C35.9685826,67.8804867 36.910452,68.3067642 38.0067578,68.3067642 Z" id="Path" fill={fillColor} fillRule="nonzero"/><Path d="M38.0067578,48.3067642 L90.9865791,48.3067642 C92.1116103,48.3067642 93.0617716,47.8888277 93.837063,47.0529548 C94.6123543,46.2170818 95,45.252772 95,44.1600254 C95,43.0191518 94.6160561,42.0405959 93.8481682,41.2243575 C93.0802803,40.4081192 92.1264173,40 90.9865791,40 L38.0067578,40 C36.8959412,40 35.9504441,40.4154268 35.1702665,41.2462804 C34.3900888,42.0771339 34,43.0483823 34,44.1600254 C34,45.2238368 34.3937165,46.1809128 35.1811496,47.0312534 C35.9685826,47.8815939 36.910452,48.3067642 38.0067578,48.3067642 Z" id="Path" fill={fillColor} fillRule="nonzero"/><Path d="M38.0067578,29.3001209 L90.9865791,29.3001209 C92.1116103,29.3001209 93.0617716,28.8821844 93.837063,28.0463115 C94.6123543,27.2104385 95,26.2461287 95,25.1533821 C95,24.0125085 94.6160561,23.0350598 93.8481682,22.2210359 C93.0802803,21.407012 92.1264173,21 90.9865791,21 L38.0067578,21 C36.8959412,21 35.9504441,21.4142458 35.1702665,22.2427373 C34.3900888,23.0712288 34,24.0414437 34,25.1533821 C34,26.2171935 34.3937165,27.1742695 35.1811496,28.0246101 C35.9685826,28.8749506 36.910452,29.3001209 38.0067578,29.3001209 Z" id="Path" fill={fillColor} fillRule="nonzero"/></G>
      </Icon>
  }