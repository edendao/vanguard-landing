import { Button } from "@chakra-ui/react"
import { Link } from "@saas-ui/react"
import { NextSeoProps } from "next-seo"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { FiCheck } from "react-icons/fi"

import { Logo } from "./logo"

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Vanguard Earth",
    description: "Where the future begins",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        href: "#features",
        label: "Features",
      },
      {
        href: "#pricing",
        label: "Pricing",
      },
      {
        href: "#faq",
        label: "FAQ",
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by <Link href="https://twitter.com/TheEdenDao">@TheEdenDao</Link>
      </>
    ),
    links: [
      {
        href: "mailto:hello@edendaolab.com",
        label: "Contact",
      },
      {
        href: "https://twitter.com/TheEdenDao",
        label: <FaTwitter size="14" />,
      },
      {
        href: "https://github.com/edendao",
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: "Start building with Saas UI",
    features: [
      // {
      //   icon: FiCheck,
      //   title: "Accessible",
      //   description: "All components strictly follow WAI-ARIA standards.",
      // },
      // {
      //   icon: FiCheck,
      //   title: "Themable",
      //   description:
      //     "Fully customize all components to your brand with theme support and style props.",
      // },
      // {
      //   icon: FiCheck,
      //   title: "Composable",
      //   description:
      //     "Compose components to fit your needs and mix them together to create new ones.",
      // },
      // {
      //   icon: FiCheck,
      //   title: "Productive",
      //   description:
      //     "Designed to reduce boilerplate and fully typed, build your product at speed.",
      // },
    ],
  },
}

export default siteConfig
