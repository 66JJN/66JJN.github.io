import { Fragment } from 'react'
import { segmentHeadline } from '../text/segmentHeadline'

const thaiPattern = /[\u0E00-\u0E7F]/u

export const ThaiText = ({ children }) => {
  const text = String(children ?? '')
  if (!thaiPattern.test(text)) return text

  return segmentHeadline(text).map((segment, index) => (
    thaiPattern.test(segment)
      ? (
          <Fragment key={`${segment}-${index}`}>
            <span className="thai-word" data-thai-word={segment}>{segment}</span>
            <wbr />
          </Fragment>
        )
      : <Fragment key={`${segment}-${index}`}>{segment}</Fragment>
  ))
}
