/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  resumeSidebar: [
    'resume',
    {
      type: 'category',
      label: 'Experience',
      items: [
        'experience/mongodb',
        'experience/hypertattoo',
        'experience/sepa-intergroup',
        'experience/fitbod',
        'experience/medallia',
        'experience/bmc-software',
        'experience/td-ameritrade',
        'experience/bank-of-america',
        'experience/merrill-lynch',
        'experience/earlier-experience',
      ],
    },
  ],
};

export default sidebars;
