Plotly.d3.csv("https://raw.githubusercontent.com/terzai/smokeio_stats/master/weekly_signup.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

for (var graph_num = 0 ; graph_num < 2; graph_num++)
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
        textfont: {color: '#FFFFFF'},
        hoverinfo: 'none',
        x: x,
        y: y,
        marker: {
          color: '#FFFFFF',
        },
      };

      var layout = {
        paper_bgcolor: '#93CB56',
        plot_bgcolor: '#93CB56',
        barmode: 'bar',
        title: 'SMOKE.IO WEEKLY USER SIGNUPS',
        titlefont:{color: '#FFFFFF'},
        width: 740,
        legend: {"orientation": "h"},
        yaxis: {color: '#FFFFFF'},
        xaxis: {color: '#FFFFFF'},
      };
      var data = [trace1]
      break

    case 1:
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
          color: '#FFFFFF'
        },
      }

      var trace2 = {
        type: 'bar',
        name: 'Older user',
        x: unpack(rows, 'week'),
        y: unpack(rows, 'old_user'),
        marker: {
          color: '#ECECEC'
        },
      }
      var data = [trace2,trace1];

      var layout = {
        titlefont:{color: '#FFFFFF'},
        paper_bgcolor: '#93CB56',
        plot_bgcolor: '#93CB56',
        barmode: 'stack',
        title: 'SMOKE.IO WEEKLY TOTAL USER SIGNUPS',
        width: 740,
        showlegend: true,
        legend: {
          x: 1,
          y: 0.5
        },
        yaxis: {color: '#FFFFFF'},
        xaxis: {color: '#FFFFFF'},
      };
  }

  //console.log(data);

  Plotly.newPlot(graph_div, data, layout);
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
  title: 'SMOKE.IO | DAILY SIGNUP USERS',
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

})

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
    color: '#FFFFFF'
  },
}

var trace2 = {
  type: 'bar',
  name: 'Older user',
  x: unpack(rows, 'month'),
  y: unpack(rows, 'old_user'),
  marker: {
    color: '#ECECEC'
  },
}
var data = [trace2,trace1];

var layout = {
  titlefont:{color: '#FFFFFF'},
  paper_bgcolor: '#93CB56',
  plot_bgcolor: '#93CB56',
  barmode: 'stack',
  title: 'SMOKE.IO Monthly TOTAL USER SIGNUPS',
  width: 740,
  showlegend: true,
  legend: {
    x: 1,
    y: 0.5
  },
  yaxis: {color: '#FFFFFF'},
  xaxis: {color: '#FFFFFF'},
};

//console.log(data);

Plotly.newPlot(graph_div, data, layout);

})
