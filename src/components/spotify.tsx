'use client'

import useSwr from 'swr'
import { z } from 'zod'

import { nowPlayingSchema } from '~/lib/validations/now-playing'

import { icons } from './icons'

type NowPlaying = z.infer<typeof nowPlayingSchema>

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())

export function Spotify() {
  const { data: currentPlaying } = useSwr<NowPlaying>(
    '/api/spotify/now-playing',
    fetcher,
    {
      refreshInterval: 10000,
    },
  )

  return (
    <div className="flex items-center gap-3">
      {<icons.spotify />}

      <div className="text-white text-sm">
        {!currentPlaying?.isPlaying && <p>Not playing...</p>}

        {currentPlaying?.isPlaying && (
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <rect width="2.8" height="12" x="1" y="6" fill="#ffffff">
                <animate
                  attributeName="y"
                  begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                  values="6;1;6"
                />
                <animate
                  attributeName="height"
                  begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                  values="12;22;12"
                />
              </rect>
              <rect width="2.8" height="12" x="5.8" y="6" fill="#ffffff">
                <animate
                  attributeName="y"
                  begin="svgSpinnersBarsScaleMiddle0.begin+0.2s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                  values="6;1;6"
                />
                <animate
                  attributeName="height"
                  begin="svgSpinnersBarsScaleMiddle0.begin+0.2s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                  values="12;22;12"
                />
              </rect>
              <rect width="2.8" height="12" x="10.6" y="6" fill="#ffffff">
                <animate
                  id="svgSpinnersBarsScaleMiddle0"
                  attributeName="y"
                  begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                  values="6;1;6"
                />
                <animate
                  attributeName="height"
                  begin="0;svgSpinnersBarsScaleMiddle1.end-0.1s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                  values="12;22;12"
                />
              </rect>
              <rect width="2.8" height="12" x="15.4" y="6" fill="#ffffff">
                <animate
                  attributeName="y"
                  begin="svgSpinnersBarsScaleMiddle0.begin+0.2s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                  values="6;1;6"
                />
                <animate
                  attributeName="height"
                  begin="svgSpinnersBarsScaleMiddle0.begin+0.2s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                  values="12;22;12"
                />
              </rect>
              <rect width="2.8" height="12" x="20.2" y="6" fill="#ffffff">
                <animate
                  id="svgSpinnersBarsScaleMiddle1"
                  attributeName="y"
                  begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                  values="6;1;6"
                />
                <animate
                  attributeName="height"
                  begin="svgSpinnersBarsScaleMiddle0.begin+0.4s"
                  calcMode="spline"
                  dur="0.6s"
                  keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                  values="12;22;12"
                />
              </rect>
            </svg>
            <div className="space-y-1">
              <p>{currentPlaying.title}</p>
              <p className="text-xs text-slate-300 line-clamp-1">
                {currentPlaying.artist}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
