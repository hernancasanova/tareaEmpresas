import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CrearEmpresa from './CrearEmpresa';

const host = "http://localhost:8000/";

export default class Listado_empresas extends Component {

    constructor(props){
      super(props);
      this.state = {
        empresas:[]
      }
    }

    renderList(){

      return this.state.empresas.map((empresa,index)=>{
        return(
          <tr key={index}>
            <td>{empresa.nombre}</td>
            <td>{empresa.numero_trabajadores}</td>
            <td>{empresa.fecha_creacion}</td>
          </tr>
        )

      })

    }

    componentDidMount(){
      axios.get(host+'api/empresas/').then(response=>{console.log(response.data);
        this.setState({empresas:response.data.empresas})
      }).catch(error=>{
        alert("Error "+error)
      })
    }

    render() {
        return (
          <div className="container">
            <h3>Listado de empresas</h3>
            <hr/>
            <table className="table table-bordered order-table ">
              <thead>
                <tr>
                  <th>Nombre empresa</th>
                  <th>Numero de trabajadores</th>
                  <th>Fecha de creacion</th>
                </tr>
              </thead>
              <tbody id="bodytable">
                  {this.renderList()}
              </tbody>
            </table>
            <CrearEmpresa />
          </div>
        )
    }
}

if (document.getElementById('listado_empresas')) {
    ReactDOM.render(<Listado_empresas />, document.getElementById('listado_empresas'));
}