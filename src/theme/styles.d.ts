// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    brand: {
      primary: {
        text: string;
        background: string;
      };
      secondary: {
        text: string;
        background: string;
      };
      accent: {
        text: string;
        background: string;
      };
    };

    colors: {
      gray90: string;
      blueGray: string;
    };

    text: {
      h1: {
        fontSize: CSSProperties["fontSize"];
        fontWeight: CSSProperties["fontWeight"];
        lineHeight: CSSProperties["lineHeight"];
      };
    };

    letterSpacing: {
      0.25: {
        letterSpacing: CSSProperties["letterSpacing"];
      };
    };
  }
}
