/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Wilderness Labs Developer Portal",
  "tagline": "Wilderness Labs developer documentation and resource site.",
  "favicon": "img/favicon.ico",
  "customFields": {
    "email": "hello@wildernesslabs.co",
    "twitter_username": "wildernesslabs",
    "github_username": "wildernesslabs",
    "topNav": [
      {
        "href": "docs/Meadow/Meadow.OS",
        "label": "Meadow.OS"
      },
      {
        "href": "docs/Meadow",
        "label": "Meadow.NET"
      },
      {
        "href": "docs/Meadow/Meadow.Cloud",
        "label": "Meadow.Cloud"
      },
      {
        "href": "docs/Hardware",
        "label": "Hardware & Circuits"
      },
      {
        "href": "docs/Hardware/Tutorials",
        "label": "Electronics Tutorials"
      },
      {
        "href": "",
        "label": "API Docs"
      }
    ]
  },
  "plugins": [
    "docusaurus-plugin-sass"
  ],
  "url": "https://wildernesslabs.github.io",
  "baseUrl": "/DocsDocusaurus/",
  "trailingSlash": true,
  "organizationName": "WildernessLabs",
  "projectName": "DocsDocusaurus",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/Users/adam/_/Documentation/sidebars.js",
          "editUrl": "https://github.com/WildernessLabs/DocsDocusaurus/tree/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/"
        },
        "theme": {
          "customCss": "/Users/adam/_/Documentation/src/css/custom.scss"
        }
      }
    ]
  ],
  "themeConfig": {
    "image": "img/docusaurus-social-card.jpg",
    "navbar": {
      "logo": {
        "alt": "Wilderness Labs",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "href": "https://www.wildernesslabs.co/developers",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Developers"
        },
        {
          "href": "https://www.wildernesslabs.co/enterprise",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Enterprise"
        },
        {
          "href": "https://www.wildernesslabs.co/hardware",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Hardware"
        },
        {
          "href": "https://store.wildernesslabs.co/",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Shop"
        },
        {
          "href": "https://community.wildernesslabs.co/",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Community"
        },
        {
          "href": "https://blog.wildernesslabs.co/",
          "label": "Blog",
          "position": "left",
          "external": false
        },
        {
          "href": "https://connect.wildernesslabs.co/contact",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Contact"
        },
        {
          "href": "https://github.com/WildernessLabs/Documentation",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "items": [
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/wildernesslabs"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/wildernesslabs"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/WildernessLabs"
            },
            {
              "label": "Slack",
              "href": "http://slackinvite.wildernesslabs.co/"
            }
          ],
          "title": null
        },
        {
          "title": "Contact",
          "items": [
            {
              "label": "hello@wildernesslabs.co",
              "href": "mailto:hello@wildernesslabs.co"
            }
          ]
        },
        {
          "items": [
            {
              "label": "Meadow",
              "to": "/docs/Meadow/"
            },
            {
              "label": "Netduino",
              "to": "/docs/Netduino/"
            },
            {
              "label": "Community",
              "to": "https://community.wildernesslabs.co/"
            },
            {
              "label": "Developers",
              "to": "/docs/"
            },
            {
              "label": "Blog",
              "to": "https://blog.wildernesslabs.co/"
            }
          ],
          "title": null
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Terms of Use",
              "href": "https://www.wildernesslabs.co/terms"
            },
            {
              "label": "Privacy Policy",
              "href": "https://www.wildernesslabs.co/privacy"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 Wilderness Labs"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#000000",
          "backgroundColor": "#f6f7f7"
        },
        "styles": [
          {
            "types": [
              "prolog"
            ],
            "style": {
              "color": "rgb(0, 0, 128)"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "#708090"
            }
          },
          {
            "types": [
              "builtin",
              "changed",
              "keyword",
              "interpolation-punctuation"
            ],
            "style": {
              "color": "#12bbf3"
            }
          },
          {
            "types": [
              "number",
              "inserted"
            ],
            "style": {
              "color": "#ff8e0d"
            }
          },
          {
            "types": [
              "constant"
            ],
            "style": {
              "color": "#b6c969"
            }
          },
          {
            "types": [
              "attr-name",
              "variable"
            ],
            "style": {
              "color": "#b6c969"
            }
          },
          {
            "types": [
              "deleted",
              "string",
              "attr-value",
              "template-punctuation"
            ],
            "style": {
              "color": "#b6c969"
            }
          },
          {
            "types": [
              "selector"
            ],
            "style": {
              "color": "#b6c969"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "rgb(86, 156, 214)"
            }
          },
          {
            "types": [
              "punctuation",
              "operator",
              "named-parameter"
            ],
            "style": {
              "color": "#708090"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "#808080"
            }
          },
          {
            "types": [
              "function"
            ],
            "style": {
              "color": "#ff8e0d"
            }
          },
          {
            "types": [
              "namespace-name"
            ],
            "style": {
              "color": "#909f59"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "#ff8e0d"
            }
          },
          {
            "types": [
              "char"
            ],
            "style": {
              "color": "#ff8e0d"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#b6c969",
          "backgroundColor": "#1E1E1E"
        },
        "styles": [
          {
            "types": [
              "prolog"
            ],
            "style": {
              "color": "rgb(0, 0, 128)"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "#708090"
            }
          },
          {
            "types": [
              "builtin",
              "changed",
              "keyword",
              "interpolation-punctuation"
            ],
            "style": {
              "color": "#12bbf3"
            }
          },
          {
            "types": [
              "number",
              "inserted"
            ],
            "style": {
              "color": "rgb(181, 206, 168)"
            }
          },
          {
            "types": [
              "constant"
            ],
            "style": {
              "color": "#b6c969"
            }
          },
          {
            "types": [
              "attr-name",
              "variable"
            ],
            "style": {
              "color": "#b6c969"
            }
          },
          {
            "types": [
              "deleted",
              "string",
              "attr-value",
              "template-punctuation"
            ],
            "style": {
              "color": "#b6c969"
            }
          },
          {
            "types": [
              "selector"
            ],
            "style": {
              "color": "#b6c969"
            }
          },
          {
            "types": [
              "tag"
            ],
            "style": {
              "color": "rgb(78, 201, 176)"
            }
          },
          {
            "types": [
              "tag"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "rgb(86, 156, 214)"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "rgb(212, 212, 212)"
            }
          },
          {
            "types": [
              "punctuation"
            ],
            "languages": [
              "markup"
            ],
            "style": {
              "color": "#808080"
            }
          },
          {
            "types": [
              "function"
            ],
            "style": {
              "color": "#ff8e0d"
            }
          },
          {
            "types": [
              "namespace-name"
            ],
            "style": {
              "color": "#909f59"
            }
          },
          {
            "types": [
              "class-name"
            ],
            "style": {
              "color": "#ff8e0d"
            }
          },
          {
            "types": [
              "char"
            ],
            "style": {
              "color": "#b6c969"
            }
          }
        ]
      },
      "additionalLanguages": [
        "csharp",
        "powershell"
      ],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "respectPrefersColorScheme": true,
      "disableSwitch": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
