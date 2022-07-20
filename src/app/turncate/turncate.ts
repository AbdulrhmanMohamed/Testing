export const turncate=(name:string,number:number)=>{

    const turnSymbol='*'.repeat(number)

    console.log('turncate',name.concat(turnSymbol))

}

turncate('Abdurlhman',5)