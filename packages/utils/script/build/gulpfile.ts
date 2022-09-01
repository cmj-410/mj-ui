import { series, parallel } from "gulp";
import { buildStyle, buildComponent } from "./index";

export default series(
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
