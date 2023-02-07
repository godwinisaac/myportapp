import React from 'react';
import { motion } from 'framer-motion';


const Skils = () => {
  return (
    <motion.div
     initial={{opacity:0}}
     animate={{opacity:1, transition:{duration:0.5}}}
     className="w-full flex flex-col lgl:flex-row md:gap-10 lgl:gap-20">
                <div className="w-full lgl:w-[50%]">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-head tracking-[4px] uppercase">
                            Features
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Design Skill
                        </h2>
                    </div>
                    <div className="mt-14 w-full flex flex-col gap-6">
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Solidworks</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                    <motion.span
                                     initial={{x:"-100", opacity:0}}
                                     animate={{x: 0, opacity:1}}
                                     transition={{duration:0.5, delay:0.5}}
                                     className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className="absolute -top-7 right-0">100%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Auto CAD</p>
                                <motion.span
                                 initial={{x:"-100", opacity:0}}
                                 animate={{x: 0, opacity:1}}
                                 transition={{duration:0.5, delay:0.5}}
                                 className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <span className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className="absolute -top-7 right-0">90%</span>
                                </span>
                            </motion.span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">SketchUp</p>
                            <motion.span
                             initial={{x:"-100", opacity:0}}
                             animate={{x: 0, opacity:1}}
                             transition={{duration:0.5, delay:0.5}}
                             className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <span className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className="absolute -top-7 right-0">70%</span>
                                </span>
                            </motion.span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Adobe Illustrator</p>
                            <motion.span
                             initial={{x:"-100", opacity:0}}
                             animate={{x: 0, opacity:1}}
                             transition={{duration:0.5, delay:0.5}}
                             className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <span className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className="absolute -top-7 right-0">85%</span>
                                </span>
                            </motion.span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Autodesk Inventor</p>
                            <motion.span
                             initial={{x:"-100", opacity:0}}
                             animate={{x: 0, opacity:1}}
                             transition={{duration:0.5, delay:0.5}}
                             className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <span className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className="absolute -top-7 right-0">60%</span>
                                </span>
                            </motion.span>
                        </div>
                    </div>
                </div>
                <div className="w-full lgl:w-[50%]">
                    <div className="py-12 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-head tracking-[4px] uppercase">
                        Features
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Development Skill
                        </h2>
                    </div>
                    <div className="mt-14 w-full flex flex-col gap-6">
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Java Full Stack</p>
                            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                    <motion.span
                                     initial={{x:"-100", opacity:0}}
                                     animate={{x: 0, opacity:1}}
                                     transition={{duration:0.5, delay:0.5}}
                                     className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className="absolute -top-7 right-0">90%</span>
                                </motion.span>
                            </span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">React</p>
                                <motion.span
                                 initial={{x:"-100", opacity:0}}
                                 animate={{x: 0, opacity:1}}
                                 transition={{duration:0.5, delay:0.5}}
                                 className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <span className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className="absolute -top-7 right-0">90%</span>
                                </span>
                            </motion.span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Spring Boot</p>
                            <motion.span
                             initial={{x:"-100", opacity:0}}
                             animate={{x: 0, opacity:1}}
                             transition={{duration:0.5, delay:0.5}}
                             className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <span className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className="absolute -top-7 right-0">70%</span>
                                </span>
                            </motion.span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">TailwindCss</p>
                            <motion.span
                             initial={{x:"-100", opacity:0}}
                             animate={{x: 0, opacity:1}}
                             transition={{duration:0.5, delay:0.5}}
                             className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <span className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className="absolute -top-7 right-0">85%</span>
                                </span>
                            </motion.span>
                        </div>
                        <div className="overflow-x-hidden">
                            <p className="text-sm uppercase font-medium">Java Script</p>
                            <motion.span
                             initial={{x:"-100", opacity:0}}
                             animate={{x: 0, opacity:1}}
                             transition={{duration:0.5, delay:0.5}}
                             className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                                <span className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                    <span className="absolute -top-7 right-0">60%</span>
                                </span>
                            </motion.span>
                        </div>
                    </div>
                </div>
    </motion.div>
  );
}

export default Skils;
