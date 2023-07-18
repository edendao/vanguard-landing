import { HStack } from "@chakra-ui/react"
import { useDisclosure, useUpdateEffect } from "@chakra-ui/react"
import { MobileNavButton } from "components/mobile-nav"
import { MobileNavContent } from "components/mobile-nav"
import { NavLink } from "components/nav-link"
import siteConfig from "data/config"
import { useScrollSpy } from "hooks/use-scrollspy"
import { useRouter } from "next/router"
import * as React from "react"

import ThemeToggle from "./theme-toggle"

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure()
  const router = useRouter()
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ href }) => href.startsWith("#"))
      .map(({ href }) => `[id="${href.slice(1)}"]`),
    {
      threshold: 0.75,
    },
  )

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <HStack spacing="2" flexShrink={0}>
      {siteConfig.header.links.map(({ href, ...props }, i) => {
        return (
          <NavLink
            display={["none", null, "block"]}
            href={href}
            key={i}
            isActive={
              !!(
                (href.startsWith("#") && activeId === href.slice(1)) ||
                (href && !!router.asPath.match(new RegExp(href)))
              )
            }
            {...props}
          >
            {props.label}
          </NavLink>
        )
      })}

      <ThemeToggle />

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  )
}

export default Navigation
