'use client'

import { motion } from 'framer-motion'
import styles from '../styles'
import { navVariants } from '../utils/motion'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/search.svg" alt="Search" className="w-6 h-6 object-contain" />
      <h2 className="font-extrabold text-2xl leading-[30px] text-white uppercase">
        Metaversus
      </h2>
      <img src="/menu.svg" alt="Menu" className="w-6 h-6 object-contain" />
    </div>
  </motion.nav>
)

export default Navbar
