import React, { useEffect } from "react"

const Moto = () => {

  const ref = React.createRef()

  useEffect(() => {
    ref.current.click()

    window.location.href = "/pe/conductor/"
  }, [])

  return (
    <div>
      <a download href="/pe/PE_Supply_Moto_Recomendaciones_de_seguridad_vial.pdf" ref={ref}>
        <h1>Downlaoding...</h1>
      </a>
    </div>
  )
}


export default Moto