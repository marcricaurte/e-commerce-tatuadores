export const Inkersubmenu=[
    {
        tittle: "CAMILO RÍOS TORRES",
        url: "/inkers/1"

    },

    {
        tittle: "PAULA GARCÍA ESTRADA",
        url: "/inkers/1"

    },

    {
        tittle: "ALFONSO CAÍN PERÉZ",
        url: "/inkers/1"

    },

    {
        tittle: "ESTEBAN PARDO GARCÍA",
        url: "/inkers/1"

    },
]
export const schedulesubmenu=[

    {
        tittle: "AGENDAR CITA",
        url: "/schedule/create"

    },

    {
        tittle: "MODIFICAR CITA",
        url: "/schedule/edit"

    },


    {
        tittle: "CANCELAR CITA",
        url: "/schedule/cancel"

    },


]
export const submenus =[

    {
        title: 'HOME',
        url: '/ ',
    },

    {
        title: "TATUDORES",
        url: "/Inkers",
        submenu: [...Inkersubmenu]
      },
    
      {
        title: "PORTAFOLIO",
        url: "/Portafolio",
      },
    
      {
       title: "CONTÁCTENOS",
        url: "/Conctact",
      },
    
      {
        title: "CITA",
        url: "/Schedule",
        submenu: [...schedulesubmenu]
      },


]