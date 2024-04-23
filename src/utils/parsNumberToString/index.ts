const oneStrings = ['یک' , 'دو' , 'سه' ,'چهار' , 'پنج' ,'شیش' , 'هفت' ,'هشت' ,'نه']
const tenToTwenty = ['یازده' , 'دوازده' , 'سیزده' , 'چهارده' , 'پانزده' , 'شانزده' , 'هفده' , 'هجده' ,'نوزده' ]
const villagersStrings = ['ده' , 'بیست' , 'سی' , 'چهل' , 'پنجاه' , 'شصت' , 'هفتاد' , 'هشتاد' , 'نود']
export const parsNumberToString = (value : number) =>{
    let IntigertString = ''
    const villagers = Number(String(value / 10).split('.')[0])
    const oneNumber = value % 1 === 0 && value % 10 === 0 ? 0 : 0
    const fractional = Number(String(value).split('.')[1])
    if(villagers){
        console.log(oneNumber , villagers , fractional);
        if(villagers === 1 && oneNumber === 0){
         
            
            IntigertString = villagersStrings[0]
         
            
        }
        if(villagers > 0 && villagers < 2 && oneNumber > 0){
            IntigertString = tenToTwenty[oneNumber - 1]
        }
        if(villagers >= 2){
            if(oneNumber){

                IntigertString = villagersStrings[villagers - 1] + ' و ' + oneStrings[oneNumber - 1]
            }
            else {
                    IntigertString = villagersStrings[villagers - 1]
            }
            
        }
    }
    if(villagers === 0 && fractional === 0){
        IntigertString = oneStrings[oneNumber - 1]
    }
     if(fractional){
        const oneNumberFractional =  fractional % 10 === 0 ? 0 : Number(String(fractional / 10).split('.')[1])
        const villagersFractional = Number(String(fractional / 10).split('.')[0])
     
        if(villagersFractional){
            if(villagersFractional === 1 && oneNumberFractional === 0){
             
                
                IntigertString += ' ' + villagersStrings[0] + ' صدم'
             
                
            }
            if(villagersFractional > 0 && villagersFractional < 2 && oneNumberFractional > 0){
                IntigertString += " " + tenToTwenty[oneNumberFractional - 1] + " صدم "
            }
            if(villagersFractional >= 2){
                if(oneNumberFractional){
    
                    IntigertString += " " + villagersStrings[villagersFractional - 1] + ' و ' + oneStrings[oneNumberFractional - 1] + " صدم"
                }
                else {
                        IntigertString += " "  +  villagersStrings[villagers - 1] + ' صدم'
                }
                
            }
        }
        if(villagersFractional === 0){
            IntigertString += " " + oneStrings[oneNumberFractional - 1] + ' صدم'
        }
     }
    

    return IntigertString
}