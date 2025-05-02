'use client'

import { useEffect } from 'react'

export default function SlashLines() {
  useEffect(() => {
    const intervalMs = 300
    const randomRangeMax = 110
    const randomRangeMin = -10
    const disallowedAxisNum = 4
    const disallowedRange = 8
    const lineLengthMax = 30
    const lineLengthMin = 20
    const counterMax = 15

    let arrayY: number[] = []
    let arrayX: number[] = []
    let i = 1

    const drawArea = document.querySelector('.slash_line_outer')
    if (!drawArea) return

    const drawSlashLine = () => {
      const positionHtml = (top: number, left: number, n: number) =>
        `<div class="slash_position n${n}" style="top: ${top}%; left: ${left}%;"></div>`

      const line = (height: number) =>
        `<svg style="height: ${height}vh;" xmlns="http://www.w3.org/2000/svg"><line class="cls-1" x1="0.48" y1="320.5" x2="209.34" y2="0.15"/></svg>`

      const randomNumY = Math.floor(Math.random() * (randomRangeMax + 1 - randomRangeMin)) + randomRangeMin
      if (arrayY.some(el => randomNumY - disallowedRange < el && el < randomNumY + disallowedRange)) return

      const randomNumX = Math.floor(Math.random() * (randomRangeMax + 1 - randomRangeMin)) + randomRangeMin
      if (arrayX.some(el => randomNumX - disallowedRange < el && el < randomNumX + disallowedRange)) return

      if (arrayY.length >= disallowedAxisNum) {
        arrayY.shift()
        arrayX.shift()
      }

      arrayY.push(randomNumY)
      arrayX.push(randomNumX)

      const selector = document.querySelector(`.slash_position.n${i}`)
      if (selector) selector.remove()

      drawArea.insertAdjacentHTML('beforeend', positionHtml(randomNumY, randomNumX, i))
      const parent = document.querySelector(`.slash_position.n${i}`)
      const lineHeight = Math.floor(Math.random() * (lineLengthMax + 1 - lineLengthMin)) + lineLengthMin
      parent?.insertAdjacentHTML('beforeend', line(lineHeight))

      if (i >= counterMax) i = 0
      i++
    }

    const interval = setInterval(drawSlashLine, intervalMs)

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        clearInterval(interval)
        document.querySelectorAll('.slash_position').forEach(el => el.remove())
      }
    })
  }, [])

  return null
}
