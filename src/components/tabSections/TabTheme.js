export const tabTheme = {
    "base": "flex flex-col gap-2",
    "tablist": {
      "base": "flex text-center",
      "styles": {
        "underline": "flex-wrap -mb-px",
      },
      "tabitem": {
        "base": "flex items-center justify-center p-3 rounded-t-lg text-sm font-medium first:ml-0",
        "styles": {
          "default": {
            "base": "rounded-t-lg",
            "active": {
              "on": "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
              "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
            }
          },
          "underline": {
            "base": "rounded-t-lg",
            "active": {
              "on": "tab-default tab-active",
              "off": "tab-default"
            }
          },
        },
        "icon": "mr-2 h-5 w-5"
      }
    },
    "tabitemcontainer": {
      "base": "",
      "styles": {
        "default": "",
        "underline": "",
        "pills": "",
        "fullWidth": ""
      }
    },
    "tabpanel": "py-3"
  }