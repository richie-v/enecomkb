import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Papa from 'papaparse';

class TableComponent extends React.Component {
    render() {
        // Data
        var dataColumns = this.props.data.columns;
        var dataRows = this.props.data.rows;

        var tableHeaders = (<thead className="thead">
        <tr>
            {dataColumns.map(function (column) {
                return <th>{column}</th>;
            })}
        </tr>
        </thead>);

        var tableBody = dataRows.map(function (row) {
            return (
                <tr>
                    {dataColumns.map(function (column) {
                        return <td>{row[column]}</td>;
                    })}
                </tr>);
        });

        // Decorate with Bootstrap CSS
        return (<table className="table table-float-left table-bordered table-hover" width="47%%">
            {tableHeaders}
            {tableBody}
        </table>);
    }
}


// Example Data
var tableData = {
    columns: ['Stroom', 'Enkel', 'Dal', 'Normaal'],
    rows: [{
        'Stroom': 'Veterinary Assitance',
        'Enkel': 50,
        'Dal': '1 Hour',
        'Normaal': 12
    }, {
        'Stroom': 'Veterinary Assitance',
        'Enkel': 50,
        'Dal': '1 Hour',
        'Normaal': 12
    }, {
        'Stroom': 'Veterinary Assitance',
        'Enkel': 50,
        'Dal': '1 Hour',
        'Normaal': 12
    },{
        'Stroom': 'Veterinary Assitance',
        'Enkel': 50,
        'Dal': '1 Hour',
        'Normaal': 12
    },{
        'Stroom': 'Veterinary Assitance',
        'Enkel': 50,
        'Dal': '1 Hour',
        'Normaal': 12
    },{
        'Stroom': 'Veterinary Assitance',
        'Enkel': 50,
        'Dal': '1 Hour',
        'Normaal': 12
    }]
};

var tableData2 = {
    columns: ['Gas', ''],
    rows: [{
        'Gas': 'Variabel',
        '': 50
    }, {
        'Gas': 'Variabel',
        '': 50
    }, {
        'Gas': 'Variabel',
        '': 50
    }, {
        'Gas': 'Variabel',
        '': 50
    }, {
        'Gas': 'Variabel',
        '': 50
    }]
};

class Quotation extends React.Component {
    render() {
        return (
            <div className="quotation">
                <h1>{parseCSV()}</h1>
                <h1 className="compareHeader">Vergelijk uw tarieven</h1>
                <Product/>
                <TableComponent data={tableData}/>
                <TableComponent data={tableData2}/>
                <div className="explanationHolder">
                    <h2 className="explanationTitle">Toelichting tarieven</h2>
                    <p className="explanationBody">De hierboven genoemde tarieven zijn exclusief btw en netbeheerkosten
                        en gelden vanaf 1 februari 2018. De variabele leveringskosting in € per KWh of m<sup>3</sup>,
                        exclusief btw en energiebelasting, gelden bij een jaarlijks verbruik tot 10.000 kWh stroom en
                        170.000 m<sup>3</sup> gas. De vaste leveringskosten voor zowel stroom als gas bedragen € 71,88
                        (excl. btw) per jaar. De vermindering energiebelasting in 2018 bedraagt € 308,54 (excl. btw) per
                        jaar per stroomaansluiting. Energiebelasting is een heffing van de overheid die per eenheid
                        stroom en gas boven op de 'kale' leveringskosten komt. De energiebelasting wordt jaarlijks door
                        de overheid vastgesteld en is bij elke energieleverancier hetzelfde. Opslaag duurzame energie
                        (ODE) is een heffing van de overheid en geldt voor 1 - 10.000 kWh en 1 - 170.000 m<sup>3</sup>.
                    </p>
                </div>
            </div>
        );
    }
}

class Product extends React.Component {
    render() {
        return (
            <div className="product">
                <h2 className="productName">
                    Hoi
                </h2>
                <h3 className="productDisclaimer">
                    Alle hieronder vermelde tarieven en bedragen zijn exclusief btw. Voor meer informatie zie
                    toelichting.
                </h3>
            </div>
        )
    }
}

ReactDOM.render(
    <Quotation/>,
    document.getElementById('root'),
);

function parseCSV() {
    var reader = new FileReader();
    var results = Papa.parse("http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/C2ImportFamRelSample.csv", {
        download: true,
        complete: function (results) {
            console.log(results);
        }
    });
    return results;
}