Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/weekly_signup.csv", function(err, rows){
https://raw.githubusercontent.com/smoketerzai56/private/master/active/New%20blocks/New_Block3400000_all_blocks.csv?token=AsRnUdaYn1x8bz52QqBfWPM5MT_6RSjtks5cUKSrwA%3D%3D
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

for (var graph_num = 0 ; graph_num < 4; graph_num++)
{
  var graph_div = document.createElement("div");
  graph_div.id = "graph-" + graph_num;
  graph_div.setAttribute('class', 'content');
  document.body.appendChild(graph_div);

  //console.log(graph_div.id);

  switch(graph_num){
    case 0:
      var x = unpack(rows, 'week')
      var y = unpack(rows, 'new_user')
      var text = y.map(String)
      var trace1 =
      {
        type: 'bar',
        name: 'new_signup',
        text: text,
        textposition: 'outside',
        textfont: {color: '#afdc2f'},
        hoverinfo: 'none',
        x: x,
        y: y,
        marker: {
          color: '#afdc2f',
        },
      };

      var layout = {
        paper_bgcolor: '#F5F5F5',
        plot_bgcolor: '#F5F5F5',
        barmode: 'bar',
        title: 'SMOKE.IO weekly User Signups',
        titlefont:{color: '#afdc2f'},
        width: 740,
        showlegend: true,
        legend: {
          x: 1,
          y: 0.5
        },
        yaxis: {color: '#696969'},
        xaxis: {
          tickangle: '-60',
          color: '#696969'},
      };
      var data = [trace1]
      break


        case 1:

          var last_four_weeks = unpack(rows, 'week')
          var x = last_four_weeks.slice(-8)

          var last_four_new_user = unpack(rows, 'new_user')
          var y = last_four_new_user.slice(-8)

          var text = y.map(String)

          var trace1 =
          {
            type: 'bar',
            name: 'new_signup',
            text: text,
            textposition: 'outside',
            textfont: {color: '#FFFFFF'},
            hoverinfo: 'none',
            x: x,
            y: y,
            marker: {
              color: '#afdc2f',
            },
          };



          var layout = {
            paper_bgcolor: '#F5F5F5',
            plot_bgcolor: '#F5F5F5',
            barmode: 'bar',
            title: 'SMOKE.IO | weekly User Signups Last 8 weeks',
            titlefont:{color: '#afdc2f'},
            width: 740,
            showlegend: true,
            legend: {
              x: 1,
              y: 0.5
            },
            yaxis: {color: '#696969'},
            xaxis: {
              tickangle: '-60',
              color: '#696969'},
          };
          var data = [trace1]
          break

    case 2:
      var total = unpack(rows, 'total_user')
      //console.log('total',total)
      var text = total.map(String)
      var trace1 = {
        type: 'bar',
        name: 'New user',
        text: text,
        textposition: 'outside',
        textfont: {color: '#FFFFFF'},
        hoverinfo: 'none',
        x: unpack(rows, 'week'),
        y: unpack(rows, 'new_user'),
        marker: {
          color: '#afdc2f'
        },
      }

      var trace2 = {
        type: 'bar',
        name: 'Older user',
        x: unpack(rows, 'week'),
        y: unpack(rows, 'old_user'),
        marker: {
          color: '#20998a'
        },
      }


      var layout = {
        titlefont:{color: '#afdc2f'},
        paper_bgcolor: '#F5F5F5',
        plot_bgcolor: '#F5F5F5',
        barmode: 'stack',
        title: 'SMOKE.IO | weekly Total User Signup',
        width: 740,
        showlegend: true,
        legend: {
          x: 1,
          y: 0.5
        },
        yaxis: {color: '#696969'},
        xaxis: {
          tickangle: '-60',
          color: '#696969'},
      }

      var data = [trace2,trace1];
      break

      case 3:
        var last_four_weeks = unpack(rows, 'week')
        var x = last_four_weeks.slice(-8)

        var last_four_new_user = unpack(rows, 'new_user')
        var y = last_four_new_user.slice(-8)

        var last_four_old_user = unpack(rows, 'old_user')
        var y_old_user = last_four_old_user.slice(-8)

        var total = unpack(rows, 'total_user')
        total = total.slice(-8)
        //console.log('total',total)
        var text = total.map(String)
        var trace1 = {
          type: 'bar',
          name: 'New user',
          text: text,
          textposition: 'outside',
          textfont: {color: '#afdc2f'},
          hoverinfo: 'none',
          x: x,
          y: y,
          marker: {
            color: '#afdc2f'
          },
        }

        var trace2 = {
          type: 'bar',
          name: 'Older user',
          x: x,
          y: y_old_user,
          marker: {
            color: '#20998a'
          },
        }


        var layout = {
          titlefont:{color: '#afdc2f'},
          paper_bgcolor: '#F5F5F5',
          plot_bgcolor: '#F5F5F5',
          barmode: 'stack',
          title: 'SMOKE.IO | weekly Total User Signup Last 8 weeks',
          width: 740,
          showlegend: true,
          legend: {
            x: 1,
            y: 0.5
          },
          yaxis: {color: '#696969'},
          xaxis: {
            tickangle: '-60',
            color: '#696969'},
        }

        var data = [trace2,trace1];
        break
  }

  //console.log(data);

  Plotly.newPlot(graph_div, data, layout);
  Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO | weekly Total User Signup'});
}
})

Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/daily_signup.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var graph_div = document.createElement("div");
graph_div.id = "graph-3";
graph_div.setAttribute('class', 'content');
document.body.appendChild(graph_div);

