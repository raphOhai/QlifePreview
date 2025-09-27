import React from 'react'
import { Button } from '@/components/ui/button'

export const MapSimple = () => {
  const address = "155A Prince Ade Odedina Street, Off Sinari Daranijo, Victoria Island 101244, Lagos, Nigeria"
  const encodedAddress = encodeURIComponent(address)
  
  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }
  
  const openInAppleMaps = () => {
    window.open(`https://maps.apple.com/?q=${encodedAddress}`, '_blank')
  }

  return (
    <div className="w-full p-6 bg-gray-50 rounded-lg border border-gray-200">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#00186B]">Our Location</h3>
        
        <div className="text-gray-700">
          <p className="font-medium">QLife Family Clinic</p>
          <p className="text-sm mt-1">
            155A Prince Ade Odedina Street,<br />
            Off Sinari Daranijo, Victoria Island 101244,<br />
            Lagos, Nigeria
          </p>
        </div>

        <div className="text-sm text-gray-600 bg-white p-3 rounded border-l-4 border-[#00186B]">
          <p className="font-medium text-gray-800 mb-1">Directions:</p>
          <p>
            Access Ajose Adeogun from Eko Hotel round about, make a second right turn onto 
            Younis Bashorun (by Haliburton after Zenith Bank HQ) then a second left unto 
            Sinari Daranijo. Prince Ade Odedina is the first street on the right.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <Button 
            onClick={openInGoogleMaps}
            className="bg-[#00186B] hover:bg-[#00186B]/90 text-white"
          >
            Open in Google Maps
          </Button>
          <Button 
            onClick={openInAppleMaps}
            variant="outline"
            className="border-[#00186B] text-[#00186B] hover:bg-[#00186B]/10"
          >
            Open in Apple Maps
          </Button>
        </div>
      </div>
    </div>
  )
}
