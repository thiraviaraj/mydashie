import React from 'react';

class TestClassComp extends React.Component {
    constructor() {
        super();
    }
    state = {
        id: 1,
        t1: 11,
        formField: [{
            id: 'Kannan',
            name: 'One',
            type: 'text',
            required: true,
            pattern: 'a-z',
            errorMsg: 'Mandatory Field'
        },
        {
            id: 'Santhosh',
            name: 'One1',
            type: 'text',
            required: true,
            pattern: 'a-z',
            errorMsg: 'Mandatory Field'
        }
    ],
        errorMsg: ""
    };
    btnClicked = () => {
        console.log(this.state.id);
        this.doValidation();
    }
    valChanged (index,tar){
        let copyData = {...this.state, t1: tar.target.value};
        copyData.formField[index].id = tar.target.value;
        
        // copyData.id = tar.target.value;
        
        // console.log(copyData.id);
        this.setState(copyData);
    }
    addMe () {
        return (
            <h1>thiravi {this.state.id}</h1>
        )
    }
    doValidation () {
        // this.dispact('thirai')
        // this.addlistnert('thiravi', function)
        if(!this.state.formField)
            this.setState({errorMsg: "required"});
            // this.state.errorMsg = "Required";
    }
    render() {
        return (
            <React.Fragment>
                {this.props.id}
                {this.props.children}
                <div>form one</div>
                <h1>{this.state.errorMsg}</h1>
                <input type="button" onClick={this.btnClicked} />{this.state.t1}
                {this.addMe()}
                {
                    this.state.formField.map(
                        (item,index)=>{
                            
                            return (<span  key={item.name}><input type={item.type} value={item.id} onChange={this.valChanged.bind(this,index)} name={item.name} />
                            <span>{item.id}</span></span>)
                        }
                    )
                }
                {/* <FormCtrl items={this.state.formField} validity="noCheck" theme="default"></FormCtrl>
                <submit onClick={this.doValidation}></submit> */}
            </React.Fragment>
        )
    }
}

export default TestClassComp;