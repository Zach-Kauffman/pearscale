const router = require('express').Router();

router.use('/reviews', require('./reviews'));
router.use('/slices', require('./slices'));
router.use('/users', require('./users'));
router.use('/media', require('./media'));

module.exports = router;

router.get('/', async (req, res) => {
    console.log("== Got request for homepage...");
});

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

