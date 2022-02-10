import { MultipartReader, Router } from "../../deps.ts";
import { FileMeta } from "./models.ts";
import { logger, URLs } from "./utils.ts";
import { IndexPage } from "./ui.ts";

const controller = new Router();

controller.get(URLs.INDEX, (ctx) => {
  ctx.response.headers.set("content-type", "text/html");
  ctx.response.body = IndexPage();
});

controller.post(
  URLs.POST_FILE,
  async (ctx) => {
    const ct = ctx.request.headers.get("content-type");
    const boundary = ct?.split(";")[1]?.split("=")[1] as string;
    logger.info(boundary);
    logger.info(await ctx.request.body().value, boundary);
    // const mr = new MultipartReader(await ctx.request.body().value, boundary);
    // const form = await mr.readForm();
    // logger.info(form.files);
    const fileMeta = new FileMeta("some_file", "unknown", 0);
    ctx.response.body = fileMeta;
  },
);

export default controller;
