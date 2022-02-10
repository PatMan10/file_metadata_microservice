import { FormDataFile, Router } from "../../deps.ts";
import { FileMeta } from "./models.ts";
import { URLs } from "./utils.ts";
import { IndexPage } from "./ui.ts";

const controller = new Router();

controller.get(URLs.INDEX, (ctx) => {
  ctx.response.headers.set("content-type", "text/html");
  ctx.response.body = IndexPage();
});

controller.post(
  URLs.POST_FILE,
  async (ctx) => {
    const body = await ctx.request.body({ type: "form-data" }).value.read();
    const files = body.files as FormDataFile[];
    const file = files[0];
    console.log(file);
    const fileMeta = new FileMeta(file.originalName, file.contentType, 0);
    ctx.response.body = fileMeta;
  },
);

export default controller;
