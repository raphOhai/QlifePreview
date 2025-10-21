import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FooterArt2 } from '../pageComponents/svgs/footerArt2'


export const Footer = () => {
  return (
    <div className='bg-[#00186B] text-white pt-12 md:pt-20 lg:pt-[120px] relative' >
      <div className='max-w-[1920px] mx-auto flex flex-col gap-8 md:gap-30'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 p-4 md:p-[20px]'>
          <div className='md:col-span-6'>
            <div className='flex flex-col gap-3'>
              <Image src="/qlife.webp" alt="Qlife" width={84} height={29} />
              <p className='text-sm md:text-base'>
                A personalised approach to healthcare for you & yours, from us.
              </p>
            </div>
          </div>
          <div className='md:col-span-6'>
            <LinksStack />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4'>
          <div className='md:col-span-6 hidden md:block'>
            <div className='relative px-6 md:px-[48px] py-12 md:py-[96px] h-[300px] md:h-[400px]'>
              <div className='absolute bottom-10 md:bottom-30 left-0'>
                <FooterArt2 />
              </div>
            </div>
          </div>

          <div className='md:col-span-6 px-4 md:px-0'>
            <LinkStack />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-12 mt-10 md:grid-cols-12 gap-4 bg-[#fff16f] px-4 md:px-[48px] py-4 md:py-[24px]'>
        <div className='col-span-6'>
          <p className='text-xs md:text-[16px] font-weight-[400] leading-[20px] md:leading-[24px] text-[#00186B]'>
            © 2025 Q-Life Family Clinic.
          </p>
        </div>
        <div className='col-span-6 flex justify-start md:justify-end'>
          <div className='flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center'>
            <p className='text-xs md:text-[16px] font-weight-[400] leading-[20px] md:leading-[24px] text-[#00186B]'>
              Terms and Conditions
            </p>
            <p className='text-xs md:text-[16px] font-weight-[400] leading-[20px] md:leading-[24px] text-[#00186B]'>
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ef4fefefe
const LinkStack = () => {
  const facebook = (<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 2.4375C10.9109 2.4375 8.86879 3.05698 7.13179 4.2176C5.3948 5.37822 4.04098 7.02786 3.24153 8.95791C2.44208 10.888 2.2329 13.0117 2.64046 15.0606C3.04802 17.1096 4.054 18.9916 5.53119 20.4688C7.00838 21.946 8.89044 22.952 10.9394 23.3595C12.9883 23.7671 15.1121 23.5579 17.0421 22.7585C18.9721 21.959 20.6218 20.6052 21.7824 18.8682C22.943 17.1312 23.5625 15.0891 23.5625 13C23.5595 10.1996 22.4458 7.51466 20.4656 5.53445C18.4853 3.55424 15.8004 2.44046 13 2.4375ZM13.8125 21.8999V15.4375H16.25C16.4655 15.4375 16.6722 15.3519 16.8245 15.1995C16.9769 15.0472 17.0625 14.8405 17.0625 14.625C17.0625 14.4095 16.9769 14.2028 16.8245 14.0505C16.6722 13.8981 16.4655 13.8125 16.25 13.8125H13.8125V11.375C13.8125 10.944 13.9837 10.5307 14.2885 10.226C14.5932 9.92121 15.0065 9.75 15.4375 9.75H17.0625C17.278 9.75 17.4847 9.6644 17.637 9.51202C17.7894 9.35965 17.875 9.15299 17.875 8.9375C17.875 8.72201 17.7894 8.51535 17.637 8.36298C17.4847 8.2106 17.278 8.125 17.0625 8.125H15.4375C14.5756 8.125 13.7489 8.46741 13.1394 9.0769C12.5299 9.6864 12.1875 10.513 12.1875 11.375V13.8125H9.75001C9.53452 13.8125 9.32785 13.8981 9.17548 14.0505C9.02311 14.2028 8.93751 14.4095 8.93751 14.625C8.93751 14.8405 9.02311 15.0472 9.17548 15.1995C9.32785 15.3519 9.53452 15.4375 9.75001 15.4375H12.1875V21.8999C9.89706 21.6908 7.77539 20.6068 6.26381 18.8733C4.75223 17.1398 3.96711 14.8903 4.07176 12.5928C4.17641 10.2952 5.16278 8.12637 6.82569 6.53748C8.4886 4.94859 10.7 4.06193 13 4.06193C15.3 4.06193 17.5114 4.94859 19.1743 6.53748C20.8372 8.12637 21.8236 10.2952 21.9282 12.5928C22.0329 14.8903 21.2478 17.1398 19.7362 18.8733C18.2246 20.6068 16.1029 21.6908 13.8125 21.8999Z" fill="#F8F4EB" />
  </svg>)

  const instagram = (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 6.125C10.0358 6.125 9.09328 6.41091 8.29159 6.94659C7.48991 7.48226 6.86506 8.24363 6.49609 9.13442C6.12711 10.0252 6.03057 11.0054 6.21867 11.9511C6.40677 12.8967 6.87107 13.7654 7.55285 14.4471C8.23464 15.1289 9.10328 15.5932 10.0489 15.7813C10.9946 15.9694 11.9748 15.8729 12.8656 15.5039C13.7564 15.1349 14.5177 14.5101 15.0534 13.7084C15.5891 12.9067 15.875 11.9642 15.875 11C15.8737 9.70748 15.3596 8.46829 14.4457 7.55434C13.5317 6.64039 12.2925 6.12634 11 6.125ZM11 14.25C10.3572 14.25 9.72886 14.0594 9.1944 13.7023C8.65994 13.3452 8.24338 12.8376 7.99739 12.2437C7.75141 11.6499 7.68705 10.9964 7.81245 10.366C7.93785 9.73552 8.24738 9.15642 8.7019 8.7019C9.15642 8.24738 9.73552 7.93785 10.366 7.81245C10.9964 7.68705 11.6499 7.75141 12.2437 7.99739C12.8376 8.24338 13.3452 8.65994 13.7023 9.1944C14.0594 9.72886 14.25 10.3572 14.25 11C14.25 11.862 13.9076 12.6886 13.2981 13.2981C12.6886 13.9076 11.862 14.25 11 14.25ZM15.875 0.4375H6.125C4.61708 0.439113 3.17138 1.03885 2.10511 2.10511C1.03885 3.17138 0.439113 4.61708 0.4375 6.125V15.875C0.439113 17.3829 1.03885 18.8286 2.10511 19.8949C3.17138 20.9612 4.61708 21.5609 6.125 21.5625H15.875C17.3829 21.5609 18.8286 20.9612 19.8949 19.8949C20.9612 18.8286 21.5609 17.3829 21.5625 15.875V6.125C21.5609 4.61708 20.9612 3.17138 19.8949 2.10511C18.8286 1.03885 17.3829 0.439113 15.875 0.4375ZM19.9375 15.875C19.9375 16.9524 19.5095 17.9858 18.7476 18.7476C17.9858 19.5095 16.9524 19.9375 15.875 19.9375H6.125C5.04756 19.9375 4.01425 19.5095 3.25238 18.7476C2.49051 17.9858 2.0625 16.9524 2.0625 15.875V6.125C2.0625 5.04756 2.49051 4.01425 3.25238 3.25238C4.01425 2.49051 5.04756 2.0625 6.125 2.0625H15.875C16.9524 2.0625 17.9858 2.49051 18.7476 3.25238C19.5095 4.01425 19.9375 5.04756 19.9375 6.125V15.875ZM17.5 5.71875C17.5 5.9598 17.4285 6.19543 17.2946 6.39585C17.1607 6.59627 16.9703 6.75248 16.7476 6.84473C16.5249 6.93697 16.2799 6.96111 16.0435 6.91408C15.8071 6.86706 15.5899 6.75098 15.4195 6.58054C15.249 6.41009 15.1329 6.19293 15.0859 5.95652C15.0389 5.7201 15.063 5.47505 15.1553 5.25235C15.2475 5.02966 15.4037 4.83931 15.6041 4.7054C15.8046 4.57148 16.0402 4.5 16.2812 4.5C16.6045 4.5 16.9145 4.6284 17.143 4.85696C17.3716 5.08552 17.5 5.39552 17.5 5.71875Z" fill="#F8F4EB" />
  </svg>)

  const treads = (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
    <path d="M14.9333 10.5582C14.5807 10.2928 14.2019 10.0641 13.8029 9.8757C13.3966 6.84 11.3654 5.88328 10.4412 5.60297C8.43227 4.99359 6.12375 5.72383 5.07359 7.29906C5.01438 7.38789 4.97323 7.48751 4.95252 7.59224C4.9318 7.69696 4.93191 7.80475 4.95285 7.90943C4.99513 8.12085 5.11967 8.30681 5.29906 8.42641C5.47846 8.546 5.69801 8.58944 5.90943 8.54715C6.01411 8.52622 6.11365 8.48487 6.20235 8.42546C6.29105 8.36606 6.36719 8.28976 6.42641 8.20094C7.07336 7.23 8.66078 6.76281 9.96992 7.15789C10.9805 7.46258 11.6782 8.20398 12.0164 9.2907C11.5045 9.19325 10.9846 9.14462 10.4635 9.14547C9.04977 9.14547 7.72641 9.51008 6.73922 10.1712C5.57734 10.9563 4.9375 12.1172 4.9375 13.4375C4.9375 15.5277 6.54828 17.045 8.76742 17.045C9.42 17.0406 10.065 16.9051 10.6643 16.6468C11.2636 16.3884 11.8049 16.0123 12.2561 15.5409C12.9102 14.8604 13.678 13.6762 13.8415 11.7729C13.8801 11.7993 13.9166 11.8267 13.9532 11.8541C14.98 12.6301 15.5 13.7097 15.5 15.0625C15.5 17.0287 13.4342 19.9375 9 19.9375C6.28523 19.9375 4.38094 19.059 3.17641 17.2522C2.1882 15.7734 1.6875 13.667 1.6875 11C1.6875 8.33297 2.1882 6.22656 3.17641 4.74781C4.38094 2.94102 6.28523 2.0625 9 2.0625C12.3445 2.0625 14.4844 3.4082 15.5538 6.17781C15.5913 6.27853 15.6484 6.37081 15.7218 6.44931C15.7952 6.52781 15.8835 6.59097 15.9814 6.63512C16.0794 6.67928 16.1852 6.70356 16.2926 6.70656C16.4001 6.70956 16.507 6.69121 16.6073 6.65259C16.7076 6.61396 16.7992 6.55583 16.8769 6.48154C16.9545 6.40726 17.0167 6.31831 17.0598 6.21984C17.1028 6.12136 17.1259 6.01533 17.1277 5.90787C17.1295 5.80042 17.1099 5.69368 17.0702 5.59383C15.7722 2.22094 12.9812 0.4375 9 0.4375C5.75 0.4375 3.3318 1.58414 1.82359 3.84594C0.654609 5.59992 0.0625 8.00594 0.0625 11C0.0625 13.9941 0.654609 16.4001 1.82359 18.1541C3.3318 20.4159 5.75 21.5625 9 21.5625C12.054 21.5625 13.9664 20.3966 15.0328 19.4195C16.343 18.2191 17.125 16.5859 17.125 15.0625C17.125 13.1998 16.3673 11.6419 14.9333 10.5582ZM11.0851 14.4176C10.7857 14.7317 10.4263 14.9825 10.0282 15.1552C9.63006 15.3279 9.20135 15.419 8.76742 15.423C7.66953 15.423 6.5625 14.8137 6.5625 13.4405C6.5625 12.1578 7.78125 10.7786 10.4635 10.7786C11.0675 10.777 11.6688 10.8597 12.25 11.0244C12.25 12.4544 11.8438 13.6264 11.0851 14.4145V14.4176Z" fill="#F8F4EB" />
  </svg>)

  const twitter = (<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M21.8108 21.5018L15.4529 11.5101L21.7265 4.60891C21.8683 4.44897 21.9415 4.23955 21.93 4.02606C21.9185 3.81257 21.8233 3.61221 21.6651 3.46842C21.5069 3.32462 21.2984 3.24899 21.0847 3.25792C20.8711 3.26684 20.6696 3.3596 20.524 3.51609L14.548 10.0892L10.4358 3.6268C10.3624 3.51138 10.2611 3.41633 10.1413 3.35046C10.0215 3.2846 9.88695 3.25004 9.7502 3.25H4.8752C4.72952 3.24993 4.5865 3.28903 4.46112 3.3632C4.33574 3.43738 4.2326 3.5439 4.16252 3.67161C4.09243 3.79932 4.05797 3.94353 4.06275 4.08913C4.06752 4.23473 4.11135 4.37637 4.18966 4.49922L10.5475 14.4899L4.27395 21.3962C4.20069 21.4749 4.14378 21.5673 4.10652 21.6682C4.06925 21.769 4.05237 21.8763 4.05686 21.9837C4.06135 22.0911 4.08711 22.1966 4.13266 22.294C4.17821 22.3914 4.24264 22.4788 4.32221 22.5511C4.40178 22.6234 4.49491 22.6792 4.5962 22.7152C4.69749 22.7513 4.80494 22.7669 4.9123 22.7611C5.01966 22.7553 5.12481 22.7283 5.22165 22.6816C5.3185 22.6349 5.4051 22.5694 5.47645 22.489L11.4524 15.9159L15.5647 22.3783C15.6386 22.4928 15.7401 22.5868 15.8599 22.6518C15.9797 22.7167 16.1139 22.7505 16.2502 22.75H21.1252C21.2707 22.75 21.4136 22.7108 21.5388 22.6367C21.664 22.5626 21.7671 22.4562 21.8371 22.3286C21.9072 22.2011 21.9417 22.0571 21.937 21.9116C21.9324 21.7662 21.8888 21.6246 21.8108 21.5018ZM16.6961 21.125L6.35497 4.875H9.30028L19.6454 21.125H16.6961Z" fill="#F8F4EB" />
  </svg>)

  const socialLinks = [
    {
      icon: facebook,
      href: "https://www.facebook.com/qlifefamilyclinic"
    },

    {
      icon: instagram,
      href: "https://www.instagram.com/qlifefamilyclinic"
    },

    {
      icon: treads,
      href: "https://www.instagram.com/qlifefamilyclinic"
    },

    {
      icon: twitter,
      href: "https://www.instagram.com/qlifefamilyclinic"
    },
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4'>
      <div className='md:col-span-6 flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <p className='text-sm md:text-[16px]'>
          155 Prince Ade Odedina Street,
          </p>
          <p className='text-sm md:text-[16px]'>
            Victoria Island 101244, Lagos.
          </p>
        </div>
        <p className='text-sm md:text-[16px]'>
          234 (0)809 974 2000
        </p>
        <p className='text-sm md:text-[16px]'>
          customercare@qlifefamilyclinic.com
        </p>
      </div>

      <div className='md:col-span-6'>
        <div className='flex flex-row gap-3 md:gap-4 items-center'>
          {socialLinks.map((link) => (
            <Link href={link.href} key={link.href} className='scale-75 md:scale-100'>
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

const LinksStack = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-4'>
      <div className='md:col-span-4 flex flex-col gap-2 md:gap-3'>
        <h3 className='text-base md:text-lg font-medium'>
          Company
        </h3>
        <div className='flex flex-col gap-1'>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>About</Link>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>People</Link>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>Careers</Link>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>Blog</Link>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>Contact Us</Link>
        </div>
      </div>
      <div className='md:col-span-4 flex flex-col gap-2 md:gap-3'>
        <h3 className='text-base md:text-lg font-medium'>
          Services
        </h3>
        <div className='flex flex-col gap-1'>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>QLife General Clinic</Link>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>QLife Travel Clinic</Link>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>QLife Wellness Clinic</Link>
        </div>
      </div>
      <div className='md:col-span-4 flex flex-col gap-2 md:gap-3 col-span-2 md:col-span-4'>
        <h3 className='text-base md:text-lg font-medium'>
          Health Screening
        </h3>
        <div className='flex flex-col gap-1'>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>Canada</Link>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>United Kingdom</Link>
          <Link href="/" className='text-sm md:text-[16px] hover:underline'>United States</Link>
        </div>
      </div>
    </div>
  )
}    