import { readFile, rm, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const projectRoot = process.cwd()
const clientHtmlPath = path.join(projectRoot, 'dist', 'index.html')
const serverBuildPath = path.join(projectRoot, 'dist-ssr', 'entry-server.js')
const rootMarker = '<div id="root"></div>'

const [{ render }, clientHtml] = await Promise.all([
  import(pathToFileURL(serverBuildPath).href),
  readFile(clientHtmlPath, 'utf8'),
])

if (!clientHtml.includes(rootMarker)) {
  throw new Error(`Unable to find ${rootMarker} in the client build.`)
}

const renderedHtml = clientHtml.replace(
  rootMarker,
  `<div id="root">${render()}</div>`
)

await writeFile(clientHtmlPath, renderedHtml)
await rm(path.dirname(serverBuildPath), { recursive: true, force: true })