//console.log(graph_div.id);

var x = unpack(rows, 'date')
x = x.slice(-30)
var y = unpack(rows, 'new_user')
y = y.slice(-30)

var trace1 =
{
  type: 'scatter',
  mode: 'lines',
  name: 'new_signup',
  hoverinfo: 'none',
  x: x,
  y: y,
  line: {
    shape: 'spline',
    smoothing: 1.3,
    color: '#afdc2f',
  }
};

var layout = {
  titlefont:{color: '#afdc2f'},
  paper_bgcolor: '#F5F5F5',
  plot_bgcolor: '#F5F5F5',
  barmode: 'bar',
  title: 'SMOKE.IO | Daily Signups Users Last 3o days',
  width: 740,
  showlegend: true,
  legend: {
    x: 1,
    y: 0.5
  },
  yaxis: {
    color: '#696969',
  },
  xaxis: {
    tickangle: '-60',
    color: '#696969',
  },
};
var data = [trace1]


//console.log(data);

Plotly.newPlot(graph_div, data, layout);
Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO Daily Signups Users'});

})

/*

Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/daily_activity_last_4_weeks.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var graph_div = document.createElement("div");
graph_div.id = "graph-3";
graph_div.setAttribute('class', 'content');
document.body.appendChild(graph_div);

//console.log(graph_div.id);

var x = unpack(rows, 'day')
var y = unpack(rows, 'new_user')

var trace1 =
{
  type: 'scatter',
  mode: 'lines',
  name: 'new_signup',
  hoverinfo: 'none',
  x: x,
  y: y,
  line: {
    shape: 'spline',
    smoothing: 1.3,
    color: '#FFFFFF',
  }
};

var layout = {
  titlefont:{color: '#FFFFFF'},
  plot_bgcolor: '#93CB56',
  paper_bgcolor: '#93CB56',
  barmode: 'bar',
  title: 'SMOKE.IO | Daily Signups Users Last 30 Days',
  width: 740,
  legend: {"orientation": "h"},
  yaxis: {
    color: '#FFFFFF',
  },
  xaxis: {
    tickangle: '60',
    color: '#FFFFFF',
  },
};
var data = [trace1]


//console.log(data);

Plotly.newPlot(graph_div, data, layout);
Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO Daily Signups Users Last 30 Days'});

})

*/

