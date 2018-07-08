import React from 'react';
import ReactDOM from 'react-dom';
import JsonTable from 'react-json-table'


import {connect} from 'react-redux';

import {Card, CardText, CardActions, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Toolbar from '../Toolbar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {SendIcon} from '../Icons';

import './oracle.css';

import {KnownAssets} from '../../domain/assets';
import {totals, isFetching} from '../../redux/utility';
// import {oracleAcc} from './oracle_seed'
export class Oracle extends React.Component {

    constructor(props) {
      super(props);
      this.state = { time: {}, seconds: 0 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    }
    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
    
        let obj = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return obj;
      }
    
      componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
      }
    
      startTimer() {
        if (this.timer == 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
      }
    
      countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
          time: this.secondsToTime(seconds),
          seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
          clearInterval(this.timer);
        }
      }

    render() {
      const {accounts, balances} = this.props;
  
      return (
        <div>
            {/* <button onClick={this.startTimer}>Reset</button> */}
         {/* {this.state.time.h} : {this.state.time.m} : {this.state.time.s} */}
            {/* title="BETTING BOARD" */}
            <table id="personDataTable">
    <tr>
    
    </tr>
    <tr>
    {this.state.time.h} : {this.state.time.m} : {this.state.time.s}
    </tr>
    <tr>
    <button onClick={this.startTimer}>Reset</button>
    </tr>
    <tr>
        <th>Horse</th>
        <th>Position</th>
        {/* <th>Spread</th> */}
    </tr>

    <tr>          
        <td>Actuariat</td>
        <td>1</td>
    </tr>

    <tr>          
        <td>Carry to Win</td>
        <td>2</td>
    </tr>

    <tr>          
        <td>Showing Character</td>
        <td>3</td>
    </tr>
    
    <tr>          
        <td>Rugby Diamond</td>
        <td>4</td>
    </tr>

    <tr>          
        <td>Peace on Earth</td>
        <td>5</td>
    </tr>

    <tr>          
        <td>King's Steed</td>
        <td>6</td>
    </tr>

    <tr>          
        <td>First Beaut</td>
        <td>7</td>
    </tr>

    <tr>          
        <td>Paddington</td>
        <td>8</td>
    </tr>

    <tr>          
        <td>Richcity Fortune</td>
        <td>9</td>
    </tr>

    <tr>          
        <td>Idyllic Wind</td>
        <td>10</td>
    </tr>

    <tr>          
        <td>Spicy Double</td>
        <td>11</td>
    </tr>

    <tr>          
        <td>Regency Honey</td>
        <td>12</td>
    </tr>

</table>
        </div>);
    }
  }

// var items = [
//     { name: 'Louise', age: 27, color: 'red' },
//     { name: 'Margaret', age: 15, color: 'blue'},
//     { name: 'Lisa', age:34, color: 'yellow'}
//   ];
  
//   var SelectTable = React.createClass({
//     getInitialState: function(){
//       // We will store the selected cell and row, also the sorted column
//       return {row: false, cell: false, sort: false};
//     },  
  
//     render: function(){
//       var me = this,
//           // clone the rows
//           items = this.props.rows.slice()
//       ;
//       // Sort the table
//       if( this.state.sort ){
//         items.sort( function( a, b ){
//            return a[ me.state.sort ] > b[ me.state.sort ] ? 1 : -1;
//         });
//       }
  
//       return <JsonTable
//         rows={items}
//         settings={ this.getSettings() }
//         onClickCell={ this.onClickCell }
//         onClickHeader={ this.onClickHeader }
//         onClickRow={ this.onClickRow } />;
//     },
  
//     getSettings: function(){
//         var me = this;
//         // We will add some classes to the selected rows and cells
//         return {
//           keyField: 'name',
//           cellClass: function( current, key, item){
//             if( me.state.cell == key && me.state.row == item.name )
//               return current + ' cellSelected';
//             return current;
//           },
//           headerClass: function( current, key ){
//               if( me.state.sort == key )
//                 return current + ' headerSelected';
//               return current;
//           },
//           rowClass: function( current, item ){
//             if( me.state.row == item.name )
//               return current + ' rowSelected';
//             return current;
//           }
//         };
//     },
  
