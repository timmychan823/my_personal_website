import React, { Component } from 'react'
import BasicTable from './components/non-page/BasicTable/BasicTable.tsx';
import DataTable from './components/non-page/DataTable/DataTable.tsx';
import DashboardLayoutBasic from './components/page/DashboardLayout/DashboardLayout.tsx';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div>
        <DashboardLayoutBasic></DashboardLayoutBasic>
        {/* <div>Hi</div>
        <BasicTable></BasicTable>
        <DataTable></DataTable>
        <div>Ok</div> */}
      </div>
    )
  }
}
