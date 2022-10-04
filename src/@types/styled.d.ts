import { ITalentechThemeShape } from "@talentech/components";
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme extends ITalentechThemeShape {}
}
