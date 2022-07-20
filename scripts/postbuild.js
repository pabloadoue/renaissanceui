#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
let packageJson = require('../package.json');
let packageLockJson = require('../package-lock.json');

const src = path.resolve(__dirname, "../lib/src/");
const dest = path.resolve(__dirname, '../dist/');

let exists = false;
try {
    exists = fs.statSync(dest).isDirectory();
} catch (error) {
    exists = false;
}

if (exists) {
    fs.rmSync(dest, { recursive: true, force: true });
}

fs.mkdirSync(dest);

fs.copySync(src, dest);

packageJson.main = './index.js';
fs.writeFileSync(path.resolve(__dirname, '../dist/package.json'), JSON.stringify(packageJson, null, 2));
fs.writeFileSync(path.resolve(__dirname, '../dist/package-lock.json'), JSON.stringify(packageLockJson, null, 2));

fs.rmSync(path.resolve(__dirname, "../lib"), { recursive: true, force: true });