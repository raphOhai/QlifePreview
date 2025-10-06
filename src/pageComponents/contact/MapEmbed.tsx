import React from 'react'

export const MapEmbed = () => {
  // Alternative: Use the generic embed without API key (less features but free)
  const genericMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7234567890123!2d3.4219!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMiJOIDPCsDI1JzE4LjgiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng`

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-200">
      <iframe
        src={genericMapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="QLife Family Clinic Location"
      />
    </div>
  )
}