//     onClickCell: function( e, column, item ){
//       this.setState( {cell: column} );
//     },
  
//     onClickHeader: function( e, column ){
//       this.setState( {sort: column} );
//     },
  
//     onClickRow: function( e, item ){
//       this.setState( {row: item.name} );
//     }  
//   });

// //   export default JsonTable;
  export default (Oracle);
// function getJson() {
//     return [{ "firstname": "first", "lastname": "f"}, {"firstname": "second", "lastname": "l"}];
//   }
  
//   class TableComponent extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         json: []
//       }
//     }
  
//     componentDidMount() {
//       this.setState((prevState) => {
//         return {
//           json: getJson()
//         }
//       })
//     }
  
//     render() {
//       return (
//         <div>
//           <table>
//             <thead>
//               <th>First Name</th>
//               <th>Last Name</th>
//             </thead>
//             <tbody>
//               {this.state.json.map((data, i) => {
//                 return (
//                   <tr key={i}>
//                     <td>{data.firstname}</td>
//                     <td>{data.lastname}</td>
//                   </tr>
//                 )
//               })}
//             </tbody>
//           </table>
//         </div>
//       )
//     }
//   }
  
  
//   ReactDOM.render(
//     <TableComponent />, 
//     document.getElementById("app")
//   );

// var dataW = [
//     {
//    empAverage:3,
//    reviewerAverage:4,
//    stdAverageOfTask:1
// }
// ]

// var ReviewCalculator = React.createClass({
// getInitialState: function() {
//  return {data: dataW};
// },
// render: function() {
//  return (
//     <table>
//        <tr>
//          <td>{this.state.data[0].reviewerAverage}</td>
//        </tr>
//     </table>
//  );

// }
// });
// ReactDOM.render(<ReviewCalculator/>, document.getElementById('container'));

{/* <div id="example"></div>

var cols = [
    { key: 'id', label: 'Id' },
    { key: 'userId', label: 'User' },    
    { key: 'title', label: 'Title' },
    { key: 'body', label: 'Body' }
];

var data = [
  {
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
];

var Table = React.createClass({

render: function() {
    var headerComponents = this.generateHeaders(),
        rowComponents = this.generateRows();

    return (
        <table>
            <thead> {headerComponents} </thead>
            <tbody> {rowComponents} </tbody>
        </table>
    );
},

generateHeaders: function() {
    var cols = this.props.cols;  // [{key, label}]

    // generate our header (th) cell components
    return cols.map(function(colData) {
        return <th key={colData.key}> {colData.label} </th>;
    });
},

generateRows: function() {
    var cols = this.props.cols,  // [{key, label}]
        data = this.props.data;

    return data.map(function(item) {
        // handle the column data within each row
        var cells = cols.map(function(colData) {

            // colData.key might be "firstName"
            return <td> {item[colData.key]} </td>;
        });
        return <tr key={item.id}> {cells} </tr>;
    });
}
});

React.render(<Table cols={cols} data={data}/>,  document.getElementById('example'));

export default Table; */}

// const styles = {
//   card: {
//     height: '100%'
//   }
// };

// const renderBalance = (isFetching, assetBalance) => {
//   if (isFetching) {
//     return (<span>fetching...</span>);
//   }
//   return (<span>{assetBalance.toString()} {assetBalance.assetName}</span>)
// };

// const filterByAsset = (balances, assetId) => {
//   return balances.map((b, address) => {
//     return {
//       address: address,
//       balance: b.items.find(i => i.assetId === assetId)
//     }
//   }).filter(i => i.balance);
// };

// const Oracle = (props) => {

//   const { balances } = props;
//   const waves = totals(balances, KnownAssets.Waves);
//   const fetching = isFetching(balances);

//   return (
//   <div>
//     <Toolbar
//       title="BOOK-KEEPING MANAGEMENT BOARD"
//     />
//   </div>);
// };

// const mapStateToProps = (state) => {
//   return {
//     balances: state.balances
//   };
// };

// export default connect(mapStateToProps, null)(Oracle);
