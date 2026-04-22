import { motion } from 'framer-motion'
import Map from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

type LocationMapProps = {
  location: string
  coordinates: string
  latitude: number
  longitude: number
}

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

export function LocationMap({
  location,
  coordinates,
  latitude,
  longitude,
}: LocationMapProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01, y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(145deg,#eef2f7_0%,#dfe6f3_100%)] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
    >
      <div className="relative flex min-h-[250px] flex-col justify-between">
        <div className="relative flex-1 overflow-hidden rounded-[1.25rem] border border-white/70 shadow-[0_18px_36px_rgba(148,163,184,0.18)]">
          {MAPBOX_ACCESS_TOKEN ? (
            <Map
              mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
              initialViewState={{
                longitude,
                latitude,
                zoom: 12.5,
              }}
              style={{ width: '100%', height: 180 }}
              mapStyle="mapbox://styles/mapbox/streets-v12"
            />
          ) : (
            <div className="flex h-[180px] items-center justify-center bg-[linear-gradient(145deg,#eef2f7_0%,#dfe6f3_100%)]">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-[8px] border-white bg-white/35 shadow-[0_25px_45px_rgba(148,163,184,0.18)] backdrop-blur-sm">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full border-[7px] border-white" />
                    <div className="absolute left-1/2 top-8 h-14 w-14 -translate-x-1/2 rotate-45 rounded-bl-[60px] border-b-[12px] border-r-[12px] border-white" />
                  </div>
                </div>
                <div className="absolute left-1/2 top-[7.2rem] h-3 w-14 -translate-x-1/2 rounded-full bg-slate-400/25 blur-sm" />
              </motion.div>
            </div>
          )}

          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent" />
        </div>

        <div className="mt-6 flex items-center gap-4 rounded-[1.1rem] bg-white px-4 py-3.5 text-slate-800 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700 shadow-sm">
            <PinIcon className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Location
            </p>
            <p className="text-lg font-semibold">{location}</p>
            <p className="mt-0.5 text-xs text-slate-500">{coordinates}</p>
            {!MAPBOX_ACCESS_TOKEN ? (
              <p className="mt-1 text-[11px] text-slate-400">
                Add `VITE_MAPBOX_ACCESS_TOKEN` to enable the live map.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function PinIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className={className}
    >
      <path d="M12 20s6-5.85 6-10.25a6 6 0 1 0-12 0C6 14.15 12 20 12 20Z" />
      <circle cx="12" cy="9.75" r="2.25" />
    </svg>
  )
}
