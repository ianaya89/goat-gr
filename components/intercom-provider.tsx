"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    Intercom: any
    intercomSettings: any
  }
}

export default function IntercomProvider() {
  useEffect(() => {
    // Inicializar Intercom
    window.intercomSettings = {
      app_id: "dwfw29ir",
    }

    // Cargar el script de Intercom
    ;(() => {
      var w = window
      var ic = w.Intercom
      if (typeof ic === "function") {
        ic("reattach_activator")
        ic("update", w.intercomSettings)
      } else {
        var d = document
        var i = () => {
          i.c(arguments)
        }
        i.q = []
        i.c = (args) => {
          i.q.push(args)
        }
        w.Intercom = i
        var l = () => {
          var s = d.createElement("script")
          s.type = "text/javascript"
          s.async = true
          s.src = "https://widget.intercom.io/widget/" + w.intercomSettings.app_id
          var x = d.getElementsByTagName("script")[0]
          x.parentNode?.insertBefore(s, x)
        }
        if (document.readyState === "complete") {
          l()
        } else if (w.attachEvent) {
          w.attachEvent("onload", l)
        } else {
          w.addEventListener("load", l, false)
        }
      }
    })()

    // Limpiar cuando el componente se desmonte
    return () => {
      if (window.Intercom) {
        window.Intercom("shutdown")
        delete window.Intercom
        delete window.intercomSettings
      }
    }
  }, [])

  return null
}
