import path from "path";
import fs from "fs";
import convert from "xml-js";
import setval from 'setval';
import deepIterator from 'deep-iterator';
import capitalize from "capitalize";
import replaceall from "replaceall";

const dir = path.resolve(__dirname, "../src/UIIcon/raw");
const outDir = path.resolve(__dirname, "../src/UIIcon");

const icons = fs.readdirSync(dir);
const iconMap: {
    [key: string]: {
        height: string;
        width: string;
        viewBox: string;
        body: string;
    }
} = {};

icons.forEach(icon => {
    const iconName = icon.split(".")[0];
    const iconPath = path.resolve(dir, icon);
    const svgString = fs.readFileSync(iconPath, "utf8");
    const svgObject = convert.xml2js(svgString, { compact: false })["elements"][0];

    const height = svgObject["attributes"]["height"];
    const width = svgObject["attributes"]["width"];
    const viewBox = svgObject["attributes"]["viewBox"];

    console.log({
        height: height,
        width: width,
        viewBox: viewBox
    })

    delete svgObject["elements"][0];
    const iterator = deepIterator(svgObject);
    for (let { key, value, path, parent } of iterator) {
        const parsedPath = path.join(".");
        const parentPath = path.slice(0, -1).join(".");
        if (key === "name") {
            if (value === "g") {
                setval(svgObject, parsedPath, "G", ".");
            } else if (value === "rect") {
                setval(svgObject, parsedPath, "Rect", ".");
            } else if (value === "path") {
                setval(svgObject, parsedPath, "Path", ".");
            } else if (value === "polygon") {
                setval(svgObject, parsedPath, "Polygon", ".");
            }
        } else if (key === "fill-rule") {
            setval(svgObject, `${parentPath}.fillRule`, value, ".");
            setval(svgObject, `${parentPath}.fill-rule`, undefined, ".");
        } else if (key === "stroke-width") {
            setval(svgObject, `${parentPath}.strokeWidth`, value, ".");
            setval(svgObject, `${parentPath}.stroke-width`, undefined, ".");
        }
    }


    let svgOutput = convert.js2xml(svgObject, { compact: false });
    const name = iconName;
    iconMap[name] = {
        height: height,
        width: width,
        viewBox: viewBox,
        body: svgOutput
    }
});

//Fetch all existing files on the Icon Directory
const existing = fs.readdirSync(outDir);
existing.forEach(file => {
    const name = file.split(".")[0];
    const extension = file.split(".")[1];
    if (typeof extension !== "undefined") {
        const filePath = path.resolve(outDir, file);
        fs.unlinkSync(filePath);
    }
});

let imports = `import {IIconProps} from "native-base";

`;

let cases = ``;
const iconTypes: string[] = [];
const iconNames: string[] = [];

Object.keys(iconMap).forEach(key => {
    const name = key as keyof typeof iconMap;
    let { height, width, viewBox, body } = iconMap[name];
    body = replaceall('fill="#000000"', 'fill={fillColor}', body);

    let iconNameArray: string[] = [];
    key.split("-").map((name) => {
        iconNameArray.push(capitalize(name));
    });
    const iconName = iconNameArray.join("");
    iconNames.push(iconName);

    const content = `/**
    * ${name} Definition
    **/
    import {Icon, useTheme} from "native-base";
    import {Path, G, Rect, Polygon} from "react-native-svg";
    //@ts-expect-error
    import find from "find-value";
    import validator from "validator";

    export default function ${iconName}Icon(props: any) {
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
  
      return <Icon viewBox="${viewBox}" {...props}>
          ${body}
      </Icon>
  }`;
    imports += `import ${iconName}Icon from "./${iconName}Icon";\n`;
    cases += `      case "${name}":\n`
    cases += `          return <${iconName}Icon {...props} />;\n`;
    iconTypes.push(`'${name}'`);
    fs.writeFileSync(path.resolve(outDir, `${iconName}Icon.tsx`), content);
});

const indexFile = `${imports}
export function UIIcon(props: TUIIconProps) {
    switch (props.name) {
${cases}
        default:
            return <UnknownIcon {...props} />;
    }
};
export interface TUIIconProps extends IIconProps {
    name: TUIIconName
}
export type TUIIconName = ${iconTypes.join(" | ")};
export const UIIcons=${JSON.stringify(iconNames)};
`;

fs.writeFileSync(path.resolve(outDir, `index.tsx`), indexFile);