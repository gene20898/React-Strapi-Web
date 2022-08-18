import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    "palette": {
        "background": {
            "default": "#FFFFFF",
            "emphasis": "#F2F2F2",
            "secondary": "rgba(35, 35, 49, 0.9)",
            "header": "#121037"
        },
        "secondary": {
            "main": "#0C57A5",
            "light": "#337AB7",
            "dark": "#0A498A",
            "contrastText": "#F1F6F9"
        },
        "primary": {
            "main": "#242331",
            "dark": "#0E0E12",
            "light": "#37374D",
            "contrastText": "#F1F6F9"
        },
        "text": {
            "primary": "#232331",
            "secondary": "#333333",
            "disabled": "#838383",
            "hint": "#9fa8aa"
        },
        "common": {
            "white": "#FFFFFF",
            "black": "#000000"
        },
        "contrastThreshold": 3
    },
    "shadows": [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none"
    ],
});

export default theme;

