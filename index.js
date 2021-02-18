module.exports = {
  "rules": {
    "no-await-in-loop": "error",
    "array-callback-return": "error",
    "complexity": [
      "error",
      {
        "max": 10
      }
    ],
    "curly": [
      "error",
      "all"
    ],
    "default-case": "off",
    "dot-notation": "error",
    "eqeqeq": "error",
    "no-alert": "error",
    "no-else-return": "error",
    "no-eval": "error",
    "no-floating-decimal": "error",
    "no-lone-blocks": "error",
    "no-magic-numbers": [
      "error",
      {
        "ignore": [
          -1,
          0,
          1,
          2
        ]
      }
    ],
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "prefer-promise-reject-errors": "error",
    "require-await": "warn",
    "no-shadow": "error",
    "global-require": "error",
    "handle-callback-err": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "id-length": [
      "error",
      {
        "min": 3,
        "max": 38,
        "exceptions": [
          "fs",
          "vm",
          "to",
          "id",
          "el",
          "ga",
          "h1",
          "OK",
          "i",
          "j",
          "k",
          "x",
          "y",
          "z"
        ]
      }
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "max-lines": [
      "warn",
      {
        "max": 800,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 0
      }
    ],
    "no-trailing-spaces": "error",
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "minProperties": 1
        },
        "ObjectPattern": "never",
        "ImportDeclaration": "never",
        "ExportDeclaration": "always"
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-property-newline": [
      "error",
      {
        "allowAllPropertiesOnSameLine": false
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      "always"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": [
      "error",
      {
        "int32Hint": false
      }
    ],
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": true,
        "overrides": {
          "!": false,
          "!!": false
        }
      }
    ],
    "spaced-comment": [
      "error",
      "always"
    ],
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "no-duplicate-imports": "error",
    "no-var": "error",
    "object-shorthand": [
      "error",
      "always"
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "array": true,
        "object": true
      },
      {
        "enforceForRenamedProperties": true
      }
    ],
    "prefer-template": "error",
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "vue/no-v-html": 0,
    "vue/name-property-casing": [
      "error",
      "kebab-case"
    ],
    "vue/prop-name-casing": [
      "error",
      "camelCase"
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        "singleline": 8,
        "multiline": {
          "max": 8,
          "allowFirstLine": false
        }
      }
    ],
    "vue/attribute-hyphenation": [
      "error",
      "always",
      {
        "ignore": []
      }
    ],
    "vue/mustache-interpolation-spacing": [
      "error",
      "always"
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        "singleline": "never",
        "multiline": "always"
      }
    ],
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        "startTag": "never",
        "endTag": "never",
        "selfClosingTag": "never"
      }
    ],
    "vue/html-quotes": [
      "error",
      "double"
    ],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "always",
          "normal": "any",
          "component": "any"
        },
        "svg": "never",
        "math": "always"
      }
    ],
    "vue/v-bind-style": [
      "error",
      "shorthand"
    ],
    "vue/v-on-style": [
      "error",
      "shorthand"
    ],
    "vue/order-in-components": [
      "error",
      {
        "order": [
          "el",
          "name",
          "metaInfo",
          "icons",
          "parent",
          "functional",
          [
            "delimiters",
            "comments"
          ],
          [
            "components",
            "directives",
            "filters"
          ],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          [
            "props",
            "propsData"
          ],
          "data",
          "computed",
          "methods",
          "watch",
          "LIFECYCLE_HOOKS",
          [
            "template",
            "render"
          ],
          "renderError"
        ]
      }
    ]
  }
}
