'use client'

import { useEffect, useState } from 'react'
import type { BundledLanguage, BundledTheme, HighlighterGeneric } from 'shiki'
import { createHighlighter } from 'shiki'

interface DumpProps {
  data: unknown
}

export default function Dump({ data }: DumpProps) {
  const [dumpData, setDumpData] = useState<string>('')
  const [highlighter, setHighlighter] = useState<HighlighterGeneric<BundledLanguage, BundledTheme> | null>(null)

  useEffect(() => {
    ;(async () => {
      setHighlighter(await createHighlighter({
        langs: ['json'],
        themes: ['aurora-x'],
      }))
    })()
  }, [])

  useEffect(() => {
    if (!highlighter)
      return

    const jsonString = JSON.stringify(data)

    setDumpData(highlighter.codeToHtml(jsonString, {
      lang: 'json',
      theme: 'aurora-x',
    }))
  }, [highlighter, data])

  // eslint-disable-next-line node/prefer-global/process
  if (process.env.NODE_ENV !== 'development') {
    console.warn('The Dump component is being used in production!')
    return
  }

  return (
    // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
    <div dangerouslySetInnerHTML={{ __html: dumpData }} />
  )
}
