import { URLs } from "./utils.ts";

const css = () => `
* {
  margin: 0;
  padding: 0;
}

body {
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}

header {
  border-bottom: 1px solid black;
  padding: 15px 0;
  margin-bottom: 25px;
  width: 95%;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

div[id="form-container"] {
  min-width: 600px;
}

form {
  border: 1px solid black;
  border-radius: 10px;
  padding: 25px;
  width: 80%;
}

input[id="submit"] {
  height: 25px;
  width: 80px;
  text-align: center;
}

.file-fieldset {
  padding: 20px;
}

.file-fieldset > legend {
  text-align: center;
}
`;

export const IndexPage = () => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>File Metadata Service</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://patman10.github.io/kickstart.css/dist/kickstart.css"
    />
    <style>${css()}</style>
  </head>
  <body>
    <header class="flex-col-aiC">
      <h1>File Metadata Microservice</h1>
    </header>

    <main>
      <div id="form-container" class="flex-col-aiC mb-4">
        <h2>Upload File</h2>
        <form action="${URLs.POST_FILE}" method="post" enctype="multipart/form-data">
          <fieldset class="file-fieldset">
            <legend>File Uploader</legend>
            <div class="flex-row-aiC flex-jcSE">
              <input id="file-input" name="upfile" type="file" />
              <input 
                id="submit"
                type="submit" 
                value="Upload" 
                />
            </div>
          </fieldset>
        </form>
      </div>
    </main>

    <footer>
      <span>
          By <a href="https://github.com/PatMan10" target="_blank" rel="noopener noreferrer">PatMan10</a>
      </span>
    </footer>
  </body>
</html>
`;
