function appReducer(state, action) {
    let chartData = [
        ['Page', 'Total Clicks'],
        ['Home', 100],
        ['About', 0],
        ['Services', 0],
        ['Contact', 0],
    ];
    let controlledState = {totalcount:0,
        resetcount:0,
     widgetData:[{
        id:1,
        text:'Total Home Clicks',
        totalClicks:0,
        percentage:0
    },
    {
        id:2,
        text:'Total About Clicks',
        totalClicks:0,
        percentage:0
    },
    {
        id:3,
        text:'Total Services Clicks',
        totalClicks:0,
        percentage:0
    },
    {
        id:4,
        text:'Total Contact Clicks',
        totalClicks:0,
        percentage:0
    }],
    chartData:chartData
};

    switch (action.type) {
      case 'reset': {
        return action.payload;
      }
      case 'CountClicks': {
        // if(!state[0] || (state[0] && state[0].ClickCounts == undefined)) {
        //     state[0] = {ClickCounts: 0};
        // } else {
            ++state.widgetData[action.index].totalClicks
            ++state.totalcount;
            state.widgetData.map((val) => {
                val.percentage = Math.floor((val.totalClicks/state.totalcount)*100);
                return val;
             });
             state.chartData.map((data,index) => { 
                if(index > 0){ 
                    data[1] = state.widgetData[index-1].percentage;
                    return data;
                }else{
                    return data;
                }
              })
            // state.widgetData[action.index].percentage = Math.floor((state.widgetData[action.index].totalClicks/state.totalcount)*100);
    //   }
        // return [
        //   ...state,
        //   {
        //     id: rand,
        //     text: ''
        //   },
        // ];
        return {
            ...state
        }
      }
      case 'ResetCounter': {
          ++state.resetcount;
          state.widgetData = controlledState.widgetData;
          state.totalcount = controlledState.totalcount;
          state.chartData.map((data,index) => { 
           if(index > 0){ 
               data[1] = state.widgetData[index-1].percentage;
               return data;
           }else{
               return data;
           }
         })
          return {
              ...state
        }
      }
      case 'setInitialState': {

        state = controlledState;

        return {...state};
      }
      default: {
        //state;
        debugger;
        return {...state};
      }
    }
}

export default appReducer;