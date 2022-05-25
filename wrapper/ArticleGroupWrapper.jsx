import React from 'react'
import { motion } from 'framer-motion';

const ArticleGroupWrapper = (Component, classNames) => ({ ...props }) => (
    <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.6 }}
        className={`${classNames}`}>
        <Component {...props} />
    </motion.div>
)
export default ArticleGroupWrapper