/*

Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/new_stat.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

for (var graph_num = 0 ; graph_num < 3; graph_num++)
{
  var graph_div = document.createElement("div");
  graph_div.id = "graphnew-" + graph_num;
  graph_div.setAttribute('class', 'content');
  document.body.appendChild(graph_div);

  //console.log(graph_div.id);

  switch(graph_num){
    case 0:
var trace4   = {
  type: 'bar',
  name: 'witness_update',
  textposition: 'outside',
  textfont: {color: '#FFFFFF'},
  hoverinfo: 'none',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'witness_update'),
  marker: {
    color: '#909090'
  },
}

var trace2 = {
  type: 'bar',
  name: 'account_update',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'account_update'),
  marker: {
    color: '#ECECEC'
  },
}

var trace3 = {
  type: 'bar',
  name: 'account_witness_proxy',
  textposition: 'outside',
  textfont: {color: '#FFFFFF'},
  hoverinfo: 'none',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'account_witness_proxy'),
  marker: {
    color: '#B8B8B8'
  },
}

var trace1 = {
  type: 'bar',
  name: 'account_witness_vote',
  x: unpack(rows, 'date'),
  y: unpack(rows, 'account_witness_vote'),
  marker: {
    color: '#FFFFFF'
  },
}



var data = [trace1,trace2,trace3,trace4];

var layout = {
  titlefont:{color: '#FFFFFF'},
  paper_bgcolor: '#93CB56',
  plot_bgcolor: '#93CB56',
  barmode: 'stack',
  title: 'SMOKE.IO Accounts',
  width: 740,
  legend: {"orientation": "h"},
  yaxis: {color: '#696969'},
  xaxis: {color: '#696969'},
};
break

//console.log(data);
case 1:
var trace2   = {
type: 'bar',
name: 'transfer',
textposition: 'outside',
textfont: {color: '#FFFFFF'},
hoverinfo: 'none',
x: unpack(rows, 'date'),
y: unpack(rows, 'transfer'),
marker: {
color: '#ECECEC'
},
}

var trace1 = {
type: 'bar',
name: 'claim_reward_balance',
x: unpack(rows, 'date'),
y: unpack(rows, 'claim_reward_balance'),
marker: {
color: '#FFFFFF'
},
}

var trace3 = {
type: 'bar',
name: 'transfer_to_vesting',
textposition: 'outside',
textfont: {color: '#FFFFFF'},
hoverinfo: 'none',
x: unpack(rows, 'date'),
y: unpack(rows, 'transfer_to_vesting'),
marker: {
color: '#909090'
},
}

var trace4 = {
type: 'bar',
name: 'withdraw_vesting',
x: unpack(rows, 'date'),
y: unpack(rows, 'withdraw_vesting'),
marker: {
color: '#B8B8B8'
},
}



var data = [trace1,trace2,trace3,trace4];

var layout = {
titlefont:{color: '#FFFFFF'},
paper_bgcolor: '#93CB56',
plot_bgcolor: '#93CB56',
barmode: 'stack',
title: 'SMOKE.IO Smoke Economy',
width: 740,
legend: {"orientation": "h"},
yaxis: {color: '#696969'},
xaxis: {color: '#696969'},
};
break

//console.log(data);
case 2:
var trace2   = {
type: 'bar',
name: 'comment',
textposition: 'outside',
textfont: {color: '#FFFFFF'},
hoverinfo: 'none',
x: unpack(rows, 'date'),
y: unpack(rows, 'comment'),
marker: {
color: '#ECECEC'
},
}

var trace1 = {
type: 'bar',
name: 'vote',
x: unpack(rows, 'date'),
y: unpack(rows, 'vote'),
marker: {
color: '#FFFFFF'
},
}

var trace3 = {
type: 'bar',
name: 'follow',
textposition: 'outside',
textfont: {color: '#FFFFFF'},
hoverinfo: 'none',
x: unpack(rows, 'date'),
y: unpack(rows, 'follow'),
marker: {
color: '#B8B8B8'
},
}

var trace4 = {
type: 'bar',
name: 'delete_comment',
x: unpack(rows, 'date'),
y: unpack(rows, 'delete_comment'),
marker: {
color: '#909090'
},
}



var data = [trace1,trace2,trace3,trace4];

var layout = {
titlefont:{color: '#FFFFFF'},
paper_bgcolor: '#93CB56',
plot_bgcolor: '#93CB56',
barmode: 'stack',
title: 'SMOKE.IO Smoke Social',
width: 740,
legend: {"orientation": "h"},
yaxis: {color: '#696969'},
xaxis: {color: '#696969'},
};

//console.log(data);
}
Plotly.newPlot(graph_div, data, layout);
Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO Smoke Social'});
}
})

*/


Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/monthly_signup.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var graph_div = document.createElement("div");
graph_div.id = "graph-4";
graph_div.setAttribute('class', 'content');
document.body.appendChild(graph_div);

//console.log(graph_div.id);


var total = unpack(rows, 'total_user')
//console.log('total',total)
var text = total.map(String)

var trace1 = {
  type: 'bar',
  name: 'New user',
  text: text,
  textposition: 'outside',
  textfont: {color: '#FFFFFF'},
  hoverinfo: 'none',
  x: unpack(rows, 'month'),
  y: unpack(rows, 'new_user'),
  marker: {
    color: '#afdc2f'
  },
}

var trace2 = {
  type: 'bar',
  name: 'Older user',
  x: unpack(rows, 'month'),
  y: unpack(rows, 'old_user'),
  marker: {
    color: '#20998a'
  },
}
var data = [trace2,trace1];

var layout = {
  titlefont:{color: '#afdc2f'},
  paper_bgcolor: '#F5F5F5',
  plot_bgcolor: '#F5F5F5',
  barmode: 'stack',
  title: 'SMOKE.IO monthly TOTAL USER SIGNUPS',
  width: 740,
  showlegend: true,
  legend: {
    x: 1,
    y: 0.5
  },
  yaxis: {color: '#696969'},
  xaxis: {
    tickangle: '-60',
    color: '#696969'},
};

//console.log(data);

Plotly.newPlot(graph_div, data, layout);
Plotly.downloadImage(graph_div, {format: 'png', width: 798, height: 485, filename: 'SMOKE.IO monthly Total User Signups'});

})
