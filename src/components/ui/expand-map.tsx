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
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1629] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
    >
      <div className="relative flex min-h-[250px] flex-col justify-between">
        <div className="relative flex-1 overflow-hidden rounded-xl border border-white/10 shadow-[0_18px_36px_rgba(0,0,0,0.28)]">
          {MAPBOX_ACCESS_TOKEN ? (
            <Map
              mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
              initialViewState={{
                longitude,
                latitude,
                zoom: 12.5,
              }}
              style={{ width: '100%', height: 180 }}
              mapStyle="mapbox://styles/mapbox/dark-v11"
            />
          ) : (
            <div className="flex h-[180px] items-center justify-center bg-[linear-gradient(145deg,#111827_0%,#0f172a_100%)]">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_25px_45px_rgba(0,0,0,0.25)] backdrop-blur-sm">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full border-[7px] border-sky-300/80" />
                    <div className="absolute left-1/2 top-8 h-14 w-14 -translate-x-1/2 rotate-45 rounded-bl-[60px] border-b-[12px] border-r-[12px] border-sky-300/80" />
                  </div>
                </div>
                <div className="absolute left-1/2 top-[7.2rem] h-3 w-14 -translate-x-1/2 rounded-full bg-sky-400/20 blur-sm" />
              </motion.div>
            </div>
          )}

          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        <div className="mt-6 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-slate-200 shadow-[0_16px_30px_rgba(0,0,0,0.18)]">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300 shadow-sm">
            <PinIcon className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Location
            </p>
            <p className="text-lg font-semibold text-white">{location}</p>
            <p className="mt-0.5 text-xs text-slate-400">{coordinates}</p>
            {!MAPBOX_ACCESS_TOKEN ? (
              <p className="mt-1 text-[11px] text-slate-500">
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
