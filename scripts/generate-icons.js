const path = require("path");
const fs = require("fs");
const convert = require("xml-js");
const setval = require("setval");
const deepIterator = require("deep-iterator").default;
const capitalize = require("capitalize");
const replaceall = require("replaceall");

const dir = path.resolve(__dirname, "../src/UIIcon/raw");
const outDir = path.resolve(__dirname, "../src/UIIcon");

const icons = fs.readdirSync(dir);
const iconMap = {};

icons.forEach(icon => {
    const iconName = icon.split(".")[0];
    const iconPath = path.resolve(dir, icon);
    const svgString = fs.readFileSync(iconPath, "utf8");
    const svgObject = convert.xml2js(svgString, { compact: false })["elements"][0];

    const height = svgObject["attributes"]["height"];
    const width = svgObject["attributes"]["width"];
    const viewBox = svgObject["attributes"]["viewBox"];
    const dependencies = [];

    /*console.log({
        height: height,
        width: width,
        viewBox: viewBox
    })*/

    delete svgObject["elements"][0];
    const iterator = deepIterator(svgObject);
    for (let { key, value, path, parent } of iterator) {
        const parsedPath = path.join(".");
        const parentPath = path.slice(0, -1).join(".");
        if (key === "name") {
            if (value === "g") {
                if (!dependencies.includes("G")) {
                    dependencies.push("G");
                }
                setval(svgObject, parsedPath, "G", ".");
            } else if (value === "rect") {
                if (!dependencies.includes("Rect")) {
                    dependencies.push("Rect");
                }
                setval(svgObject, parsedPath, "Rect", ".");
            } else if (value === "path") {
                if (!dependencies.includes("Path")) {
                    dependencies.push("Path");
                }
                setval(svgObject, parsedPath, "Path", ".");
            } else if (value === "polygon") {
                if (!dependencies.includes("Polygon")) {
                    dependencies.push("Polygon");
                }
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
        body: svgOutput,
        dependencies: dependencies
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

let imports = `
import React from "react";
import type {IIconProps} from "native-base";
`;

let cases = ``;
const iconTypes = [];
const iconNames = [];

Object.keys(iconMap).forEach(key => {
    const name = key;
    let { height, width, viewBox, body, dependencies } = iconMap[name];
    body = replaceall('fill="#000000"', 'fill={fillColor}', body);

    let iconNameArray = [];
    key.split("-").map((name) => {
        iconNameArray.push(capitalize(name));
    });
    const iconName = iconNameArray.join("");
    iconNames.push(iconName);

    const content = `/**
    * ${name} Definition
    **/
   import React from "react";
    import {Icon, useTheme} from "native-base";
    import {${dependencies.join(',')}} from "react-native-svg";
    import find from "@pabloadoue/find-value";
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