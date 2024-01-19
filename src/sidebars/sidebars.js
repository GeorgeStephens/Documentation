/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const meadowOsSidebar = require('./meadowOsSidebar');
const meadowCloudSidebar = require('./meadowCloudSidebar');
const hardwareTutorialsSidebar = require('./hardwareTutorialsSidebar');
const hardwareReferenceSidebar = require('./hardwareReferenceSidebar');
const apiReferenceSidebar = require('./apiReferenceSidebar');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  meadowSidebar: [{ type: "autogenerated", dirName: "Meadow" }],

  // FYI, this is how you manually hand curate a custom navbar. Kind of a pain.
  meadowOsSidebar,

  meadowCloudSidebar,

  hardwareTutorialsSidebar,

  hardwareReferenceSidebar,

  apiReferenceSidebar
};

module.exports = sidebars;
