/* eslint-disable */
'use client'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import map components to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

export const Map = () => {
  useEffect(() => {
    // Fix for default markers in react-leaflet
    import('leaflet').then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      })
    })
  }, [])

  // Coordinates for Victoria Island, Lagos, Nigeria (approximate location)
  const clinicPosition: [number, number] = [6.4281, 3.4219]

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200">
      <MapContainer
        center={clinicPosition}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={clinicPosition}>
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-[#00186B]">QLife Family Clinic</h3>
              <p className="text-sm mt-1">
                155A Prince Ade Odedina Street,<br />
                Off Sinari Daranijo, Victoria Island<br />
                Lagos, Nigeria
              </p>
              <div className="mt-2 text-xs text-gray-600">
                <p>Mon-Fri: 8:00am - 7:00pm</p>
                <p>Sat & Holidays: 8:00am - 4:00pm</p>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
