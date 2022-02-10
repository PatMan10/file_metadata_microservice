import { Rhum, StatusCodes, superoak } from "../../deps.ts";
import app from "../../main/code/app.ts";
import { FileMeta } from "../../main/code/models.ts";
import { URLs } from "../../main/code/utils.ts";

const { assertEquals, assertExists } = Rhum.asserts;

const title = "*-*-*-*-*-*-*-*-*-*- File Metadata Service *-*-*-*-*-*-*-*-*-*-";
Rhum.testPlan(
  title,
  () => {
    console.log(title);

    Rhum.testSuite(`---------- POST ${URLs.POST_FILE} ----------`, () => {
      const exec = async (file?: string) =>
        (await superoak(app)).post(URLs.POST_FILE).send({ file });

      Rhum.testCase("200 success, return file meta\n", async () => {
        const postUrl = "https://duckduckgo.com";
        const res = await exec(postUrl);
        const fileMeta: FileMeta = res.body;

        assertEquals(res.status, StatusCodes.OK);
        assertExists(fileMeta.name);
        assertExists(fileMeta.type);
        assertExists(fileMeta.size);
      });
    });
  },
);

Rhum.run();
