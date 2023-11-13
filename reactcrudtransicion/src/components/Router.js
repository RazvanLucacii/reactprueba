import React, { Component } from 'react'
import {Routes, Route, BrowserRouter, useParams} from 'react-router-dom';
import ModificarProducto from './ModificarProducto';
import HomeComponent from './HomeComponent';
import ProductosComponet from './ProductosComponent';
import DetallesProductos from './DetallesProductos';
import CrearProductos from './CrearProductos';
import EliminarProductos from './EliminarProductos';
import MenuProductos from './MenuProductos';

export default class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                <MenuProductos />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/productos" element={<ProductosComponet />} />
                    <Route path="/detalles/:id" element={<DetallesProductos />} />
                    <Route path="/modificar/:id" element={<ModificarProducto />} />
                    <Route path="/eliminar/:id" element={<EliminarProductos />} />
                    <Route path="/crear" element={<CrearProductos />} />
                </Routes>
            </BrowserRouter>
        )
    }
}