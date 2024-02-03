import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from '@react-jvectormap/world'
import React from 'react'
import './worldmap.css'
import {data}  from './data'
import {colorScale} from './data'

export default function WorldMap() {
  return (
        <div className='mapparent'>
    <VectorMap map={worldMill}  className='container' series={{
        regions:data.map(item=>({
            scale:colorScale,
            values:{[item.region]:item.data},
            min:0,
            max:100
        }))}}
        onRegionTipShow={function reginalTip(event,label,code){
            const regionData = data.find(item => item.region === code);
            console.log(regionData);

            if (regionData) {
              return label.html(`
                <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white; padding-left: 10px;">
                  <p><b>${label.html()}</b></p>
                  <p>Data: ${regionData.data}</p>
                </div>
              `);
            } else {
              return label.html(`
                <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white; padding-left: 10px;">
                  <p><b>${label.html()}</b></p>
                </div>
              `);
            }
        }}
        />
        </div>
  )
}
