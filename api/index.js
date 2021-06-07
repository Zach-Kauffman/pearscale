const router = require('express').Router();

router.use('/pears', require('./pears'));
router.use('/reviews', require('./reviews'));
router.use('/slices', require('./slices'));
router.use('/users', require('./users'));
router.use('/photos', require('./photos'));


module.exports = router;


//         ████                                                
//           ██                                                
//           ████                                              
//             ██                                              
//             ▒▒▒▒▒▒                                          
//           ▒▒▒▒▒▒▒▒▒▒                                        
//         ▒▒▒▒▒▒▒▒▒▒▒▒                                        
//         ▒▒▒▒▒▒▒▒▒▒▒▒▒▒                                      
//         ▒▒▒▒▒▒▒▒▒▒▒▒▒▒                                      
//         ▒▒▒▒▒▒▒▒▒▒▒▒▒▒                                      
//         ▒▒▒▒▒▒▒▒▒▒▒▒▒▒                                      
//         ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                                    
//         ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒                                  
//       ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                                
//       ▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒                              
//     ▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒▒▒▒▒                              
//     ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒      ▒▒▒▒▒▒                            
//   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒  ▒▒  ▒▒▒▒                            
//   ▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒                            
//   ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒  ▒▒      ▒▒▒▒                            
//   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒  ▒▒▒▒▒▒                            
//   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒                            
//     ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                              
//       ▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒                                
//         ▒▒▒▒▒▒▒▒██▒▒▒▒▒▒                                    

