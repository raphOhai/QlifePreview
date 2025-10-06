'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export const Header = () => {
  useEffect(() => {
    // Dynamic imports to avoid SSR issues
    const initAnimations = async () => {
      if (typeof window === 'undefined') return;
      
      const [{ split }, { animate, reset, textAnimate }] = await Promise.all([
        import('../../Animations/split'),
        import('../../Animations/main')
      ]);

      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
          // Initialize text splitting
          split();

          // Start animations with a small delay after splitting
          setTimeout(() => {
              animate();
              textAnimate();
          }, 100);
      }, 100);

      // Cleanup function
      return () => {
          clearTimeout(timer);
          reset();
      };
    };

    let cleanup: (() => void) | undefined;
    initAnimations().then((cleanupFn) => {
      cleanup = cleanupFn;
    }).catch(() => {
      // Fallback: Show elements if animation loading fails
      import('../../Animations/main').then(({ showAnimationElements }) => {
        showAnimationElements();
      });
    });

    // Fallback timeout: Show elements if animations don't load within 2 seconds
    const fallbackTimer = setTimeout(() => {
      import('../../Animations/main').then(({ showAnimationElements }) => {
        showAnimationElements();
      });
    }, 2000);

    // Cleanup on unmount
    return () => {
      clearTimeout(fallbackTimer);
      if (cleanup) cleanup();
    };
  }, []);         
  return (
    <div className='flex flex-col relative z-50'>
      <Banner />
      <MainHeader />
    </div>

  )
}


const Banner = () => {
  return (
    <div className='bg-primary p-2 md:p-4 text-white text-center'>
      <div className='max-w-[1920px] mx-auto'>
        <h1 className='text-white text-center text-xs md:text-sm lg:text-base'>
          Our culture begins with &apos;our people&apos; and the need to encourage people to promote and adopt a healthy lifestyle
        </h1>
      </div>
    </div>
  )
}




export const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [servicesOpen, setServicesOpen] = React.useState(false)
  const [bookingOpen, setBookingOpen] = React.useState(false)

  return (
    <div className="p-3 md:p-4">
      <div className="max-w-[1920px] mx-auto">
        {/* Desktop & Mobile Header */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Image src="/logo.svg" alt="Qlife" width={84} height={29} className='w-16 h-auto md:w-[84px]' />
          </div>
          
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center'>
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/about">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem href="/services" title="All Services">
                        Explore our comprehensive range of healthcare services
                      </ListItem>
                      <ListItem href="/services/generalclinic" title="General Clinic">
                        Primary care and routine health check-ups
                      </ListItem>
                      <ListItem href="/services/travelclinic" title="Travel Clinic">
                        Vaccinations and travel health consultations
                      </ListItem>
                      <ListItem href="/services/wellnessclinic" title="Wellness Clinic">
                        Preventive care and wellness programs
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/eQonsult">eQonsult</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Booking</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4">
                      <ListItem href="/booking" title="Book Screening">
                        Schedule your health screening appointment
                      </ListItem>
                      <ListItem href="/apointments" title="Appointments">
                        Manage your existing appointments
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/team">Team</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/careers">Careers</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Buttons */}
          <div className='hidden lg:flex gap-3 xl:gap-5 items-center'>
            <Button variant='link' className='text-black text-sm xl:text-base' asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant='outline' className='border-primary text-primary px-4 py-2 xl:p-[25px] rounded-[30px] text-xs xl:text-sm whitespace-nowrap' asChild>
              <Link href="/booking">Book an Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className='lg:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className='pb-4 border-t pt-4'>
            <div className='flex flex-col gap-4'>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className='hover:text-primary transition-colors'>About</Link>
              
              <div className='flex flex-col gap-2'>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className='flex items-center justify-between hover:text-primary transition-colors text-left'
                >
                  <span className='font-medium'>Services</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    servicesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='flex flex-col gap-2 pl-4 pt-2'>
                    <Link href="/services" onClick={() => setIsMenuOpen(false)} className='hover:text-primary transition-colors'>All Services</Link>
                    <Link href="/services/generalclinic" onClick={() => setIsMenuOpen(false)} className='hover:text-primary transition-colors'>General Clinic</Link>
                    <Link href="/services/travelclinic" onClick={() => setIsMenuOpen(false)} className='hover:text-primary transition-colors'>Travel Clinic</Link>
                    <Link href="/services/wellnessclinic" onClick={() => setIsMenuOpen(false)} className='hover:text-primary transition-colors'>Wellness Clinic</Link>
                  </div>
                </div>
              </div>

              <Link href="/eQonsult" onClick={() => setIsMenuOpen(false)} className='hover:text-primary transition-colors'>eQonsult</Link>
              
              <div className='flex flex-col gap-2'>
                <button 
                  onClick={() => setBookingOpen(!bookingOpen)}
                  className='flex items-center justify-between hover:text-primary transition-colors text-left'
                >
                  <span className='font-medium'>Booking</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${bookingOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    bookingOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='flex flex-col gap-2 pl-4 pt-2'>
                    <Link href="/booking" onClick={() => setIsMenuOpen(false)} className='hover:text-primary transition-colors'>Book Screening</Link>
                    <Link href="/apointments" onClick={() => setIsMenuOpen(false)} className='hover:text-primary transition-colors'>Appointments</Link>
                  </div>
                </div>
              </div>

              <Link href="/team" onClick={() => setIsMenuOpen(false)} className='hover:text-primary transition-colors'>Team</Link>
              <Link href="/careers" onClick={() => setIsMenuOpen(false)} className='hover:text-primary transition-colors'>Careers</Link>
              
              <Button variant='link' className='text-black justify-start p-0' asChild>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              </Button>
              <Button variant='outline' className='border-primary text-primary py-3 rounded-[30px]' asChild>
                <Link href="/booking" onClick={() => setIsMenuOpen(false)}>Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ListItem component for navigation menu
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
