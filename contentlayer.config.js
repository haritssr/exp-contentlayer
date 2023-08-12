// contentlayer.config.js
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      requred: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: post => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

/*
- title: String pulled from the file's frontmatter.
- date: JavaScript Date object, pulled from the file's frontmatter.
- body: An object that contains the raw content from the markdown file and the converted html string. (This is built into Contentlayer by default and does not have to be defined.)
- url: A string that takes the name of the file (without the extension) and prepends /posts/ to it, thus defining that path at which that content will be available on your site. (More on this soon.)
*/
