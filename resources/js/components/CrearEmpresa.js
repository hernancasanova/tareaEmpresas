import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const axios = require('axios');
const host = "http://localhost:8000/";

export default class CrearEmpresa extends Component {
    constructor(props){
      super(props);
      this.handleChangeNombre = this.handleChangeNombre.bind(this);
      this.handleChangeNumeroTrabajadores  = this.handleChangeNumeroTrabajadores.bind(this);
      this.handleChangeFechaCreacion  = this.handleChangeFechaCreacion.bind(this);
      this.state = {
        NombreEmpresa:'',
        NumeroTrabajadores:'',
        FechaCreacion:''
      }
    }

    //funciones para cambiar el estado de la aplicacion
    handleChangeNombre(event) {
      //la funcion setState cambia el estado de la aplicacion
      this.setState({NombreEmpresa: event.target.value});
    }

    handleChangeNumeroTrabajadores(event) {
      this.setState({NumeroTrabajadores: event.target.value});
    }

    handleChangeFechaCreacion(event) {
      this.setState({FechaCreacion: event.target.value});
    }

    //funcion para crear empresas
    crearEmpresa(){
      const formData = new FormData()
      formData.append('nombre',this.state.NombreEmpresa)
      formData.append('numero_trabajadores',this.state.NumeroTrabajadores)
      formData.append('fecha_creacion',this.state.FechaCreacion)
      axios.post(host+'api/empresas',formData).then(response=>{
           if (response.data.status_code==200) {
                alert('Empresa creada correctamente');
                //ocultar modal
                $("#exampleModal").modal("hide");
           }else{
           		alert('No se pudo crear la empresa');
           }
       });
    }


    render() {
        return (
          <div>
            <button type="button" className="btn btn-primary col-md-4" data-toggle="modal" data-target="#exampleModal">
                Crear empresa
            </button>
            <form>
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Formulario de ingreso de empresas</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                       <label htmlFor="exampleInputEmail1">Nombre de empresa </label>
                       <input type="text" className="form-control" value={this.state.NombreEmpresa} onChange={this.handleChangeNombre} required />
                      </div>
                      <div className="form-group">
                       <label htmlFor="exampleInputEmail1">Numero de trabajadores</label>
                       <input type="number" className="form-control" value={this.state.NumeroTrabajadores} onChange={this.handleChangeNumeroTrabajadores} />
                      </div>
                      <div className="form-group">
                       <label htmlFor="exampleInputEmail1">Fecha de creacion</label>
                       <input type="date" className="form-control" value={this.state.FechaCreacion} onChange={this.handleChangeFechaCreacion} />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-primary" onClick={()=>this.crearEmpresa()}>Crear empresa</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        );
    }
}