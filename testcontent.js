import { defineDocumentType, makeSource } from "contentlayer/source-files";
import moonlightTheme from "./src/theme/moonlight.json";

import rehypePrettyCode from "rehype-pretty-code";

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `article/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
  },

  computedFields: {
    url: {
      type: "string",
      resolve: (article) => `/articles/${article._raw.flattenedPath}`,
    },

    slug: {
      type: "string",
      resolve: (doc) =>
        doc._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
  },
}));

const options = {
  keepBackground: true,
  theme: moonlightTheme,
};

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
