import React from 'react'
import { motion } from 'framer-motion'

const Notification = () => {
    return (
        <motion.div 
            className='notification'
            initial={{ y: '-5vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
        >
            <p>You have nominated five films</p>
        </motion.div>
    )
}

export default Notification
