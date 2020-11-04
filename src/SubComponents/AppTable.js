import React,{moment, useState, useEffect} from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';
import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';
import DateFilter from '@inovua/reactdatagrid-community/DateFilter';
// import axios from 'axios'; 


// const loadData = ({ sortInfo }) => {
//   return fetch(DATASET_URL + '?_sort='+JSON.stringify(sortInfo))
//     .then(response => {
//       return response.json();
//     });
// }

// import * as ReactDOM from 'react-dom';
// import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
// import { ExcelExport, ExcelExportColumn, ExcelExportColumnGroup } from '@progress/kendo-react-excel-export';


const gridStyle = { minHeight: 500,marginTop: 10 };

const filterValue = [
    { name: 'application_name', operator: 'contains', type: 'string', value: '' },
    { name: 'application_domain', operator: 'contains', type: 'string', value: '' },
    { name: 'application_skill_category', operator: 'contains', type: 'string', value: '' },
    {
      name: 'appstartdate',
      operator: 'contains',
      type: 'date',
      value: ''
    },
    { name: 'application_status', operator:'inlist', type: 'select', value: '' }
  ];

  const getHeader = (column) => {
    return (cellProps) => {
      const { computedSortInfo } = cellProps;
      const title = column.charAt(0).toUpperCase() + column.slice(1);
      return <div style={{ display: 'inline-block' }}>
        {title}  {computedSortInfo ? 'Sort. ' + (computedSortInfo.dir === 1 ? 'ASC': 'DESC') : ''}
      </div>
    }
  }

  const HeaderRender = ({ value }) => {
    return (
      <div style={{ display: 'inline-block'}}>
        {value}
      </div>
    );
  }

  

const columns = [
  /*{ name: 'id', header: 'Id', defaultVisible: false, defaultWidth: 80, type: 'number' },*/
  {  name: 'application_name',
          defaultFlex: 1 , 
          // filterEditor: StringFilter,
             header: getHeader('Application Name'),
     render: HeaderRender,
     headerProps: {
        className: 'tableHeaders'
      }
},
  { name: 'application_domain',
  header: getHeader('Application Domain'),
  defaultFlex: 1 , 
  // filterEditor: SelectFilter,
 
   
     render: HeaderRender,
     headerProps: {
        className: 'tableHeaders'
      }
    },
    { name: 'application_skill_category',
   header: getHeader('Application Skill Category'),
     defaultFlex: 1,
    //  filterEditor: SelectFilter,
     render: HeaderRender,
     headerProps: {
        className: 'tableHeaders'
      },


    },
    // { name: 'appstartdate',

    // header: getHeader('Application Start Date'),
    // headerProps: {
    //   className: 'tableHeaders'
    // },
    // minWidth: 200,
    // defaultFlex: 1 ,
    //  filterEditor: DateFilter,
    //  filterEditorProps: (props, { index }) => {
    // //     // for range and notinrange operators, the index is 1 for the after field
    //     return {
    //       dateFormat: 'MM-DD-YYYY',
    //       cancelButton: false,
    //       highlightWeekends: true,
    // //       placeholder: index === 1 ? 'App start date - range 2...': 'App start date - range 1...'
    //     }
    //   },
    //   // render: ({ value,cellProps }) =>{
    //   // return moment(value).format('MM-DD-YYYY');
    //   // }     
    // },
    { name: 'application_status',
    header: getHeader('Application Life Cycle'),
    maxWidth: 1000,
     defaultFlex: 1,
     filterEditor: SelectFilter,
     filterEditorProps: {
      multiple: true,
      wrapMultiple: false,
      dataSource: ['Active', 'Inactive'].map(c => {
        return { id: c, label: c}
      }),
    },
     render: HeaderRender,
     headerProps: {
        className: 'tableHeaders'
      }  
    },

];

//This is Dummy 
// const AppData = [
//   { appname: 'ZAE', appdomain: 'bcd', appskill:'das', applifecycle:'Active' },
//   {  appname: 'AAE', appdomain: 'abc', appskill:'ere', applifecycle:'Inactive' },
// ];




function AppTable(){
  //when component mounts -  it loads the data from API
  
  
  const [data ,  setData ]= useState({}) ;
  useEffect(() => {
    (async () =>{
      const response = await fetch('http://localhost:9000/applications') ; 
      const data = await response.json(); 
      setData(data)

    }) (); 

  } , [])
 
  return (
  <div>
  <ReactDataGrid
    idProperty="id" className = "tableHeaders" 
    style={gridStyle}
    // enableFiltering
    defaultFilterValue={filterValue}
    columns={columns} 
    dataSource={data} /*pullig data from the state array */  
    pagination
    nativeScroll
    defaultLimit={20}
  />
  </div>
  )
};

export default AppTable;