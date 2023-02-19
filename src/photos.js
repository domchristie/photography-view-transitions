export async function Photos () {
  const result = await import.meta.glob('/src/pages/photos/*.md', { eager: true })
  const files = [...Object.values(result)]
  return files.sort((a, b) =>
    new Date(b.frontmatter.date).valueOf() -
    new Date(a.frontmatter.date).valueOf()
  )
}
