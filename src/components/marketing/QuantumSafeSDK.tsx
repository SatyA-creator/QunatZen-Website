// import { motion } from "framer-motion";
// import { Shield, Zap, Lock, Globe, CheckCircle, AlertTriangle } from "lucide-react";

// const QuantumSafeSDK = () => {
//   const features = [
//     {
//       icon: Zap,
//       title: "Instant Quantum Protection",
//       description: "With QuantZen™, any Dapp can become quantum‑proof in minutes while staying fully compatible with the L1/L2 irrespective of any EVM or NON-EVM chains.",
//       color: "blue",
//       highlight: "minutes"
//     },
//     {
//       icon: Lock,
//       title: "NIST-Approved Security",
//       description: "QuantZen™ Built on post-quantum cryptography (PQC), such as CRYSTALS-Dilithium and Kyber are NIST approved standards that protects wallets, dApps, bridges, CEX and custodians from Quantum attacks at the application level.",
//       color: "green",
//       highlight: "CRYSTALS-Dilithium"
//     },
//     {
//       icon: Shield,
//       title: "The Quantum Threat",
//       description: "Projects Built on classical cryptography like ECDSA, which Quantum computers will break by 2030.",
//       color: "red",
//       highlight: "2030"
//     },
//     {
//       icon: Globe,
//       title: "End-to-End Protection",
//       description: "QuantZen™ SDK doesn't just help you sign quantum-safe transactions  it ensures the entire flow: key generation, storage, backup, audit, transmission is quantum-proof end-to-end.",
//       color: "purple",
//       highlight: "end-to-end"
//     }
//   ];

//   const getColorClasses = (color: string) => {
//     const colors = {
//       blue: {
//         bg: "from-blue-50 to-blue-100/50",
//         border: "border-blue-200/60",
//         icon: "bg-blue-500/10 text-blue-600",
//         iconHover: "group-hover:bg-blue-500/20",
//         accent: "text-blue-600"
//       },
//       green: {
//         bg: "from-emerald-50 to-emerald-100/50",
//         border: "border-emerald-200/60", 
//         icon: "bg-emerald-500/10 text-emerald-600",
//         iconHover: "group-hover:bg-emerald-500/20",
//         accent: "text-emerald-600"
//       },
//       red: {
//         bg: "from-red-50 to-red-100/50",
//         border: "border-red-200/60",
//         icon: "bg-red-500/10 text-red-600", 
//         iconHover: "group-hover:bg-red-500/20",
//         accent: "text-red-600"
//       },
//       purple: {
//         bg: "from-purple-50 to-purple-100/50",
//         border: "border-purple-200/60",
//         icon: "bg-purple-500/10 text-purple-600",
//         iconHover: "group-hover:bg-purple-500/20", 
//         accent: "text-purple-600"
//       }
//     };
//     return colors[color as keyof typeof colors];
//   };

//   return (
//     <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-x-hidden w-full">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16 sm:mb-20"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8">
//             <span className="text-gradient">
//               QuantZen™
//             </span>{" "}
//             <span className="text-gray-900">Quantum-Safe SDK</span>
//           </h2>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6">
//             <div className="flex items-center gap-2">
//               <CheckCircle className="h-5 w-5 text-green-500" />
//               <span className="text-lg sm:text-xl font-semibold text-gray-700">Signing</span>
//             </div>
//             <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
//             <div className="flex items-center gap-2">
//               <CheckCircle className="h-5 w-5 text-green-500" />
//               <span className="text-lg sm:text-xl font-semibold text-gray-700">Encryption</span>
//             </div>
//             <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
//             <div className="flex items-center gap-2">
//               <CheckCircle className="h-5 w-5 text-green-500" />
//               <span className="text-lg sm:text-xl font-semibold text-gray-700">Audit</span>
//             </div>
//           </div>
//           <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
//             Securing Web3 Applications Against Quantum Attacks Without Changing the Base Protocol or Hard Forks
//           </p>
//         </motion.div>

//         {/* Feature Grid - Responsive Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
//           {features.map((feature, index) => {
//             const colorClasses = getColorClasses(feature.color);
//             return (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group h-full"
//               >
//                 <div className={`bg-gradient-to-br ${colorClasses.bg} backdrop-blur-sm border-2 ${colorClasses.border} rounded-3xl p-6 lg:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
//                   <div className="flex flex-col h-full">
//                     <div className="flex items-center justify-center mb-6">
//                       <div className={`p-4 ${colorClasses.icon} ${colorClasses.iconHover} rounded-2xl transition-all duration-300`}>
//                         <feature.icon className="h-8 w-8" />
//                       </div>
//                     </div>
                    
//                     <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 text-center leading-tight">
//                       {feature.title}
//                     </h3>
                    
//                     <p className="text-gray-700 text-base lg:text-lg leading-relaxed text-center flex-grow">
//                       {feature.description.split(feature.highlight).map((part, i) => (
//                         <span key={i}>
//                           {part}
//                           {i < feature.description.split(feature.highlight).length - 1 && (
//                             <strong className={colorClasses.accent}>{feature.highlight}</strong>
//                           )}
//                         </span>
//                       ))}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="text-center"
//         >
//           <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12 border-2 border-blue-200/50 shadow-xl max-w-4xl mx-auto">
//             <div className="flex items-center justify-center mb-6">
//               <div className="p-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full">
//                 <Shield className="h-8 w-8 text-white" />
//               </div>
//             </div>
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
//               Ready to Secure Your Web3 Application?
//             </h3>
//             <p className="text-gray-700 text-lg lg:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
//               Join the quantum-safe revolution and protect your users from tomorrow's threats today.
//             </p>
//             <div className="flex flex-wrap items-center justify-center gap-4 text-sm sm:text-base text-gray-600">
//               <div className="flex items-center gap-2">
//                 <CheckCircle className="h-4 w-4 text-green-500" />
//                 <span>No Protocol Changes</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <CheckCircle className="h-4 w-4 text-green-500" />
//                 <span>EVM Compatible</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <CheckCircle className="h-4 w-4 text-green-500" />
//                 <span>Production Ready</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default QuantumSafeSDK;