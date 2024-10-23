import { useState, useEffect } from "react"


export default function AllCombos({ gameFrames, lastFrameObject }){

    const numberOfCombos = lastFrameObject.combo_block_for_model

    
    const comboBlocks = []


    for (let i = 0; i < numberOfCombos; i++) {
        comboBlocks.push([])
    }
    
    // gameFrames.array.forEach(frame => {
    //     comboBlocks[frame.combo_block_for_model].push(frame)
    // });

    console.log(comboBlocks)
    return(
        <h1>{numberOfCombos}</h1>
    )
}