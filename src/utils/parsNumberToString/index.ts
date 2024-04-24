const oneStrings = ['یک' , 'دو' , 'سه' ,'چهار' , 'پنج' ,'شیش' , 'هفت' ,'هشت' ,'نه']
const tenToTwenty = ['یازده' , 'دوازده' , 'سیزده' , 'چهارده' , 'پانزده' , 'شانزده' , 'هفده' , 'هجده' ,'نوزده' ]
const villagersStrings = ['ده' , 'بیست' , 'سی' , 'چهل' , 'پنجاه' , 'شصت' , 'هفتاد' , 'هشتاد' , 'نود']
function toCommas(value : number) {
    return value.toString().replace(/\B(?=(\d{1})+(?!\d))/g, ".");
}
export const parsNumberToString = (value : number) =>{
    if(value === 0) return 'صفر'
    let IntigertString = ''
    const spliteNumber = toCommas(value).split('.')
    const lengthNumber = String(Math.floor(value)).length
    const villagers = lengthNumber >= 2 && Number(spliteNumber[0]) || 0
    const fractional = lengthNumber === 1 && Number(spliteNumber[1]) || +spliteNumber[2]
    const oneNumber = villagers ? Number(spliteNumber[1]) : Number(spliteNumber[0]) 
    
    console.log(spliteNumber , oneNumber , lengthNumber);
    
    
 
    
    if(villagers){
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
    if(villagers === 0 ){
        console.log('ok');
        
        IntigertString = oneStrings[oneNumber - 1]
    }
     if(fractional){
        const oneNumberFractional =  fractional % 10 === 0 ? 0 : Number(String(fractional / 10).split('.')[1])
        const villagersFractional = Number(String(fractional / 10).split('.')[0])
     
        if(villagersFractional){
            if(villagersFractional === 1 && oneNumberFractional === 0){
             
                
                IntigertString += ' و ' + villagersStrings[0] + ' صدم'
             
                
            }
            if(villagersFractional > 0 && villagersFractional < 2 && oneNumberFractional > 0){
                IntigertString += " و " + tenToTwenty[oneNumberFractional - 1] + " صدم "
            }
            if(villagersFractional >= 2){
                if(oneNumberFractional){
    
                    IntigertString += " و " + villagersStrings[villagersFractional - 1] + ' و ' + oneStrings[oneNumberFractional - 1] + " صدم"
                }
                else {
                        IntigertString += " و "  +  villagersStrings[villagers - 1] + ' صدم'
                }
                
            }
        }
        if(villagersFractional === 0){
            IntigertString += " و " + oneStrings[oneNumberFractional - 1] + ' صدم'
        }
     }
    

    return IntigertString
}