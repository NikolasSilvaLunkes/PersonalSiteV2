import {Circles} from './circles'



export const Background = () => {
  return (
      <div className="area">
            {Array.apply(0, Array(1)).map(function (x, i) {
               return <Circles/>;
            })}
     </div>
  )
}


