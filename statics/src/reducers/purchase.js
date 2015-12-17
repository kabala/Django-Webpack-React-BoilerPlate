import { normalize, Schema, arrayOf } from 'normalizr';
import omit from 'lodash/object/omit';  
import assign from 'lodash/object/assign';  
import mapValues from 'lodash/object/mapValues';


const initialState = {

  datos_entidad: {
    identificacion: '1716181050001',
    tipo_id: 'ruc',
    n_factura: '002-002-000030098'
  },

  tipo_comprobante: 'factura',

  fecha: '7-12-2015',

  lineas: [1],

  lineasById: {
      1: {
        id: '01',
        tipo_gasto: 'operativo',
        descripcion: 'definidos_por_alex',
        detalle: 'teclado_microsoft_bla_bla',
        cantidad: '3',
        v_unitario: '30',
        v_total: '90'
      }
  },

  totales: {base_0: '...', base_12: '...', base_extenta: '...', base_no_objeto: '...'},

  guardar_borrador: false

}


export default function purchase (state = initialState, action) {
  switch (action.type) {
    case types.ADD_LINE:
      const newLineId = state.lineas[state.lineas.length-1]+1
      return {
        ...state,
        lineas: state.lineas.concat(newLineId),
        lineasById: {
          ...state.lineasById,
          [newLineId]: {
            id: newLineId,
            tipo_gasto: 'nuevo',
            descripcion: 'nuevo',
            detalle: 'nuevo',
            cantidad: 'nuevo',
            v_unitario: 'nuevo',
            v_total: 'nuevo'
          }
        } 
      }

    default:
      return state
  }
}