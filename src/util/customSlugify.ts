import slugify from "slugify"

export const customSlugify = (words: string) => {
  return slugify(words, {
    lower: true,
    remove: /[,.()'"!:@]/g,
    strict: true
  })
}