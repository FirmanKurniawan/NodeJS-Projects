const triangle = (n) => {
    let x = []
    let y = []
  
    for(let j = n; j > 0; j--){
      for(let i = 0; i < j; i++){
        x.push('*')
      }
      console.log(x.join(''))
      x = []
    }
  
    for(let j = 1; j < n; j++){
      for(let i = -1; i < j; i++){
        y.push('*')
      }
      console.log(y.join(''))
      y = []
    }
  }
  
  triangle(10)