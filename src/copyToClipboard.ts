import { CopyToClipboard } from "./types"

export const copyToClipboard: CopyToClipboard = (
  value: string,
  target = "body"
) => {
  const root =
    typeof target === "string" ? document.querySelector(target)! : target

  if (!target) {
    throw new Error(
      `Could not find render target for copy paste text field using selector "${target}"`
    )
  }

  const el = document.createElement("textarea")
  el.value = value
  el.style.width = "0px"
  el.style.height = "0px"
  el.style.padding = "0px"
  el.style.margin = "0px"
  el.style.opacity = "0"

  root.appendChild(el)

  el.select()
  document.execCommand("copy")

  el.blur()
  document.getSelection()?.empty()

  root.removeChild(el)
}
