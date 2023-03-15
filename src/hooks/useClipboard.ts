import { toast } from 'react-toastify'

export function useClipboard() {
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
    } else {
      document.execCommand("copy", true, text);
    }
    toast.info("Copied to clipboard");
  }

  return { copy: copyTextToClipboard };
}
